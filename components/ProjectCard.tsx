/** @format */

'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  demo?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='bg-blue-300 h-[30rem] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] rounded-xl px-6 py-2 border flex flex-col items-center justify-evenly'>
        <CardItem
          translateZ='50'
          className='text-3xl font-bold text-white text-center'>
          {title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='text-black text-sm max-w-sm mt-2 text-center'>
          {description}
        </CardItem>

        <CardItem
          translateZ='100'
          className='w-full mt-4'>
          <Image
            src={image}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        <div className='flex justify-center items-center font-bold'>
          {link && (
            <CardItem
              translateZ={20}
              as={Link}
              href={link}
              target='__blank'
              className='px-4 py-2 rounded-xl text-xs font-normal bg-white text-black flex items-center mr-4'>
              <FaExternalLinkAlt className='mr-2' />
              Visit
            </CardItem>
          )}
          {github && (
            <CardItem
              translateZ={20}
              as={Link}
              href={github}
              target='__blank'
              className='px-4 py-2 rounded-xl text-xs font-normal bg-white text-blue-400 flex items-center mr-4'>
              <FaGithub className='mr-2' />
              GitHub
            </CardItem>
          )}
          {demo && (
            <CardItem
              translateZ={20}
              as={Link}
              href={demo}
              target='__blank'
              className='px-4 py-2 rounded-xl text-xs font-normal bg-white text-red-500 flex items-center'>
              <FaYoutube className='mr-2' />
              Demo
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
