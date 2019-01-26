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
  };

  async componentDidMount() {
    const { match } = this.props;
    this.setState({ data: await Contacts.read(match.params.id) });
  }

  async componentDidUpdate(prevProps) {
    const { match } = this.props;
    const { id } = prevProps.match.params;
    if (match.params.id !== id) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({ data: await Contacts.read(match.params.id) });
    }
  }

  render() {
    const { className } = this.props;
    const { data } = this.state;
    return (
      <article className={className}>
        {data === null ? (
          <CircularProgress />
        ) : (
          <PaperContainer>
            <StyledPaper>
              <ContactCard {...data} />
            </StyledPaper>
          </PaperContainer>
        )}
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

export default styled(ContactDetails)`
  background: ${props => props.theme['--color-light']};
  height: calc(100% - 2.5rem);
  position: fixed;
  top: 2.5rem;
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
