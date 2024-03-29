import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HomeLayoutWrapper } from './wrapper';

import NextJs from '/icons/nextjs-icon.svg';
import Tailwind from '/icons/tailwindcss-icon.svg';
import Profile from '/images/profile-image.png';

export const HomeSection = () => {
  return (
    <HomeLayoutWrapper id="home" tag='section'>
      <div className='h-[calc(100vh-16px)] text-foreground'>
        <div className='flex h-max w-full flex-col items-center pt-[200px] sm:flex-row sm:justify-between'>
          <div className='my-auto w-max'>
            <h2 className='text-center text-3xl text-foreground/90 sm:mt-1 sm:text-left md:text-4xl lg:text-5xl'>Full-Stack Developer</h2>
            <h3 className='mt-2 text-center text-lg sm:text-left md:text-xl lg:text-2xl'>Hey, I'm Karl-Thomas Zink from Estonia! </h3>
            <div className='mt-5 flex justify-center space-x-3 sm:justify-normal'>
              <a href="https://github.com/karlthomaas" target='_blank'>
                <FaGithub className='text-4xl text-foreground' />
              </a>
              <a href="https://www.linkedin.com/in/karl-thomas-z-067586216/" target='_blank'>
                <FaLinkedin className='text-4xl text-foreground' />
              </a>
            </div>
          </div>
          <div className='order-first mb-8 sm:order-last my-auto'>
              <div className='h-[290px] w-[290px] border border-border rounded-3xl bg-background'>
                <img src={Profile} className='object-cover h-[290px] w-[290px] rounded-3xl' />
              </div>
          </div>
        </div>
        <div className='mt-10 hidden items-center justify-center space-x-4 text-xl sm:flex sm:justify-normal'>
          <h3>Favorite stack</h3>
          <span className='h-[28px] w-[2px] bg-white' />
          <img src={NextJs} className='aspect-square w-[40px]' />
          {/* <img src={Typescript} className='aspect-square w-[35px]' /> */}
          <img src={Tailwind} className='aspect-square w-[40px]' />
        </div>
      </div>
      <div className='gradient-drop'/>
    </HomeLayoutWrapper>
  );
};
