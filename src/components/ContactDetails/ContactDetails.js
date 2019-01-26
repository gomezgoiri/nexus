import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { rgba } from 'polished';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import Contacts from '../../services/contacts';

import ContactCard, { Header } from './ContactCard';

const PaperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  max-width: 800px;
  width: 100%;
`;

class ContactDetails extends Component {
  state = {
    data: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { match } = this.props;
    this.loadContact(match.params.id);
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { id } = prevProps.match.params;
    if (match.params.id !== id) {
      this.loadContact(match.params.id);
    }
  }

  loadContact(contactId) {
    this.setState({ loading: true, error: false }, async () => {
      try {
        this.setState({
          data: await Contacts.read(contactId),
          loading: false,
        });
      } catch (error) {
        this.setState({ data: null, loading: false, error: true });
      }
    });
  }

  render() {
    const { className } = this.props;
    const { data, loading, error } = this.state;

    let mainContent = <CircularProgress />;
    if (!loading) {
      if (data === null) {
        mainContent = (
          <React.Fragment>
            <p>Contact details not loaded</p>
            {error && <p>{error}</p>}
          </React.Fragment>
        );
      } else {
        mainContent = <ContactCard {...data} />;
      }
    }

    return (
      <article className={className}>
        <PaperContainer>
          <StyledPaper>{mainContent}</StyledPaper>
        </PaperContainer>
      </article>
    );
  }
}

ContactDetails.propTypes = {
  className: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }).isRequired,
  }).isRequired,
};

const HEADER_HEIGHT = '64px';

export default styled(ContactDetails)`
  background: ${props => props.theme['--color-light']};
  height: calc(100% - ${HEADER_HEIGHT} + 1em);
  position: fixed;
  top: calc(${HEADER_HEIGHT} + 1em);
  width: 100%;
  //
  ${Header} {
    ${props => props.theme['--font-extra-large']};
    align-items: center;
    display: flex;
    height: 5rem;
    justify-content: center;
    text-align: center;
  }

  @media (${props => props.theme['--screen-medium']}) {
    border-left: 1px solid ${props => rgba(props.theme['--color-dark'], 0.1)};
    left: 32rem;
    width: calc(100% - 32rem);
  }
`;
