import { css } from 'stiches.config';
import { FC } from 'react';

export const Main: FC = ({ children }) => {
  return (
    <main
      className={css({
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      })()}
    >
      {children}
    </main>
  );
};
