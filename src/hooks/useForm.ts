import { FormEvent, useState } from 'react';

export default () => {
  const [submited, setSubmited] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmited(true);
  };

  return [submited, handleSubmit] as const;
};
