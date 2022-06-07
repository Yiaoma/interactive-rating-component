import { FC } from 'react';

interface H1Props {
  children: string;
  className?: string;
}

export const H1: FC<H1Props> = ({ className, children }) => (
  <h1 className={className}>{children}</h1>
);
