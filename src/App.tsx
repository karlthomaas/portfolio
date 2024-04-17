import { HomeSection, AboutSection, ContactMe, ProjectsSection, FloatingNav, Footer, Testimonials } from './components';
import { Home, User, BriefcaseIcon, Phone } from 'lucide-react';

export default function App() {
  return (
    <>
      <FloatingNav
        navItems={[
          { name: 'Home', link: '#home', icon: <Home size={24} /> },
          { name: 'About', link: '#about', icon: <User size={24} /> },
          { name: 'Projects', link: '#projects', icon: <BriefcaseIcon size={24} /> },
          { name: 'Contact', link: '#contact', icon: <Phone size={24} /> },
        ]}
      />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}
