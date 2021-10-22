import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Layout: FC = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <ul>
          <li>
            <Link href={`${router.basePath}/`} passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={`${router.basePath}/login`} passHref>
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href={`${router.basePath}/welcome`} passHref>
              <a>Welcome</a>
            </Link>
          </li>
        </ul>
      </header>
      {children}
      <footer></footer>
    </>
  );
};
