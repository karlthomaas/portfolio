import { HomeLayoutWrapper, ProjectShowcase } from '..';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiNextdotjs, SiShopify, SiTailwindcss } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';
import NextJs from '/icons/nextjs-icon.svg';
import Typescript from '/icons/typescript-icon.svg';
import Shopify from '/icons/shopify.svg';
import GraphQL from '/icons/graphql.svg';
import Tailwind from '/icons/tailwindcss-icon.svg';

export const ProjectsSection = () => {
  return (
    <div>
      <HomeLayoutWrapper tag='section' id='projects'>
        <h1 className='mb-4 mt-10 text-2xl font-medium sm:text-2xl'>My Projects</h1>
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <ProjectShowcase
            name='Pilt tasku'
            description='Surveillance equipment e-commerce store. '
            stack={[
              <img src={NextJs} className='aspect-square w-[40px]' />,
              <img src={Typescript} className='aspect-square w-[40px]' />,
              <img src={GraphQL} className='aspect-square w-[40px]' />,
              <img src={Shopify} className='aspect-square w-[40px]' />,
              <img src={Tailwind} className='aspect-square w-[40px]' />,
            ]}
          />
          <ProjectShowcase
            name='Pilt tasku'
            description='Surveillance equipment e-commerce store. '
            stack={[
              <SiNextdotjs className='text-4xl text-black' />,
              <BiLogoTypescript className='text-4xl text-blue-600' />,
              <GrGraphQl className='text-4xl text-pink-600' />,
              <SiShopify className='text-4xl text-green-600' />,
              <SiTailwindcss className='text-4xl text-cyan-600' />,
            ]}
          />
          <ProjectShowcase
            name='Pilt tasku'
            description='Surveillance equipment e-commerce store. '
            stack={[
              <SiNextdotjs className='text-4xl text-black' />,
              <BiLogoTypescript className='text-4xl text-blue-600' />,
              <GrGraphQl className='text-4xl text-pink-600' />,
              <SiShopify className='text-4xl text-green-600' />,
              <SiTailwindcss className='text-4xl text-cyan-600' />,
            ]}
          />
          <ProjectShowcase
            name='Kalevi bot'
            description='Open source Discord bot for Estonian community. '
            stack={[
              <SiNextdotjs className='text-4xl text-black' />,
              <BiLogoTypescript className='text-4xl text-blue-600' />,
              <GrGraphQl className='text-4xl text-pink-600' />,
              <SiShopify className='text-4xl text-green-600' />,
              <SiTailwindcss className='text-4xl text-cyan-600' />,
            ]}
          />
        </section>
      </HomeLayoutWrapper>
    </div>
  );
};
