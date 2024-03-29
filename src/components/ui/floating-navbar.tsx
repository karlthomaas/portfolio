import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Button } from '..';

interface navItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

export const FloatingNav = ({ navItems, className }: { navItems: navItem[]; className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;

      console.log(current);
      if (current < 0.08) {
        setVisible(true);
      } else if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode='wait'>
      <motion.nav
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'fixed inset-x-4 top-6 z-[5000] mx-auto flex w-auto  max-w-screen-lg items-center justify-evenly rounded-xl border border-border px-8 py-2 backdrop-blur-md  dark:border-white/[0.9] sm:py-4',
          className
        )}
      >
        {navItems.map((navItem: navItem, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              'relative flex items-center space-x-1 text-xl text-foreground hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300'
            )}
          >
            <Button aria-label={navItem.name} variant='ghost' size='icon' className='flex items-center justify-center sm:hidden '>
              {navItem.icon}
            </Button>
            <span className='hidden sm:block  sm:text-lg'>{navItem.name}</span>
          </a>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};
