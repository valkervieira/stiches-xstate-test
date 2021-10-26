import { css } from 'stiches.config';

export const header = css({
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  width: 'calc(100vw - 40px)',
  position: 'fixed',
  margin: '10px 20px',
  zIndex: '50',
  background: 'hsla(0, 0%, 99%, 0.25)',
  boxShadow: '0 5px 32px 0 rgba( 20, 28, 80, 0.1 )',
  backdropFilter: 'blur(4px)',
  border: '1px solid hsla(0, 0%, 99%, 0.18)',
  borderRadius: '10px',
});

export const logoContainer = css({
  position: 'relative',
  width: '80px',
  height: '80px',
});

export const nav = css({
  display: 'grid',
  gridTemplateColumns: '80px auto max-content',
  columnGap: '40px',
  width: '100%',
});

export const navGroup = css({
  display: 'flex',
  alignItems: 'center',
  '&:last-item': {
    justifySelf: 'end',
  },
});

export const navItem = css({
  opacity: '0.8',
  '&:hover': {
    opacity: '1',
  },
  '&:not(last-child)': {
    marginRight: '20px',
  },
});
