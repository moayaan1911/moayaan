/** @format */

import { Banner } from '@/components/Banner';
import { ProjectCard } from '@/components/ProjectCard';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen w-screen bg-gradient-animation overflow-x-hidden'>
      <Banner />
    </div>
  );
}
