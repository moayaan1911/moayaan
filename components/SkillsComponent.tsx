/** @format */

import React from 'react';
import { SkillsTab } from './SkillsTab';
import details from '@/lib/details.json';
import { GiSkills } from 'react-icons/gi';
export function SkillsComponent() {
  return (
    <>
      <div className='my-14'>
        <div className='flex items-center gap-2 md:text-4xl text-2xl text-center justify-center font-semibold text-black'>
          My Skills <GiSkills />
        </div>
      </div>
      <div className='mx-auto flex flex-wrap md:w-4/5 justify-evenly items-center md:gap-12 gap-4'>
        {details.skills.map((skill, index) => (
          <SkillsTab
            key={index}
            imageSrc={skill.image}
            text={skill.name}
            type={skill.type}
          />
        ))}
      </div>
    </>
  );
}
