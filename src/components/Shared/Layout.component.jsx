// import MessengerChat from './MessengerChat.component';
import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer.component';
// import { injectIntl } from 'gatsby-plugin-intl';

import '../../styles/global.css';
import Header from './Header.component';

function Layout({ children }) {
  return (
    <div className="mx-auto bg-white dark:bg-gray-900">
      <Header siteTitle="Porfolio - Nguyễn Thành Đạt" />
      <main role="main">{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
// export default injectIntl(Layout);
