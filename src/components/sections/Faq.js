import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';

const FAQS = [
  {
    title: 'What facilities does the cottage have?',
    content: () => (
      <>
        The Cottage is split over two levels with open access to the beach front
        and views over Loch Indaal. Internally the property comprises the
        following:
        <ul>
          <li>Master double bedroom</li>
          <li>Upstairs bedroom (3 Single beds)</li>
          <li>Bathroom with 3 piece suite</li>
          <li>Good sized Lounge</li>
          <li>
            Modern fully operational kitchen with intergrated appliances ,
            Washer/Dryer, Fridge/Freezer, Dishwasher and Electric Hob and
            Oven
          </li>
          <li>Has the ability to sleep 5 people</li>
          <li>Free WiFi Internet Access</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Where can I eat and drink in Port Charlotte?',
    content: () => (
      <>
        The village of Port Charlotte has a hotel serving restaurant and bar
        meals, a friendly pub, a general store with Post Office and a small
        petrol station. Lochindaal Kitchen restaurant adjacent to the cottage,
        specialises in locally caught crab, lobster and scallops. Succulent
        oysters, farmed in the clear waters of Loch Gruniart, can be purchased
        at Craigens farm.
      </>
    ),
  },
  {
    title: 'What activities are available on Islay?',
    content: () => (
      <>
        Port Charlotte is a perfect base from which to explore Islay, and this
        accommodation overlooks a safe, sandy beach. Cladach Cottage is near The
        Port Charlotte Hotel, an award winning restaurant and bar offering local
        produce, a wide selection of local malt whiskies and live music. Islay
        is a place in which to relax, revive and refresh yourself. Some of
        Islay's most popular leisure activities include...
        <ul>
          <li>Fishing</li>
          <li>Walking</li>
          <li>Cycling</li>
          <li>Whisky Tasting & Distillery Tours</li>
          <li>Horse Riding</li>
          <li>Golfing + much more...</li>
        </ul>
      </>
    ),
  },
  {
    title: 'How can I book?',
    content: () => (
      <>
        The easiest way to request to book the cottage is to fill out our <a href="#book">booking request form</a>. 
      </>
    ),
  },
  {
    title: 'I have a question not answered here',
    content: () => (
      <>
        If you have any other questions please <a href="malito:enquiries@cladachcottage.co.uk">send an email</a>.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq" accent="secondary">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
