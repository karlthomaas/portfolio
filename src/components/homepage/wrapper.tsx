import React from 'react';
import clsx from 'clsx';

interface HomeLayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
  tag?: 'div' | 'section' | 'footer' | 'nav';
}

export const HomeLayoutWrapper: React.FC<HomeLayoutWrapperProps> = ({ children, className, tag = 'div' }) => {
  const Tag = tag;
  return <Tag className={clsx('mx-auto h-full w-full max-w-screen-lg p-4', className)}>{children}</Tag>;
};
