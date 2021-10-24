import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from 'public/images/layout/logo.svg';
import { css } from 'stiches.config';

const menuItems = [
  { text: 'Features', href: '/features' },
  { text: 'Plans', href: '/plans' },
  { text: 'Docs', href: '/login' },
];

export const Layout: FC = ({ children }) => {
  const router = useRouter();

  const generateColumns = (number) => {
    return `repeat(${number}, max-content)`;
  };

  return (
    <>
      <header
        className={css({
          display: 'flex',
          alignItems: 'center',
          height: 'fit-content',
        })()}
      >
        <figure
          className={css({
            marginRight: '40px',
          })()}
        >
          <Image
            src={logo}
            width="80"
            height="80"
            alt="Website Logo shows two distorted triangles"
          />
        </figure>
        <ul
          className={css({
            display: 'grid',
            gridTemplateRows: '80px',
            gridTemplateColumns: generateColumns(3),
            columnGap: '40px',
            placeItems: 'center',
          })()}
        >
          {menuItems.map(({ text, href }) => {
            return (
              <li
                key={text}
                className={css({
                  height: 'min-content',
                })()}
              >
                <Link href={`${router.basePath}${href}`} passHref>
                  <a
                    className={css({
                      padding: '8px 25px',
                      display: 'inline-block',
                      textDecoration: 'none',
                      fontFamily: 'sans-serif',
                      background: 'transparent',
                      color: '$black600',
                      '&:hover': {
                        background: '$gray500',
                        color: '$white',
                      },
                      '&:active': {
                        background: '$gray400',
                      },
                      '&:focus': {
                        outline: '1px solid $gray500',
                      },
                    })()}
                  >
                    {text}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
      {children}
      <footer></footer>
    </>
  );
};
