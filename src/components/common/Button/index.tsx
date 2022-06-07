import { FC } from 'react';

interface ButtonProps {
  children: string;
  type: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  type,
  disabled,
  children,
}) => (
  <button className={className} type={type} disabled={disabled}>
    {children}
  </button>
);
