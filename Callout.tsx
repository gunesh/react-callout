import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const Callout = (props) => {
  const [width, setWidth] = useState(100);
  const [seconds, setSeconds] = React.useState(props.second);
  const [modal, setModal] = useState(true);

  const toggle = () => {
    props.onFinish();
    setModal(!modal);
  };
  React.useEffect(() => {
    startCount();
  });
  const startCount = () => {
    if (seconds > 0) {
      setTimeout(() => {
        setWidth(width - width / seconds);
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      props.onFinish();
      setModal(!modal);
    }
  };
  return (
    <React.Fragment>
      
      {props.message && (
        <Modal isOpen={modal} toggle={toggle}>
          <div
            style={{
              // transitionProperty: 'font-size',
              // transitionDuration: '43s',
              // transitionDelay: '233s',
              width: `${width}%`,
              backgroundColor: 'green',
              height: '3px',
            }}
          />
          {/* <ModalHeader toggle={toggle}>Modal titles</ModalHeader> */}
          <ModalBody>
            {props.message}-- {seconds}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Ok
            </Button>{' '}
          </ModalFooter>
        </Modal>
      )}
    </React.Fragment>
  );
};
export default Callout;
