import { HomeLayoutWrapper } from '.';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    setLastScrollY(window.scrollY);
    console.log(window.scrollY, lastScrollY);

    if (window.scrollY < 100 || window.scrollY < lastScrollY) {
      setShowNavbar(true)
    } else  {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  if (showNavbar) {
    return (
      <HomeLayoutWrapper
        tag='nav'
        className='border-1 fixed top-5 z-20 flex w-full h- justify-center rounded-2xl border border-primary p-2 h-max -translate-x-1/2 left-1/2'
      >
        <ul className='flex justify-evenly space-x-5 font-medium'>
          <li>Home</li>
          <li>About me</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </HomeLayoutWrapper>
    );
  }
};
