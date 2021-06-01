import React from 'react';

import ProfileImage from './ProfileImage.component';
import Button from './Global/Button.component';

const Hero = () => {
  return (
    <section
      id="top"
      className="flex flex-wrap max-w-md px-6 py-16 mx-auto sm:max-w-xl md:max-w-4xl lg:max-w-5xl md:py-24 lg:py-40"
    >
      <div className="flex items-center justify-center w-full md:w-1/3">
        <ProfileImage
          className="w-40 transition duration-500 ease-in-out transform sm:w-44 md:w-48 lg:w-64 hover:scale-110"
          alt="Antonin Nhek Nenderoid version"
        />
      </div>
      <div className="flex items-center mt-6 md:w-2/3 md:mt-0 md:pl-3 lg:pl-6">
        <div className="flex flex-col items-center text-primary dark:text-secondary md:items-start">
          <h1 className="mb-3 text-xl text-center text-gray-800 font-body md:text-2xl lg:text-2_5xl dark:text-secondary_light">
            Hi! I'm <span className="font-bold">Đạt Nguyễn</span>
          </h1>
          <h2 className="mb-4 font-bold leading-tight text-center text-2_5xl md:text-left sm:text-3xl md:text-4xl lg:text-5xl">
            Visual Designer &<br /> Front-end Developer
          </h2>
          <h3 className="w-full mb-6 text-xl text-center text-gray-800 font-body md:text-1xl lg:text-2xl dark:text-gray-100 md:text-left md:max-w-md lg:max-w-xl">
            I design and develop responsive, optimized and efficient websites.{' '}
            <span>Currently available for freelance opportunities.</span>
          </h3>
          <div className="flex flex-row items-center">
            <Button link="#contact" style={`mb-4 mr-4`} text="Get in touch" />
            <Button
              link="https://www.dropbox.com/s/78fl9l4mwwmaoeh/antonin-nhek-cv-int.pdf"
              style={`mb-4`}
              text="My resume"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
