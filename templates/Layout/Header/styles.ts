import { css } from 'stiches.config';

const generateColumns = (number) => {
  return `repeat(${number}, max-content)`;
};

export const header = css({
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  position: 'fixed',
  width: '100vw',
});

export const logo = css({
  marginRight: '40px',
});

export const fooo = css({
  display: 'grid',
  gridTemplateRows: '80px',
  gridTemplateColumns: generateColumns(3),
  columnGap: '40px',
  placeItems: 'center',
});
