import React from 'react';
// import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
// import Portrait from './portrait';
// import Stack from './stack';
import Integration from './Icons/Integration.icon';
import Design from './Icons/Design.icon';
import Development from './Icons/Development.icon';
import Button from './Global/Button.component';
import Portrait from './Portrait.component';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32"
    >
      <div className="w-48 h-48 mx-auto mt-12 mb-10 overflow-hidden rounded-full md:w-56 md:h-56 md:mb-12">
        <Portrait />
      </div>
      <div className="text-gray-800 dark:text-white">
        <div className="mx-auto mb-24">
          <p className="font-bold leading-snug text-left text-1xl md:text-center sm:text-2xl md:text-3xl lg:text-4xl font-header">
            I'm Đạt Nguyễn, Front-end developer in Vietnam. After several years
            in graphic design and a retraining in web programming, I offer my
            services as a freelance."
          </p>
        </div>
        <div className="mb-24">
          <h3 className="mb-8 text-xl font-bold text-center uppercase md:text-2xl font-header text-primary dark:text-secondary">
            My actual stack
          </h3>
          {/* <Stack /> */}
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
            Passionate about design and front-end web development, I am
            committed to carrying out the opportunities entrusted to me by
            building modern and effective solutions. Rigorous and demanding, I
            take care to respect the best practices and standards of the Web.
            Being also curious and open, I like to experiment with the latest
            trends through daily monitoring.
          </p>
          <div className="flex justify-center">
            <Button
              link="https://www.dropbox.com/s/78fl9l4mwwmaoeh/antonin-nhek-cv-int.pdf"
              style={``}
              text="Download my Resume"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
