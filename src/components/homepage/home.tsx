import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HomeLayoutWrapper } from './wrapper';

import NextJs from '/icons/nextjs-icon.svg';
import Tailwind from '/icons/tailwindcss-icon.svg';

export const HomeSection = () => {
  return (
    <HomeLayoutWrapper id='home' tag='section'>
      <div className='h-[calc(100vh-16px)] text-foreground'>
        <div className='flex h-max w-full flex-col items-center pt-[200px] sm:flex-row sm:justify-between'>
          <div className='my-auto w-max'>
            <h2 className='text-center text-3xl text-foreground/90 sm:mt-1 sm:text-left md:text-4xl lg:text-5xl'>Full-Stack Developer</h2>
            <h3 className='mt-2 text-center text-lg sm:text-left md:text-xl lg:text-2xl'>Hey, I'm Karl-Thomas Zink from Estonia! </h3>
            <div className='mt-5 flex justify-center space-x-3 sm:justify-normal'>
              <a href='https://github.com/karlthomaas' target='_blank' aria-label="Karl's Github">
                <FaGithub className='text-4xl text-foreground' />
              </a>
              <a href='https://www.linkedin.com/in/karl-thomas-z-067586216/' target='_blank' aria-label="Karl's LinkedIn">
                <FaLinkedin className='text-4xl text-foreground' />
              </a>
            </div>
          </div>
          <div className='order-first my-auto mb-8 sm:order-last'>
            <div className='h-[290px] w-[290px] rounded-3xl border border-border bg-background'>
              <link rel='preload' fetchPriority='high' as='image' href='/images/profile-image.webp' type='image/webp' />
              <img alt='Photo of author' src='/images/profile-image.webp' className='h-[290px] w-[290px] rounded-3xl object-cover' />
            </div>
          </div>
        </div>
        <div className='mt-10 hidden items-center justify-center space-x-4 text-xl sm:flex sm:justify-normal'>
          <h3>Favorite stack</h3>
          <span className='h-[28px] w-[2px] bg-white' />
          <img alt='NextJS' src={NextJs} className='aspect-square w-[40px]' />
          <img alt='Tailwind' src={Tailwind} className='aspect-square w-[40px]' />
        </div>
      </div>
      <div className='gradient-drop' />
    </HomeLayoutWrapper>
  );
};
