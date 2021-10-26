import { css } from 'stiches.config';
import { FC } from 'react';

export const Main: FC = ({ children }) => {
  return (
    <main
      className={css({
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })()}
    >
      {children}
    </main>
  );
};
