import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BackgroundGradient } from '..';
import { HomeLayoutWrapper } from './wrapper';

import NextJs from '/icons/nextjs-icon.svg';
import Tailwind from '/icons/tailwindcss-icon.svg';

export const HomeSection = () => {
  return (
    <HomeLayoutWrapper id="home" tag='section'>
      <div className='h-[calc(100vh-16px)] text-foreground'>
        <div className='flex h-max w-full flex-col pt-[200px] sm:flex-row sm:justify-between'>
          <div className='my-auto w-max'>
            <h2 className='text-center text-3xl text-foreground/90 sm:mt-1 sm:text-left md:text-4xl lg:text-5xl'>Full-Stack Developer</h2>
            <h3 className='mt-2 text-center text-lg sm:text-left md:text-xl lg:text-2xl'>Hey, I'm Karl-Thomas Zink from Estonia! </h3>
            <div className='mt-5 flex justify-center space-x-3 sm:justify-normal'>
              <FaGithub className='text-4xl text-foreground' />
              <FaLinkedin className='text-4xl text-foreground' />
            </div>
          </div>
          <div className='order-first mb-8 sm:order-last'>
            <BackgroundGradient className='rounded-[22px] p-2 '>
              <div className='h-[270px] w-[270px] rounded-3xl bg-background ' />
            </BackgroundGradient>
          </div>
        </div>
        <div className='mt-10 flex items-center space-x-4 text-xl'>
          <h3>Favorite stack</h3>
          <span className='h-[28px] w-[2px] bg-white' />
          <img src={NextJs} className='aspect-square w-[40px]' />
          {/* <img src={Typescript} className='aspect-square w-[35px]' /> */}
          <img src={Tailwind} className='aspect-square w-[40px]' />
        </div>
      </div>
    </HomeLayoutWrapper>
  );
};
