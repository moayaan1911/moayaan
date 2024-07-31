/** @format */

import { Background } from '@/components/Background';
import { Banner } from '@/components/Banner';
import { Experiences } from '@/components/Experiences';
import { Projects } from '@/components/Projects';
import { SkillsComponent } from '@/components/SkillsComponent';

export default function Home() {
  return (
    <div className='h-screen w-screen bg-gradient-animation overflow-x-hidden'>
      <Banner />
      <SkillsComponent />
      <Projects />
      <Experiences />
      <Background />
    </div>
  );
}
