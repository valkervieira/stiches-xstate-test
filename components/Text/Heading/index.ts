import { styled } from "@stitches/react";

type HeadingTags = "h1" | "h2" | "h3";

const headingVariants = {
  size: {
    sm: {
      fontSize: "20px",
    },
    md: {
      fontSize: "28px",
    },
    lg: {
      fontSize: "42px",
    },
  },
};

const createHeading = (tag: HeadingTags) =>
  styled(tag, {
    variants: headingVariants,
  });

const H1 = createHeading("h1");

const H2 = createHeading("h2");

const H3 = createHeading("h3");

export { H1, H2, H3 };
