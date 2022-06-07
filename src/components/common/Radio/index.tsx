import { FC } from 'react';

interface RadioProps {
  name: string;
  value: string | number;
  children: string;
  className?: string;
  onChange?: () => void;
}

export const Radio: FC<RadioProps> = ({
  className,
  name,
  value,
  onChange,
  children,
}) => (
  <label className={className}>
    <input type="radio" name={name} value={value} onChange={onChange} />
    <span>{children}</span>
  </label>
);
