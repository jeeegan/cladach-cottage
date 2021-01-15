import React from 'react';
import styled from 'styled-components';
import ExternalLink from '@common/ExternalLink';
import droneVideo from '@static/drone_video.mp4';

const Header = () => (
  <HeaderWrapper>
    <div className="bg-video">
      <video autoPlay muted loop playsInline id="video" className="content">
        <source src={droneVideo} type="video/mp4" />
      </video>
    </div>
    <div className="text">
      <h1>
        Port Charlotte,
        <br />
        Isle of Islay
      </h1>
      <br />
      <p>
        <StyledExternalLink href="#book">
          Book now &nbsp;&#x2794;
        </StyledExternalLink>
      </p>
    </div>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  padding-top: 110px;

  .bg-video {
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .content {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    box-shadow: 0px 1px 5px ${props => props.theme.color.grey.dark};
  }

  .text {
    color: rgba(246, 246, 246, 1);
    margin: 0 auto;
    position: absolute;
    top: 20vh;
    left: 20vw;
    animation: moveInLeft 2s;
  }

  h1 {
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    ${props => props.theme.font_size.xxlarge};
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 90px;
    h1 {
      padding-top: 80px;
      ${props => props.theme.font_size.xlarge}
    }

    .text {
      top: 15vh;
      left: 15vw;
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    padding-top: 90px;
    h1 {
      padding-top: 0;
      ${props => props.theme.font_size.large}
    }

    .text {
      top: 15vh;
      left: 15vw;
    }
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    h1 {
      ${props => props.theme.font_size.large}
    }
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
  
    80% {
      transform: translateX(1rem);
    }
  
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: rgba(246, 246, 246, 0.85);
  text-shadow: 5px 5px 5px rgba(0,0,0,.25);
  text-decoration: none;
  margin: 0 auto;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }

  ${props => props.theme.font_size.xlarge}

  @media (max-width: ${props => props.theme.screen.sm}) {
    ${props => props.theme.font_size.large}
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    ${props => props.theme.font_size.regular}
  }
`;

export default Header;
