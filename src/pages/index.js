import React from 'react';
import Contact from '../components/Contact.component';
import Hero from '../components/Hero.component';
import About from '../components/About.component';
import Projects from '../components/Projects.component';
import Header from '../components/Shared/Header.component';
import Seo from '../components/Shared/Seo.component';

// markup
const IndexPage = () => {
  const baseClass =
    'bg-white border-t border-gray-300 dark:border-gray-800 dark:bg-gray-900';
  return (
    <>
      <Seo title="Landing Page" />
      <Header siteTitle="Porfolio - Nguyễn Thành Đạt" />
      <main role="main">
        <div className="bg-white dark:bg-gray-900">
          <Hero />
        </div>
        <div className={baseClass}>
          <Projects />
        </div>
        <div className={baseClass}>
          <About />
        </div>
        <div className={baseClass}>
          <Contact />
        </div>
      </main>
    </>
  );
};

export default IndexPage;
