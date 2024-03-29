import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDownIcon } from 'lucide-react';
import { Button } from '..';
import { ExternalLink } from 'lucide-react';

export const ProjectShowcase = ({
  id,
  name,
  className,
  description,
  link,
  stack,
  activeProject,
  setActiveProject,
}: {
  id: string;
  name: string;
  className?: string;
  description?: string;
  link?: string;
  stack?: ReactNode[];
  activeProject?: string | null;
  setActiveProject: (id: string | null) => void;
}) => {
  return (
    <div
      className={cn(
        `flex h-[140px] w-full rounded-lg border-[1px] border-border bg-background p-4 
        text-foreground transition-all duration-200 ease-in-out md:h-[300px]`,
        className,
        {
          'h-[300px]': activeProject === id,
        }
      )}
    >
      <div className='my-auto flex h-[90%] w-full space-x-3'>
        <div className='flex w-full flex-col justify-between'>
          <div className='flex w-full items-center md:justify-between'>
            <h1 className='pl-2 text-xl font-medium tracking-wide'>{name}</h1>
            {link && (
              <a className='order-first md:order-last' href={link} target='_blank'>
                <Button className='my-auto' variant='ghost' size='sm'>
                  <ExternalLink />
                </Button>
              </a>
            )}
          </div>
          <p
            className={cn('px-1 py-5', {
              'hidden text-pretty md:block': activeProject !== id,
            })}
          >
            {description}
          </p>
          {stack && (
            <ul className='flex w-max space-x-5 rounded-full bg-primary/20 px-2 py-1'>
              {stack.map((item, index) => (
                <li className='my-auto' key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='my-auto md:hidden'>
        <Button
          size='icon'
          variant='ghost'
          onClick={() => {
            if (activeProject === id) {
              setActiveProject(null);
            } else {
              setActiveProject(id);
            }
          }}
        >
          <ArrowDownIcon
            className={cn('h-6 w-6 transition-transform duration-300', {
              'rotate-180 transform': activeProject === id,
            })}
          />
        </Button>
      </div>
    </div>
  );
};
