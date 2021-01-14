import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Book = () => (
  <Section id="book" accent>
    <StyledContainer>
      <div>
        <h1>TODO: Booking form</h1>
      </div>
      <div></div>
    </StyledContainer>
  </Section>
);

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
`;

export default Book;
