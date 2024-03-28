import { HomeLayoutWrapper } from "..";
import { Button } from "..";

export const ContactMe = () => {
  return (
    <HomeLayoutWrapper tag='section' id='contact' className='mt-16'>
      {/* <div className='h-max min-h-[400px] w-full border-border bg-white rounded-lg'></div> */}
      <h1 className="text-2xl">Want to collab and make something awesome?</h1>
      <a href="mailto:karl-thomas@zink.ee">
        <Button>Contact me</Button>
      </a>
    </HomeLayoutWrapper>
  );
};
