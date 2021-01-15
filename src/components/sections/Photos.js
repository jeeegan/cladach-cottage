import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const PHOTOS = [
  { image: 'cottage_views.jpg', title: 'Whisky Views' },
  { image: 'cottage.jpg', title: 'Cladach Cottage' },
  { image: 'outdoor_seating.jpg', title: 'Outdoor Seating' },
  { image: 'garden_view.jpg', title: 'Garden View' },
  { image: 'cottage_garden.jpg', title: 'Cottage Garden' },
  { image: 'port_charlotte_aerial.jpg', title: 'Port Charlotte' },
  { image: 'loch_indaal.jpg', title: 'Loch Indaal' },
  { image: 'lounge_seating.jpg', title: 'Lounge Seating' },
  { image: 'lounge.jpg', title: 'Lounge' },
  { image: 'master_bedroom.jpg', title: 'Master Bedroom' },
  { image: 'upstairs_bedroom_left.jpg', title: 'Upstairs Bedroom Left' },
  { image: 'upstairs_bedroom_right.jpg', title: 'Upstairs Bedroom Right' },
  { image: 'kitchen.jpg', title: 'Kitchen' },
  { image: 'bathroom.jpg', title: 'Bathroom' },
];

const Photos = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 700, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ImagesSection id="photos" accent="secondary">
        <Container>
          <ImagesGrid>
            {PHOTOS.map(({ image, title }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={title} className="img_div">
                  <Img fluid={img.childImageSharp.fluid} alt={title} />
                </div>
              );
            })}
          </ImagesGrid>
        </Container>
      </ImagesSection>
    )}
  />
);

const ImagesSection = styled(Section)`
  width: 100%;
`;

const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 100%;
  justify-content: center;
  transition: all 0.2s;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  img,
  .img_div {
    box-shadow: 3px 3px 3px ${props => props.theme.color.grey.dark};

    &:hover {
      transform: scale(1.1);
      overflow: auto;
      transform: scale(1.05);
      box-shadow: 3px 3px 3px ${props => props.theme.color.primary};
      border-radius: 5px;
    }
  }
`;

export default Photos;
