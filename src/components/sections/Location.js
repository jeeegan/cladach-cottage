import React from 'react';

import { Section, Container } from '@components/global';

const Location = () => (
  <Section id="location" accent>
    <Container>
      <div>
        <h3>Travelling to Cladach Cottage</h3>
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
      <div><h3>TODO Maps API plugin</h3></div>
    </Container>
  </Section>
);

export default Location;
