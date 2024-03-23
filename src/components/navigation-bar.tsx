import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      setLastScrollY(window.scrollY);
      if (window.scrollY < 100 || window.scrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.nav key='navbar' initial={{ y: -100 }} exit={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <div className='border-1 fixed left-1/2 top-5 z-20 flex h-[50px] w-full max-w-screen-lg -translate-x-1/2 items-center justify-center rounded-2xl border border-primary p-2 backdrop-blur-md'>
        <ul className='flex justify-evenly space-x-10 font-medium'>
          <NavbarElement name='Home' />
          <NavbarElement name='About me' />
          <NavbarElement name='Experience' />
          <NavbarElement name='Projects' />
          <NavbarElement name='Contact' />
        </ul>
      </div>
    </motion.nav>
  );
};

const NavbarElement = ({ name }: { name: string }) => {
  return <li className='hidden sm:block'>{name}</li>;
}