import React from 'react';

const Form = () => {
  const blockStyle = 'mb-6 md:mb-10 ';
  const labelStyle =
    'dark:text-secondary uppercase text-gray-800 font-bold text-xl font-header';
  const inputStyle =
    'w-full px-3 py-3 mt-2 text-lg text-gray-800 dark:bg-white border rounded border-primary_light focus:border focus:border-primary focus:outline-none font-body bg-gray-100';

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="contact" value="contact" />

      <div className="flex flex-col md:flex-row">
        <div className={blockStyle + 'w-full md:w-1/2 md:mr-6'}>
          <label className={labelStyle} htmlFor="firstname">
            First name
            <input
              type="text"
              id="firstname"
              name="firstname"
              className={inputStyle}
              placeholder="Tada"
              required
            />
          </label>
        </div>

        <div className={blockStyle + 'w-full md:w-1/2'}>
          <label className={labelStyle} htmlFor="lastname">
            Last name
            <input
              type="text"
              id="lastname"
              name="lastname"
              className={inputStyle}
              placeholder="Kobayakawa"
              required
            />
          </label>
        </div>
      </div>

      <div className={blockStyle}>
        <label className={labelStyle} htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            className={inputStyle}
            placeholder="thdat.nguyen@gmail.com"
            required
          />
        </label>
      </div>

      <div className={blockStyle}>
        <label className={labelStyle}>
          Message
          <textarea name="message" className={inputStyle} rows="8" required />
        </label>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-12 py-2 mt-6 text-xl font-bold text-center text-white uppercase rounded-full cursor-pointer font-header bg-primary hover:bg-primary md:text-1xl dark:bg-secondary dark:text-secondary_dark dark:hover:bg-secondary_light"
          aria-label="Send an email"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
