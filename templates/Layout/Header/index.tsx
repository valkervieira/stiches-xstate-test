import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import * as styles from './styles';
import logo from 'public/images/layout/logo.svg';

const menuItems = [
  { text: 'Features', href: '/features' },
  { text: 'Plans', href: '/plans' },
  { text: 'Docs', href: '/docs' },
];

export const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <header className={styles.header()}>
      <Link href={`${router.basePath}/`} passHref>
        <a>
          <figure className={styles.logo()}>
            <Image
              src={logo}
              width="80"
              height="80"
              alt="Website Logo shows two distorted triangles"
            />
          </figure>
        </a>
      </Link>
      <ul>
        {menuItems.map(({ text, href }) => {
          return (
            <li key={text}>
              <Link href={`${router.basePath}${href}`} passHref>
                <a>{text}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
};
