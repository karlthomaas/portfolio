import { HomeLayoutWrapper } from '..';
export const AboutSection = () => {
  return (
    <div id="about" className='mb-10 h-full w-full bg-[#080f1e]  py-24'>
      <HomeLayoutWrapper tag='section' className='flex md:space-x-10'>
        <img
          alt='About us section photo'
          src='/images/programming.webp'
          className='my-auto hidden h-[310px] w-[310px] flex-none rounded-3xl bg-slate-500 object-cover md:block'
        ></img>

        <div className='my-auto -mt-10'>
          <h1 className='mb-4 text-3xl font-semibold sm:text-2xl'>About me</h1>
          <p className='text-pretty text-justify leading-relaxed tracking-wide'>
            Hey, I'm Karl-Thomas, a <span className='text-primary'>passionate programmer</span> who got into coding back in high school.
            <br />
            <br />
            My journey started with taking Python courses in High school. As I delved deeper into Python, I discovered its potential
            and started creating Discord bots and web automation for fun. My passion for programming opened the doors for{' '}
            <span className='text-primary'>freelancing opportunities</span>.
            <br />
            <br />
            I'm primarily self-taught, but my thirst for knowledge, collaboration and feedback led me to pursue formal studies at{' '}
            <span className='text-primary'>Kood/Jõhvi</span> in 2023.
            <br />
            <br />
            Today, I'm proud to be a part-time full-stack developer!
          </p>
        </div>
      </HomeLayoutWrapper>
    </div>
  );
};
