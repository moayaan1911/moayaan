/** @format */

'use client';
import React from 'react';
import { ExperienceContainer } from './ExperienceContainer';
import details from '@/lib/details.json';
import { ImOffice } from 'react-icons/im';

export function Experiences() {
  return (
    <div className='my-40'>
      <div className='flex items-center gap-2 md:text-4xl text-2xl text-center justify-center font-semibold text-white'>
        My Past Experiences <ImOffice />
      </div>
      <ExperienceContainer experiences={details.experiences} />
    </div>
  );
}
