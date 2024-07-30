/** @format */

import { Banner } from '@/components/Banner';
import { ProjectCard } from '@/components/ProjectCard';
import { Projects } from '@/components/Projects';
import { SkillsComponent } from '@/components/SkillsComponent';
import { SkillsTab } from '@/components/SkillsTab';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='h-screen w-screen bg-gradient-animation overflow-x-hidden'>
      <Banner />
      <SkillsComponent />
      <Projects />
    </div>
  );
}
