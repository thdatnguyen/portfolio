import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';

import ButtonStyles from './ButtonStyles.style';

const Button = ({ link, classStr, text }) => {
  const isAnchor = /^[#]/g.test(link);
  const isURL = /^[http]/g.test(link);
  let type;
  if (isAnchor) {
    type = 'anchor';
  } else if (isURL) {
    type = 'url';
  } else type = 'link';
  return (
    <ButtonStyles type={type} $classStr={classStr}>
      {isAnchor ? (
        <AnchorLink href={link}>{text}</AnchorLink>
      ) : isURL ? (
        <a target="_blank" rel="noreferrer" href={link}>
          {text}
        </a>
      ) : (
        <Link to={link}>{text}</Link>
      )}
    </ButtonStyles>
  );
};

export default Button;
