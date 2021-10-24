import { css } from 'stiches.config';
import { P } from '@components/Text';

export const Footer = () => {
  return (
    <footer
      className={css({
        textAlign: 'center',
        background: '$gray500',
        padding: '5px',
      })()}
    >
      <P size="lg">✌️</P>
    </footer>
  );
};
