import React, { useState } from 'react';
import Callout from './Callout';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
const Hello = ({ name }) => {
  const [error, setError] = useState('There is a issue with result');

  const onFinish = () => {
    console.log('Clear Message');
    setError('');
  };

  const createEror = () => {
    console.log('N Message');
    setError('New ');
  };
  return (
    <>
      <h1>Hello {name}!</h1>
      {error && <Callout onFinish={onFinish} second={10} message={error} />}
      <Button color="danger" onClick={createEror}>
        Ok
      </Button>
    </>
  );
};
export default Hello;
