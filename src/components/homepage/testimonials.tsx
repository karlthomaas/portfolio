import { CardStack, HomeLayoutWrapper } from '..';

const CARDS = [
  {
    id: 1,
    name: 'Alan Kesselmann',
    designation: 'Software Engineer',
    content: (
      <p>
        After interviewing ~100, hiring many developers and working with many more developers, I can safely say that Karl-Thomas is a great
        developer. He is one of those guys who always manages to deliver his best work. In the cases where he lacks experience, he is always
        eager to investigate and learn more. Where there are places that need improvement he would be the one to suggest said improvements.
        Given the chance, I would gladly work with him again.
      </p>
    ),
  },
  {
    id: 2,
    name: 'Bovel Grupp OÜ',
    designation: 'Surveilliance Systems',
    content: (
      <p>
        Karl-Thomas is a very professional and skilled developer. He has a great understanding of the project requirements and is able to
        deliver the work on time. He is very responsive and communicates well. I would highly recommend him for any project.
      </p>
    ),
  },
  {
    id: 3,
    name: 'John Doe',
    link: 'https://www.upwork.com/freelancers/~01c12d0740ca19195f',
    designation: 'Software Engineer',
    content: (
      <p>
        So cool... Problem Solver, Excellent Programmer! He will be your right right programmer if you are looking for Python Scripting or
        any Bot related script! He was with me on call throughout fixing, deploying and testing the code!
      </p>
    ),
  },
  {
    id: 4,
    name: 'Casino Royal ',
    link: 'https://www.upwork.com/freelancers/~01c12d0740ca19195f',
    designation: 'Software Engineer',
    content: (
      <p>
        i love the - communication - skills - helpfulness - quality thi guy is the real deal and the quality of work that he puts our is
        100% worth it…
      </p>
    ),
  },
];
export const Testimonials = () => {
  return (
    <HomeLayoutWrapper className='w-full h-full flex justify-center'>
      <CardStack items={CARDS} />
    </HomeLayoutWrapper>
  );
};
