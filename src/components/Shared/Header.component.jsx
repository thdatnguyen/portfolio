import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import HeaderLayout from './HeaderLayout.component';
import tw from 'tailwind-styled-components';

const HeaderWrapper = tw.div`
  flex
  flex-col
  items-center
  justify-center
  sm:flex-row
`;

export default function Header() {
  return (
    <HeaderLayout>
      <HeaderWrapper>
        <nav className="mb-1 sm:mb-0">
          <AnchorLink
            href="#projects"
            className="cursor-pointer hover:text-primary dark:hover:text-secondary"
          >
            Projects
          </AnchorLink>
          <AnchorLink
            href="#about"
            className="mx-6 cursor-pointer md:mx-8 hover:text-primary dark:hover:text-secondary "
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
      </HeaderWrapper>
    </HeaderLayout>
  );
}
