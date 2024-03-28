import { TracingBeam, HomeSection, AboutSection, ContactMe, ProjectsSection, FloatingNav } from './components';

export default function App() {
  return (
    <>
      <FloatingNav navItems={
        [
          { name: 'Home', link: '#home' },
          { name: 'About', link: '#about' },
          { name: 'Projects', link: '#projects' },
          { name: 'Contact', link: '#contact' },
        ]
      } />
      <TracingBeam className='w-full h-full'>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />  
        <ContactMe />
      </TracingBeam>
    </>
  );
}
