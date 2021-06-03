import React from 'react';
import PropTypes from 'prop-types';
// import { injectIntl } from 'gatsby-plugin-intl';

const HeaderLayout = ({ children }) => {
  return (
    <header
      className="fixed z-10 w-full text-center bg-white shadow dark:bg-gray-900"
      role="banner"
    >
      <div className="flex flex-wrap justify-center max-w-md px-4 py-4 mx-auto text-lg font-bold text-gray-500 uppercase md:px-8 lg:py-5 sm:max-w-xl md:max-w-6xl md:text-xl font-header dark:text-white md:justify-end">
        {children}
      </div>
    </header>
  );
};

HeaderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderLayout;
