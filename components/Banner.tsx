/** @format */
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import details from '../lib/details.json';
import {
  FaEthereum,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaCoffee,
  FaTelegram,
  FaEnvelope,
  FaDonate,
} from 'react-icons/fa';
import Link from 'next/link';
import { FaHashnode } from 'react-icons/fa6';

const borderColors = [
  'border-yellow-400',
  'border-blue-400',
  'border-green-400',
  'border-pink-400',
  'border-purple-400',
  'border-red-400',
  'border-indigo-400',
  'border-orange-400',
  'border-teal-400',
  'border-cyan-400',
  'border-lime-400',
  'border-fuchsia-400',
];

const iconComponents: { [key: string]: React.ElementType } = {
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
  GitHub: FaGithub,
  Hashnode: FaHashnode,
  BuyMeACoffee: FaCoffee,
  Telegram: FaTelegram,
  Email: FaEnvelope,
  Donate: FaDonate,
};

export function Banner() {
  const [borderColorIndex, setBorderColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBorderColorIndex((prevIndex) => (prevIndex + 1) % borderColors.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='flex items-center justify-between w-4/5 mx-auto my-20 md:flex-row flex-col md:gap-0 gap-10'>
      <div className='flex flex-col items-center md:w-4/6 w-11/12 justify-center text-center gap-4'>
        <h1 className='text-6xl font-bold mb-4'>{details.salam}</h1>
        <h2 className='text-2xl font-semibold mb-4 bg-orange-200 rounded px-2 flex items-center animate-bounce'>
          <FaEthereum />
          {details.tagline}
          <FaEthereum />
        </h2>
        <p className='font-bold italic text-slate-700'>{details.description}</p>
        <div className='flex flex-wrap justify-center gap-6 mt-4'>
          {details.socials.map((social, index) => {
            const IconComponent = iconComponents[social.name];
            return (
              <Link
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-3xl text-white font-bold hover:text-slate-600 transition-colors duration-300'>
                <IconComponent />
              </Link>
            );
          })}
        </div>
      </div>
      <Image
        src={details.profile}
        alt='Profile'
        width={300}
        height={300}
        className={`rounded-full border-4 ${borderColors[borderColorIndex]}`}
        priority={true}
      />
    </div>
  );
}
