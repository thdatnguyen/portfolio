import React from 'react';
import Form from './Form.component';

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-3xl px-6 py-20 mx-auto sm:px-10 lg:px-0 md:py-20 lg:py-32"
    >
      <header className="mb-10 text-left md:text-center md:mb-20">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-primary dark:text-secondary lg:text-5xl font-header">
          Get in touch
        </h2>
        <p className="text-xl text-gray-800 dark:text-white md:text-2xl">
          Do you have web development projects, freelance missions or just
          opportunities to offer me? Let's get in touch and discuss it over a
          coffee!
        </p>
      </header>
      <Form />
    </section>
  );
};

export default Contact;
