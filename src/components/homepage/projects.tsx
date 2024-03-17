import { HomeLayoutWrapper, ProjectShowcase } from '..';
import { BiLogoTypescript } from 'react-icons/bi';
import { SiNextdotjs, SiShopify, SiTailwindcss } from 'react-icons/si';
import { GrGraphQl } from 'react-icons/gr';

export const ProjectsSection = () => {
  return (
    <div>
      <HomeLayoutWrapper tag='section' className=''>
        <section>
          <h1 className='mb-4 mt-10 text-2xl font-medium sm:text-2xl'>My Projects</h1>
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
        </section>
      </HomeLayoutWrapper>
    </div>
  );
};
