import React, { AnchorHTMLAttributes, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { A } from './styles';

export const Anchor: FC<AnchorHTMLAttributes<unknown>> = ({
  href,
  children,
}): JSX.Element => {
  const router = useRouter();

  return (
    <Link href={`${router.basePath}${href}`} passHref>
      <A>{children}</A>
    </Link>
  );
};
