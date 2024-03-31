import { HomeLayoutWrapper, ProjectShowcase } from '..';

import NextJs from '/icons/nextjs-icon.svg';
import Typescript from '/icons/typescript-icon.svg';
import Shopify from '/icons/shopify.svg';
import GraphQL from '/icons/graphql.svg';
import Tailwind from '/icons/tailwindcss-icon.svg';
import Python from '/icons/python.svg';
import Discord from '/icons/discord-icon.svg';
import Go from '/icons/go.svg';
import Docker from '/icons/docker-icon.svg';
import Astro from '/icons/astro-icon.svg';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <div className='mb-24' id="projects">
      <HomeLayoutWrapper tag='section' className='mb-10 mt-10'>
        <h1 className='mb-4 mt-10 text-2xl font-medium'>My Projects</h1>
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <ProjectShowcase
            id='pilt_tasku'
            name='Pilt tasku'
            description='Surveillance equipment e-commerce store. For this project I used headless Shopify with NextJS, because that allowed me to
            create more faster and flexible website for the client.'
            stack={[
              <StackIcon alt='NextJS' src={NextJs} className='w-[40px]' />,
              <StackIcon alt='Typescript' src={Typescript} className='w-[33px]' />,
              <StackIcon alt='GraphQL' src={GraphQL} />,
              <StackIcon alt='Shopify' src={Shopify} />,
              <StackIcon alt='Tailwindcss' src={Tailwind} />,
            ]}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            link='https://pilttasku.ee'
          />
          <ProjectShowcase
            id='social_network'
            name='Social Network'
            description='School project where we had to build Social media platform. For frontend we used NextJs and for backend we used Go and everything 
            is containerized with Docker.'
            stack={[
              <StackIcon alt='NextJS' src={NextJs} className='w-[40px]' />,
              <StackIcon alt='Typescript' src={Typescript} className='w-[33px]' />,
              <StackIcon alt='Golang' src={Go} />,
              <StackIcon alt='Docker' src={Docker} />,
              <StackIcon alt='Tailwindcss' src={Tailwind} />,
            ]}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            link='https://kettad.ee/'
          />
          <ProjectShowcase
            id='kettad'
            name='Kettad'
            description='Discgolf discs website. Users can find discs by name or characteristics. Every disc contains detailed information and flying trajectory'
            stack={[<StackIcon alt='Astro' src={Astro} className='w-[30px]' />, <StackIcon alt='Tailwindcss' src={Tailwind} />]}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            link='https://github.com/karlthomaas/Kalev-Discord-Bot'
          />
          <ProjectShowcase
            id='kalevi_bot'
            name='Kalevi bot'
            description='Discord bot for Estonian communities. Has many features like listening to music, search wikipedia, and more.'
            stack={[<StackIcon alt='Python' src={Python} />, <StackIcon alt='Disnake' src={Discord} />]}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            link='https://github.com/karlthomaas/Kalev-Discord-Bot'
          />
        </section>
      </HomeLayoutWrapper>
    </div>
  );
};

const StackIcon = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return <img src={src} alt={alt} className={cn('aspect-square w-[35px] transition-transform duration-200 hover:scale-105', className)} />;
};
