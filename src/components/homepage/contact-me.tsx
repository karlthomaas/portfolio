import { HomeLayoutWrapper } from '..';
import { Button } from '..';

export const ContactMe = () => {
  return (
    <div className='mt-10 bg-gradient-to-r from-[#080f1e] to-[#0c162c] py-14' id='contact'>
      <HomeLayoutWrapper tag='section' className='flex '>
        <div className='mx-auto my-auto flex h-max w-full flex-col justify-center space-y-5  rounded-xl p-5 text-foreground '>
          <h1 className='text-3xl sm:text-3xl'>Ready to collaborate?</h1>
          <p className='text-foreground/75 sm:text-lg'>
            Interested in collaborating or have a question? I'd love to hear from you! Click the button below and send me an email!
          </p>
          <a href='mailto:karl-thomas@zink.ee' className='w-max'>
            <Button aria-label='Contact me' size='lg' className='transition-transform ease-in-out hover:-translate-y-1 sm:text-lg'>
              Click to Connect
            </Button>
          </a>
        </div>
      </HomeLayoutWrapper>
    </div>
  );
};
