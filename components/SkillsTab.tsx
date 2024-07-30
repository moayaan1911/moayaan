/** @format */

'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/moving-border';
import confetti from 'canvas-confetti';
interface SkillsTabProps {
  imageSrc: string;
  text: string;
  type: string;
}

export function SkillsTab({ imageSrc, text, type }: SkillsTabProps) {
  const getBackgroundColor = () => {
    switch (type) {
      case 'web2':
        return 'bg-white dark:bg-slate-900';
      case 'web3':
        return 'bg-green-200 dark:bg-green-800';
      case 'others':
        return 'bg-black dark:bg-slate-900';
      default:
        return 'bg-white dark:bg-slate-900';
    }
  };

  const getTextColor = () => {
    return type === 'others'
      ? 'text-white dark:text-white'
      : 'text-black dark:text-white';
  };

  return (
    <div>
      <Button
        borderRadius='1.75rem'
        className={`${getBackgroundColor()} ${getTextColor()} border-neutral-200 dark:border-slate-800`}
        onClick={() => {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        }}>
        <div className='flex items-center'>
          <Image
            src={imageSrc}
            alt='Skills Tab Image'
            width={32}
            height={32}
            className='mr-2 rounded-md'
          />
          <span>{text}</span>
        </div>
      </Button>
    </div>
  );
}
