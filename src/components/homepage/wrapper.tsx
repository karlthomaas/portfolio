import React from 'react';
import clsx from 'clsx';

interface HomeLayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tag?: 'div' | 'section' | 'footer' | 'nav';
}
export const HomeLayoutWrapper: React.FC<HomeLayoutWrapperProps> = ({ children, className, id = '', tag = 'div' }) => {
  const Tag = tag;
  return (
    <Tag id={id} className={clsx('mx-auto h-full w-full max-w-screen-lg p-4', className)}>
      {children}
    </Tag>
  );
};
