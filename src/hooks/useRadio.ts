import { useState, ChangeEvent } from 'react';

export default () => {
  const [radioInput, setRadioInput] = useState('');

  const handleRadioInput = (event: ChangeEvent<HTMLInputElement>) =>
    setRadioInput(event.currentTarget.value);

  return [radioInput, handleRadioInput] as const;
};
