import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';
import { GatsbyImage } from 'gatsby-plugin-image';

function Project({
  project: { projectImage, name, detail, technical, projectLink, sourceLink },
}) {
  const handleImageStyle =
    'transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1 ';

  return (
    <div className="w-full px-6 mb-12 md:w-1/2 md:px-3 lg:px-6 sm:mb-16 md:mb-24">
      <div className="text-gray-800 dark:text-white">
        <div className="mb-6">
          <a href={sourceLink} title={name}>
            <GatsbyImage
              image={projectImage.asset.gatsbyImageData}
              className={handleImageStyle}
              alt={name}
            />
          </a>
        </div>
        <div>
          <h4 className="mb-2 text-2xl font-bold md:text-2_5xl font-header">
            <a href={projectLink} className="light dark">
              {name}
              <FiExternalLink className="inline mb-1 ml-4" />
            </a>
            {sourceLink && (
              <>
                <span className="inline mb-0 ml-1 mr-1 text-xl text-gray-600 font-body">
                  •
                </span>
                <a href={sourceLink} className="inline light dark">
                  <span className="sr-only">Github: {name}</span>
                  <FaGithubAlt className="inline mb-0 ml-1" />
                </a>
              </>
            )}
          </h4>
          <p className="block mb-6 dark:text-white">
            {detail}
            {` `}
          </p>
          <div className="flex flex-wrap">
            {technical.map((tech, i) => [
              i > 0 && (
                <span className="mx-1" key={`${i}-${tech.id}-${tech.name}`} />
              ),
              <span
                className="px-2 py-1 mb-2 text-gray-700 bg-gray-200 rounded dark:bg-gray-800 dark:text-gray-400"
                key={tech.id}
              >
                {tech.name}{' '}
              </span>,
            ])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
