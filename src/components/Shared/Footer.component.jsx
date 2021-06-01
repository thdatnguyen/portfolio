import React from 'react';
// import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
import { TiHeart } from 'react-icons/ti';
import Social from '../Global/Social.component';
import Button from '../Global/Button.component';

function Footer() {
  return (
    <footer
      role="contentinfo"
      className="px-4 py-20 text-center bg-white border-t border-gray-400 dark:border-gray-800 dark:bg-gray-900"
    >
      <h3 className="font-bold text-gray-800 uppercase text-1xl dark:text-white">
        LET'S CONNECT!
      </h3>
      <div className="flex justify-center py-5 mb-4">
        <Social value="light dark cursor-pointer" />
      </div>
      <p className="text-lg text-gray-800 dark:text-gray-200">
        Build with <TiHeart className="inline align-baseline" /> Antonin Nhek ©{' '}
        {new Date().getFullYear()} <br />
        {/* <FormattedMessage id="footer.powered" /> */}
        {` `}
        <a className="light dark" href="https://reactjs.org/">
          React
        </a>
        ,{` `}
        <a className="light dark" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
        {` `}&{` `}
        <a className="light dark" href="https://tailwindcss.com">
          Tailwind CSS
        </a>
        {` `}
        <br />
        Hosted by{' '}
        <a className="light dark" href="https://www.netlify.com">
          Netlify
        </a>
      </p>
      <div className="flex justify-center mt-8">
        <Button link="#top" style={`text-lg`} text="Back to top" />
      </div>
    </footer>
  );
}
export default Footer;