import { FC } from "react";
import { Code, H1, H2, H3, P } from "@components/Text";

export const HomeTemplate: FC = ({ children }) => {
  return <main>{children}</main>;
};
