import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ProjectShowcase = ({
  name,
  className,
  description,
  link,
  image,
  stack,
}: {
  name: string;
  className: string | undefined;
  description: string;
  link: string;
  image: string | null;
  stack: ReactNode[];
}) => {
  return (
    <div className={cn(`flex h-[200px] w-full flex-col rounded-lg bg-background border-[1px] border-border p-4 text-foreground transition-all ease-in duration-200 md:h-[350px]`, className)}>
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
