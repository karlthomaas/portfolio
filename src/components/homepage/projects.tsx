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
    <div className='mb-24'>
      <HomeLayoutWrapper tag='section' id='projects' className='mb-10 mt-10'>
        <h1 className='mb-4 mt-10 text-2xl font-medium'>My Projects</h1>
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <ProjectShowcase
            id='pilt_tasku'
            name='Pilt tasku'
            description='Surveillance equipment e-commerce store. For this project I used headless Shopify with NextJS, because that allowed me to
            create more faster and flexible website for the client.'
            stack={[
              <StackIcon src={NextJs} className='w-[40px]' />,
              <StackIcon src={Typescript} className='w-[33px]' />,
              <StackIcon src={GraphQL} />,
              <StackIcon src={Shopify} />,
              <StackIcon src={Tailwind} />,
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
              <StackIcon src={NextJs} className='w-[40px]' />,
              <StackIcon src={Typescript} className='w-[33px]' />,
              <StackIcon src={Go} />,
              <StackIcon src={Docker} />,
              <StackIcon src={Tailwind} />,
            ]}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            link='https://kettad.ee/'
          />
          <ProjectShowcase
            id='kettad'
            name='Kettad'
            description='Discgolf discs website. Users can find discs by name or characteristics. Every disc contains detailed information and flying trajectory'
            stack={[<StackIcon src={Astro} className='w-[30px]'/>, <StackIcon src={Tailwind} />]}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            link='https://github.com/karlthomaas/Kalev-Discord-Bot'
          />
          <ProjectShowcase
            id='kalevi_bot'
            name='Kalevi bot'
            description='Discord bot for Estonian communities. Has many features like listening to music, search wikipedia, and more.'
            stack={[<StackIcon src={Python} />, <StackIcon src={Discord} />]}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            link='https://github.com/karlthomaas/Kalev-Discord-Bot'
          />
        </section>
      </HomeLayoutWrapper>
    </div>
  );
};

const StackIcon = ({ src, className }: { src: string; className?: string }) => {
  return <img src={src} className={cn('aspect-square w-[35px] transition-transform duration-200 hover:scale-105', className)} />;
};
