import { styled } from 'stiches.config';

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const headingVariants = {
  size: {
    sm: {
      fontSize: '20px',
    },
    md: {
      fontSize: '28px',
    },
    lg: {
      fontSize: '42px',
    },
  },
};

const createHeading = (tag: HeadingTags) =>
  styled(tag, {
    variants: headingVariants,
  });

const H1 = createHeading('h1');

const H2 = createHeading('h2');

const H3 = createHeading('h3');

const H4 = createHeading('h4');

const H5 = createHeading('h5');

const H6 = createHeading('h6');

export { H1, H2, H3, H4, H5, H6 };
