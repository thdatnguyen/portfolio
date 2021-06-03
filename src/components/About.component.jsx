import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Button from './Global/Button/Button.component';
import Portrait from './Portrait.component';
import Stack from './Stack.component';

const About = () => {
  const {
    about: { nodes: about },
  } = useStaticQuery(graphql`
    query {
      about: allSanityAbout {
        nodes {
          id
          aboutImage {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          aboutHeading
          aboutDetail
          resume {
            resumeLink
          }
        }
      }
    }
  `);
  return (
    <section
      id="about"
      className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32"
    >
      <div className="w-48 h-48 mx-auto mt-12 mb-10 overflow-hidden rounded-full md:w-64 md:h-64 md:mb-12">
        <Portrait
          image={about[0].aboutImage.asset}
          alt={about[0].aboutHeading}
        />
      </div>
      <div className="text-gray-800 dark:text-white">
        <div className="mx-auto mb-24">
          <p className="font-bold leading-snug text-left text-1xl md:text-center sm:text-2xl md:text-3xl lg:text-4xl font-header">
            {about[0].aboutHeading}
          </p>
        </div>
        <div className="mb-24">
          <h3 className="mb-8 text-xl font-bold text-center uppercase md:text-2xl font-header text-primary dark:text-secondary">
            My actual stack
          </h3>
          <Stack />
        </div>
        {/* <div className="flex flex-col mb-24 lg:-mx-6 lg:flex-row">
          <div className="w-2/3 mx-auto mb-12 text-center sm:w-2/3 lg:mb-0 lg:mx-6 lg:w-1/3 lg:w-full">
            <Design className="w-16 mx-auto mb-6 sm:w-20" />
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
              <FormattedMessage id="services.design.title" />
            </h3>
            <p className="text-xl md:text-2xl">
              <FormattedMessage id="services.design.desc" />
            </p>
          </div>
          <div className="w-2/3 mx-auto mb-12 text-center sm:w-2/3 lg:mb-0 lg:mx-6 lg:w-1/3 lg:w-full">
            <Integration className="w-16 mx-auto mb-6 sm:w-20" />
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
              <FormattedMessage id="services.integration.title" />
            </h3>
            <p className="text-xl md:text-2xl">
              <FormattedMessage id="services.integration.desc" />
            </p>
          </div>
          <div className="w-2/3 mx-6 mx-auto mb-0 text-center lg:mx-6 sm:w-2/3 lg:w-1/3 lg:w-full">
            <Development className="w-16 mx-auto mb-6 sm:w-20" />
            <h3 className="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
              <FormattedMessage id="services.development.title" />
            </h3>
            <p className="text-xl md:text-2xl">
              <FormattedMessage id="services.development.desc" />
            </p>
          </div>
        </div> */}
        <div className="mb-12">
          <p className="mb-8 text-xl md:mb-16 md:leading-relaxed md:text-center md:text-2xl">
            {about[0].aboutDetail}
          </p>
          <div className="flex justify-center">
            <Button
              link={about[0].resume.resumeLink}
              text="Download my Resume"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
