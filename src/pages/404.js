import React from 'react';
import SEO from '../components/Shared/Seo.component';
import { Link } from 'gatsby';
import { IoIosArrowRoundForward } from 'react-icons/io';

const NotFoundPage = () => (
  <>
    <SEO title="Page 404" />
    <div className="flex flex-col max-w-md px-12 py-20 mx-auto text-gray-900 dark:text-white md:px-32 sm:max-w-xl md:max-w-4xl">
      <div className="max-w-md p-4 mx-auto text-center bg-gray-300 rounded-lg dark:bg-white dark:text-gray-800 sm:p-6">
        <h1 className="text-3xl font-bold md:text-3xl lg:text-4xl">
          Error 404
        </h1>
        <p className="mb-4 text-xl">
          Unfortunately, the page you are looking for does not exist :(
        </p>
        <Link
          to="/"
          className="text-lg hover:text-primary dark:hover:text-primary"
        >
          <IoIosArrowRoundForward className="inline mr-1 text-2xl align-middle" />
          Back to home
        </Link>
      </div>
      {/* <div id="triangle-code" className="inline-block mx-auto mb-4"></div> */}
    </div>
  </>
);

export default NotFoundPage;
