import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Button from './Global/Button/Button.component';
import Portrait from './Portrait.component';

const Hero = () => {
  const { content } = useStaticQuery(graphql`
    query {
      content: sanityHero(id: { eq: "-75f29528-080c-5c8a-aa3c-d69bc6feba78" }) {
        id
        name
        work
        detail
        profileImage {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
        resume {
          resumeLink
        }
      }
    }
  `);
  return (
    <section
      id="top"
      className="flex flex-wrap max-w-md px-6 pt-24 pb-16 mx-auto min-h-3/4 lg:min-h-screen sm:max-w-xl md:max-w-4xl lg:max-w-5xl md:py-24 lg:py-40"
    >
      <div className="flex items-center justify-center w-full md:w-1/3">
        <div className="mx-auto mt-12 mb-10 overflow-hidden rounded-full w-60 h-60 lg:w-72 lg:h-72 md:mb-12">
          <Portrait
            image={content.profileImage.asset}
            alt={content.name || 'Profile Image'}
          />
        </div>
      </div>
      <div className="flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-3 lg:pl-6">
        <div className="flex flex-col items-center text-primary dark:text-secondary md:items-start">
          <h1 className="mb-3 text-xl text-center text-gray-800 font-body md:text-2xl lg:text-2_5xl dark:text-secondary_light">
            Hi! I'm <span className="font-bold">{content.name}</span>
          </h1>
          <h2 className="mb-4 font-bold leading-tight text-center text-2_5xl md:text-left sm:text-3xl md:text-4xl lg:text-5xl">
            {content.work}
          </h2>
          <h3 className="w-full mb-6 text-xl text-center text-gray-800 font-body md:text-1xl lg:text-2xl dark:text-gray-100 md:text-left md:max-w-md lg:max-w-xl">
            {content.detail}
          </h3>
          <div className="flex flex-row items-center">
            <Button link="#contact" classStr="mb-4 mr-4" text="Get in touch" />
            {content.resume.resumeLink && (
              <Button
                link={content.resume.resumeLink}
                classStr="mb-4"
                text="My resume"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
