import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactTooltip from 'react-tooltip';

function Social() {
  const {
    socials: { nodes: socials },
  } = useStaticQuery(graphql`
    query {
      socials: allSanityContact {
        nodes {
          id
          name
          contactImage {
            asset {
              url
            }
          }
          link
        }
      }
    }
  `);
  return (
    <div className="text-4xl w-44 md:w-48 lg:w-64 md:text-4xl lg:text-5xl">
      <ul className="flex items-center justify-between">
        {socials.map((social) => (
          <li className="flex" key={social.id}>
            <span
              data-tip={social.name}
              data-offset="{'top': -10}"
              data-class="tooly flex items-center justify-between"
            >
              <a className="cursor-pointer light dark" href={social.link}>
                <span className="sr-only">{social.name}</span>
                <img
                  src={social.contactImage.asset.url}
                  className="w-16 transition duration-500 ease-in-out transform max-h-10 md:w-20 hover:scale-110"
                  alt={social.name}
                />
              </a>
            </span>
          </li>
        ))}
      </ul>
      <ReactTooltip place="bottom" effect="solid" />
    </div>
  );
}

export default Social;
