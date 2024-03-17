import { ReactNode } from "react";
export const ProjectShowcase = ({
  name,
  description,
  link,
  image,
  stack,
}: {
  name: string;
  description: string;
  link: string;
  image: string | null;
  stack: ReactNode[];
}) => {
  return (
    <div className='flex h-[200px] w-full flex-col rounded-lg bg-secondary p-4 text-foreground'>
      <div className='my-auto flex h-[90%] w-full space-x-3'>
        {/* <div className='my-auto aspect-square h-full rounded-lg bg-foreground/60' /> */}
        <div className="flex flex-col space-y-2">
        <h1 className='text-2xl font-medium tracking-wide'>{name}</h1>
        <p>{description}</p>
        <ul className="flex space-x-2">
            {stack.map((item, index) => (
                <li key={index}>{item}{link}{image}</li>
            ))}
        </ul>
        </div>
      </div>
    </div>
  );
};
