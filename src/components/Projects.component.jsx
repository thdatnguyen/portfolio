import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Project from './Project.component';

export default function Projects() {
  const {
    projects: { nodes: projects },
  } = useStaticQuery(graphql`
    query {
      projects: allSanityProject {
        nodes {
          id
          name
          projectImage {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          projectLink
          sourceLink
          technical {
            id
            name
          }
        }
      }
    }
  `);
  return (
    <section
      id="projects"
      className="px-3 pt-12 pb-0 mx-auto sm:px-6 sm:pt-16 md:max-w-4xl md:pt-20 lg:pt-32 lg:max-w-6xl"
    >
      <div className="flex flex-wrap -mx-3 md:px-3 xl:px-0 md:-mx-0 lg:-mx-3 md:mb-10">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
