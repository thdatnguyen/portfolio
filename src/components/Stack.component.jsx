import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

function Stack() {
  const {
    stacks: { nodes: stacks },
  } = useStaticQuery(graphql`
    query {
      stacks: allSanityStack {
        nodes {
          id
          name
          image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              originalFilename
              url
            }
          }
        }
      }
    }
  `);
  return (
    <div className="flex flex-wrap justify-center mx-auto lg:max-w-3xl xl:max-w-6xl">
      {stacks.map((stack) => (
        <div
          key={stack.id}
          className="flex items-center justify-between p-2 m-2 border rounded"
        >
          <span
            data-tip={stack.name}
            data-offset="{'top': -5}"
            data-class="tooly "
          >
            <img
              src={stack.image.asset.url}
              className="inline-block w-16 transition duration-500 ease-in-out transform md:w-20 hover:scale-110"
              alt={stack.name}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

export default Stack;
