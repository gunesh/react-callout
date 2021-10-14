import React, { useState } from 'react';
import Callout from './Callout';

const Hello = ({ name }) => {
  const [error, setError] = useState('There is a issue with result');

  const onFinish = () => {
    console.log('Clear Message');
    setError('');
  };
  return (
    <>
      <h1>Hello {name}!</h1>
      <Callout onFinish={onFinish} second={10} message={error} />
    </>
  );
};
export default Hello;
