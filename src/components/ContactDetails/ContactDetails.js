import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import Contacts from '../../services/contacts';

import ContactCard from './ContactCard';

const PaperContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)`
  max-width: 800px;
  width: 100%;
`;

const CenteredContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const HEADER_HEIGHT = '64px';
const Article = styled.article`
  background: ${props => props.theme['--color-light']};
  height: calc(100% - ${HEADER_HEIGHT} + 1em);
  position: fixed;
  top: calc(${HEADER_HEIGHT} + 1em);
  width: 100%;

  ${({ collapsed, theme }) =>
    collapsed
      ? ''
      : `
        @media (${theme['--screen-medium']}) {
          left: 32rem; padding-left: 2em;
          width: calc(100% - 34rem);
        }`}
`;

class ContactDetails extends Component {
  state = {
    data: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    const { contactId } = this.props;
    this.loadContact(contactId);
  }

  componentDidUpdate(prevProps) {
    const { contactId } = this.props;
    if (contactId !== prevProps.contactId) {
      this.loadContact(contactId);
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
    const { data, loading, error } = this.state;

    let mainContent = (
      <CenteredContainer>
        <CircularProgress />
      </CenteredContainer>
    );

    if (!loading) {
      if (data === null) {
        mainContent = (
          <React.Fragment>
            <p>Contact details not loaded</p>
            {error && <p>{error}</p>}
          </React.Fragment>
        );
      } else {
        mainContent = (
          <PaperContainer>
            <StyledPaper>
              <ContactCard {...data} />
            </StyledPaper>
          </PaperContainer>
        );
      }
    }

    return <Article>{mainContent}</Article>;
  }
}

ContactDetails.propTypes = {
  contactId: PropTypes.string.isRequired,
};

export default ContactDetails;
