import { FC } from 'react';

interface PProps {
  children: string;
  className?: string;
}

export const P: FC<PProps> = ({ className, children }) => (
  <p className={className}>{children}</p>
);
