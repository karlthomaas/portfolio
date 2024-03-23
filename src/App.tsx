import { NavigationBar, TracingBeam, HomeSection, AboutSection, ContactMe, ProjectsSection } from './components';

export default function App() {
  return (
    <>
      <NavigationBar />
      <TracingBeam className='w-full h-full'>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />  
        <ContactMe />
      </TracingBeam>
    </>
  );
}
