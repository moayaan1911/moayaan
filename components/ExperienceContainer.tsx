/** @format */

'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ExperienceProps {
  experiences: {
    company: string;
    designation: string;
    timeline: string;
    jobType: string;
    link?: string;
    image?: string;
  }[];
}

export function ExperienceContainer({ experiences }: ExperienceProps) {
  const getJobTypeColor = (jobType: string) => {
    switch (jobType) {
      case 'internship':
        return 'text-red-500';
      case 'freelancing':
        return 'text-green-500';
      case 'full-time':
        return 'text-blue-500';
      default:
        return '';
    }
  };

  return (
    <div className='flex justify-center mt-10'>
      <div className='w-2 bg-gray-300 dark:bg-gray-700 relative hidden sm:block'>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`flex items-center justify-between ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
            <div
              className={`bg-blue-500 dark:bg-blue-700 w-8 h-8 rounded-full absolute ${
                index % 2 === 0 ? 'left-1' : 'right-1'
              } transform ${
                index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'
              } hidden sm:block`}></div>
            <Link
              href={experience.link || ''}
              target='_blank'
              rel='noreferrer'
              className={`${
                index % 2 === 0 ? 'ml-8 sm:ml-12' : 'mr-8 sm:mr-12'
              } bg-white dark:bg-gray-800 rounded shadow md:min-w-96 p-5 flex flex-col items-center justify-center gap-2 ${
                experience.link ? 'cursor-pointer' : 'cursor-default'
              }`}>
              <div className='flex items-center justify-center'>
                {experience.image && (
                  <Image
                    src={experience.image}
                    alt={experience.company}
                    width={32}
                    height={32}
                    className='mr-2'
                  />
                )}
                <h3 className='text-lg font-semibold text-center'>
                  {experience.company}
                </h3>
              </div>
              <p className='text-lg text-yellow-800 font-semibold text-center'>
                {experience.designation}
              </p>
              <p className='text-xs text-black font-medium text-center'>
                {experience.timeline}
              </p>
              <p
                className={`text-xs italic font-semibold text-center ${getJobTypeColor(
                  experience.jobType
                )}`}>
                {experience.jobType}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className='sm:hidden'>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className='my-4'>
            <Link
              href={experience.link || ''}
              target='_blank'
              rel='noreferrer'
              className={`bg-white dark:bg-gray-800 rounded shadow w-11/12 mx-auto p-5 flex flex-col items-center justify-center gap-2 ${
                experience.link ? 'cursor-pointer' : 'cursor-default'
              }`}>
              <div className='flex items-center justify-center'>
                {experience.image && (
                  <Image
                    src={experience.image}
                    alt={experience.company}
                    width={32}
                    height={32}
                    className='mr-2'
                  />
                )}
                <h3 className='text-lg font-semibold text-center'>
                  {experience.company}
                </h3>
              </div>
              <p className='text-lg text-yellow-800 font-semibold text-center'>
                {experience.designation}
              </p>
              <p className='text-xs text-black font-medium text-center'>
                {experience.timeline}
              </p>
              <p
                className={`text-xs italic font-semibold text-center ${getJobTypeColor(
                  experience.jobType
                )}`}>
                {experience.jobType}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
