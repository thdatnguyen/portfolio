import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Portrait({ image, alt }) {
  return <GatsbyImage image={image.gatsbyImageData} alt={alt} />;
}
