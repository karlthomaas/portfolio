import { HomeLayoutWrapper } from '.';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <HomeLayoutWrapper tag='footer' className='p-5 text-foreground/40'>
      <p>© {year} Karl-Thomas Zink</p>
    </HomeLayoutWrapper>
  );
}
