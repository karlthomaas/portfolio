import { HomeLayoutWrapper } from '..';

export const AboutSection = () => {
  return (
    <div className='h-full w-full bg-[#060D1F] py-20'>
      <HomeLayoutWrapper tag='section' className='flex space-x-10'>
        <div className='my-auto hidden h-[250px] w-[250px] flex-none rounded-3xl bg-slate-500 sm:block'></div>

        <div className='my-auto'>
          <h1 className='mb-4 text-3xl font-semibold sm:text-2xl'>About me</h1>
          <p className='leading-relaxed tracking-wide'>
            I've been really passionate about programming since beginning of High school.
            <br />
            <br />
            My Journey started with creating Discord bots for fun. Then I put my skills in use and started freelancing bots and automations
            for small bussinesses and communities.
            <br />
            <br />
            Currently I am freelancing full-stack web development and studying in Kood/Jõhvi!
          </p>
        </div>
      </HomeLayoutWrapper>
    </div>
  );
};
