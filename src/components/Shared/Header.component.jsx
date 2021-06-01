import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeaderLayout from './HeaderLayout.component';

export default function Header() {
  return (
    <HeaderLayout>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <nav className="mb-1 sm:mb-0">
          {/* <AnchorLink
            href="#work"
            className="cursor-pointer hover:text-primary dark:hover:text-secondary"
          >
            Work
          </AnchorLink> */}
          <AnchorLink
            href="#about"
            className="mx-6 cursor-pointer md:mx-8 hover:text-primary dark:hover:text-secondary"
          >
            About
          </AnchorLink>
          <AnchorLink
            href="#contact"
            className="cursor-pointer hover:text-primary dark:hover:text-secondary"
          >
            Contact
          </AnchorLink>
        </nav>
        {/* <div>
          <Language />
        </div> */}
      </div>
    </HeaderLayout>
  );
}
