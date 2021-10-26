import logo from '@images/layout/logo.svg';

import Image from 'next/image';
import { Anchor } from '@components/Anchor';
import * as styles from './styles';

/**
 * Nav Items
 *
 * main items are on the left
 */
const mainItems = [
  { text: 'Features', href: '/features' },
  { text: 'Plans', href: '/plans' },
  { text: 'Docs', href: '/docs' },
];

/**
 * action items are on the rights
 */
const actionItems = [
  { text: 'Login', href: '/login' },
  { text: 'Sign Up', href: '/signup' },
];

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header()}>
      <nav className={styles.nav()}>
        {/* Logo */}
        <figure className={styles.logoContainer()}>
          <Anchor href="/">
            <Image
              src={logo}
              layout="fill"
              alt="Website Logo shows two distorted triangles"
            />
          </Anchor>
        </figure>
        {/* Main Nav Items */}
        <ul className={styles.navGroup()}>
          {mainItems.map(({ text, href }) => {
            return (
              <li key={text} className={styles.navItem()}>
                <Anchor href={href}>{text}</Anchor>
              </li>
            );
          })}
        </ul>
        {/* Actions Nav Items */}
        <ul className={styles.navGroup()}>
          {actionItems.map(({ text, href }) => {
            return (
              <li key={text} className={styles.navItem()}>
                <Anchor href={href}>{text}</Anchor>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
