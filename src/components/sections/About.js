import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_view_to_beach: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "view_to_beach" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_portnahaven: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "portnahaven" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_log_burner: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "log_burner" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <Grid>
            <div>
              <h2>Beachfront Accomodation</h2>
              <p>
                Situated in the pictueresque conservation village of Port
                Charlotte on The Isle of Islay - The Queen of the Hebridies.
                This self-catering cottage is split over 2 levels with stunning
                panaramic views of Loch Indaal.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_view_to_beach.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_portnahaven.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Explore Port Charlotte & Islay</h2>
              <p>
                Port Charlotte is a perfect base from which to explore Islay,
                and this accommodation overlooks a safe, sandy beach. Cladach
                Cottage is near The Port Charlotte Hotel, an award winning
                restaurant and bar offering local produce, a wide selection of
                local malt whiskys and live music.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Home from Home</h2>
              <p>
                Sleeping up to 5 people, this fully-furnished cottage has free
                high-speed wi-fi and a kitchen with all modern appliances. Enjoy
                the generous lounge with cozy log burner. Relax in the
                downstairs master double bedroom. Perfect for the whole family
                with the 3 single beds in the upstairs bedroom.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_log_burner.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
