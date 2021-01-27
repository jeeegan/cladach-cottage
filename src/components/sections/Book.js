import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

const Book = () => (
  <Section id="book" accent>
    <StyledContainer>
    <div>
        <p>
          If you are interested in booking a stay at Cladach Cottage please fill
          out the booking request form below and we'll get back to you as soon as we
          can.{' '}
        </p>
      </div>
      <BookingForm
        method="POST"
        name="contact-form"
        data-netlify="true"
        action="/thank-you"
      >
        <div className="field">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="field">
          <label htmlFor="contact_number">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            id="contact_number"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="guests">Guests</label>
          <select name="guests" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">Tell us about your trip</label>
          <textarea name="message" id="message" rows="6" required></textarea>
        </div>
        <input type="hidden" name="form-name" value="contact-form" />

        <input type="submit" value="Submit" className="btn"/>

        <input type="reset" value="Clear" className="btn"/>
      </BookingForm>
    </StyledContainer>
  </Section>
);

const StyledContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 75%;
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
  }
`;

const BookingForm = styled.form`
  width: 75%;
  margin: 2rem;
  font-size: 1.5rem;
  font-family: inherit;

  input,
  select,
  textarea {
    background-color: ${props => props.theme.color.grey.light};
    border: none;
    border-radius: 5px;
    width: 100%;
    &:focus {
      outline: none;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
      border-bottom: 3px solid ${props => props.theme.color.grey.dark};
    }
  }
  .btn {
    width: 35%;
    margin-top: 1rem;
    margin-right: 1rem;
    height: 2.5rem;
    &:hover {
      color: ${props => props.theme.color.grey.light};
      background-color: ${props => props.theme.color.grey.dark};
    }
  }

  label {
    margin: .8rem 0;
    display: inline-block;
  }


`;

export default Book;
