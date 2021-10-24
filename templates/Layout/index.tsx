import { FC } from 'react';
import { Main } from './Main';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
