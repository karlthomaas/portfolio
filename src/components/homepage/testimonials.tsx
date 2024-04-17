import { CardStack, HomeLayoutWrapper } from '..';

export type Testimonial = {
  id: number;
  link: string;
  name: string;
  designation: string;
  content: React.ReactNode;
};

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className='bg-opacity-6 rounded-[2px] bg-[#27477b] px-1'>{children}</span>
);

const CARDS = [
  {
    id: 1,
    link: 'https://www.linkedin.com/in/karl-thomas-z-067586216/',
    name: 'Alan Kesselmann',
    designation: 'Software Engineer',
    content: (
      <p className='line-clamp-8 max-h-[200px] text-pretty text-white'>
        After <Highlight>interviewing ~100</Highlight>, hiring many developers and working with many more developers, I can safely say that{' '}
        <Highlight>Karl-Thomas is a great developer</Highlight>. He is one of those guys who always manages to deliver his best work. In the
        cases where he lacks experience, he is always
        <Highlight> eager to investigate and learn more.</Highlight> Where there are places that need improvement he would be the one to
        suggest said improvements. Given the chance, I would gladly work with him again.
      </p>
    ),
  },
  {
    id: 3,
    name: 'John Doe',
    link: 'https://www.upwork.com/freelancers/~01c12d0740ca19195f',
    designation: 'From Upwork',
    content: (
      <p className='sm:text-lg'>
        Karl-Thomas is <Highlight>Problem Solver and Excellent Programmer</Highlight>! He will be the developer if you are looking for
        Python scripting or any bot-related scripts! He was with me on call throughout fixing, deploying, and testing the code!
      </p>
    ),
  },
  {
    id: 4,
    name: 'Casino Royal ',
    link: 'https://www.upwork.com/freelancers/~01c12d0740ca19195f',
    designation: 'From Upwork',
    content: (
      <p className='sm:text-xl'>
        I love the <Highlight>communication, skills, helpfulness, and quality</Highlight>. This guy is the real deal the quality of work
        that he puts in is 100% worth it!
      </p>
    ),
  },
];

export const Testimonials = () => {
  return (
      <HomeLayoutWrapper className='flex h-[525px] w-full p-1 sm:p-4 mb-24'>
        <div className='mx-auto my-auto w-full sm:w-[65%]'>
          <h1 className='mb-3 text-center text-3xl bg-clip-text'>Satisfied Clients</h1>
          <h3 className='center mb-16 text-center text-sm tracking-wide text-neutral-200'>Building connections, on project at a time.</h3>
          <CardStack items={CARDS} />
        </div>
      </HomeLayoutWrapper>
  );
};
