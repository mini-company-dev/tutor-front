import { useState } from 'react';

export default function useLoginForm() {
  const [error, setError] = useState('');

  const [loading, setLoading] = useState(false);

  const callApi = () => {};

  const onSubmit = (e: any) => {
    // 아이디가 15자 이상이다
    setError('Test');
    callApi()
    return;
  };
  return { error, onSubmit};
}
