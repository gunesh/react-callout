import React, { useState } from 'react';
import Callout from './Callout';
import Message from './Message';
import Call from './Call';
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
      {error && <Message onFinish={onFinish} second={5} message={error} />}
      <Button color="danger" onClick={createEror}>
        Ok
      </Button>
    </>
  );
};
export default Hello;
