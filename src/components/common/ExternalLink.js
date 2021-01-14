import React from 'react';

const ExternalLink = ({ href, children, ...other }) => (
  <a href={href} {...other} rel="noreferrer noopener">
    {children}
  </a>
);

export default ExternalLink;
