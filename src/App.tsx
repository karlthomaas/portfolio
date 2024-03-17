import { NavigationBar, TracingBeam, HomeSection, AboutSection } from './components';
import { ProjectsSection } from './components/homepage/projects';

export default function App() {
  return (
    <>
      <NavigationBar />
      <TracingBeam className='w-full h-full'>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />  
      </TracingBeam>
    </>
  );
}
