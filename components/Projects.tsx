/** @format */

'use client';

import React from 'react';
import { ProjectCard } from './ProjectCard';
import details from '@/lib/details.json';
import { GrProjects } from 'react-icons/gr';

export function Projects() {
  return (
    <div className='mt-28'>
      <div className='flex items-center gap-2 md:text-4xl text-2xl text-center justify-center font-semibold text-white'>
        My Projects <GrProjects />
      </div>
      <div className='mx-auto flex flex-wrap md:flex-row flex-col justify-evenly items-center'>
        {details.projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
}
