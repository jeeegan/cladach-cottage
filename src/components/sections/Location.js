import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Location = () => (
  <Section id="location" accent>
    <StyledContainer>
      <div>
        <p>Cladach Cottage is located in Port Charlotte, our postcode is PA48 7UD.</p>
        <p>
          It is essential to book all travel well in advance, please ask us for
          contact details of flight, ferry and coach companies.
        </p>
        <h3>By Air</h3>
        <p>
          From Glasgow airport, a daily service (except Sundays) flying over the
          Firth of Clyde and the Kintyre peninsula to the Isle of Islay.
        </p>
        <h3>By Road & Ferry</h3>
        <p>
          Via Glasgow, driving alongside Loch Lomond and down the west coast of
          Loch Fyne to Kennacraig. From Kennacraig, take a ferry passing the
          islands of Gigha and Jura to Islay with several daily sailings each
          taking just over two hours.
        </p>
      </div>
      <GMap>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8984.536489370084!2d-6.387378056449905!3d55.73879856877946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488a5e9048bac947%3A0x13c67c5c2fc0adee!2sCladach%20Cottage!5e0!3m2!1sen!2suk!4v1610708516455!5m2!1sen!2suk"
        id="googlemap"
        title="googlemap"
        style={{width:"100%", height: "100%", border: "none"}}></iframe>
      </GMap>
    </StyledContainer>
  </Section>
);

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-content: center;
  }
  p {
    padding: 10px 0;
  }
`;

const GMap = styled.div`
width: 100%;
height: 600px;
padding: 60px 100px;
@media (max-width: ${props => props.theme.screen.sm}) {
  height: 400px;
  padding: 20px 0;
}
`;

export default Location;
