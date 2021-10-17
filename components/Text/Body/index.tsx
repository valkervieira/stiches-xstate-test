import { styled } from "@stitches/react";

export const P = styled("p", {
  color: "#121212",
  variants: {
    size: {
      sm: {
        fontSize: "14px",
      },
      md: {
        fontSize: "16px",
      },
      lg: {
        fontSize: "18px",
      },
    },
  },
});

export const Code = styled("code", {
  color: "#121212",
  padding: "2px 12px",
  background: "#eee",
  borderRadius: "10px",
  fontSize: "90%",
});
