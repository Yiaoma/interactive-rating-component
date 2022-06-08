import { ChangeEvent, FC } from 'react';

interface RadioProps {
  name: string;
  value: string | number;
  children: string;
  className?: string;
  checked: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: FC<RadioProps> = ({
  className,
  name,
  value,
  onChange,
  checked,
  children,
}) => (
  <label className={className} data-checked={checked == value}>
    <input type="radio" name={name} value={value} onChange={onChange} />
    <span>{children}</span>
  </label>
);
