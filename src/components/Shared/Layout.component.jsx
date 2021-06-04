// import MessengerChat from './MessengerChat.component';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer.component';

import '../../styles/global.css';
function Layout({ children }) {
  return (
    <div className="mx-auto bg-white dark:bg-gray-900">
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
