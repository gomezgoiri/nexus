import React from 'react';
import styled from 'styled-components';

import { ContactProp } from '../../ContactProps';
import Header from './Header';
import AttributeList from './AttributeList';

const Container = styled('section')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactCard = details => (
  <React.Fragment>
    <Header {...details} />
    <Container>
      <AttributeList {...details} />
    </Container>
  </React.Fragment>
);

ContactCard.propTypes = ContactProp;

export default ContactCard;
