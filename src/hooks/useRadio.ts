import { useState, FormEvent } from 'react';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

export default () => {
  const [radioInput, setRadioInput] = useState('');

  const handleRadioInput = (event: HTMLElementEvent<HTMLInputElement>) =>
    setRadioInput(event.target.value);

  return [radioInput, handleRadioInput] as const;
};
