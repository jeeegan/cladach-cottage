import React from 'react';
import styled from 'styled-components';

import { Container } from '@components/global';

const Footer = () => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h4>&copy; 2021 Cladach Cottage</h4>
            </Copyright>
            <p>Cladach Cottage,
Port Charlotte,
Isle of Islay,
PA48 7UD</p>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
);

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
