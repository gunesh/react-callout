import React, { useCallback, useEffect, useState } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const interval =
  (delay = 0) =>
  /** @param {() => void} callback */ (callback) =>
    useEffect(() => {
      const id = setInterval(callback, delay);

      return () => clearInterval(id);
    }, [callback]);

const use1Second = interval(1e3);

const useTimer = ({
  sec: initialSeconds = 0,
  running: initiallyRunning = false,
} = {}) => {
  const [sec, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const tick = useCallback(
    () => (running ? setSeconds((sec) => sec + 1) : undefined),
    [running]
  );
  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => setSeconds(0);
  const stop = () => {
    pause();
    reset();
  };

  use1Second(tick);

  return { pause, reset, running, sec, start, stop };
};

const Callout = (props) => {
  const [width, setWidth] = useState(100);
  const [seconds, setSeconds] = React.useState(props.second);
  const [modal, setModal] = useState(true);
  const { pause, reset, running, sec, start, stop } = useTimer();

  const toggle = () => {
    props.onFinish();
    setModal(!modal);
  };
  React.useEffect(() => {
    // startCount();
    start();
  });
  // const startCount = () => {
  //   if (seconds > 0) {
  //     setTimeout(() => {
  //       setWidth(width - width / seconds);
  //       setSeconds(seconds - 1);
  //     }, 1000);
  //   } else {
  //     props.onFinish();
  //     setModal(!modal);
  //   }
  // };

  return (
    <React.Fragment>
      {props.message && (
        // <Modal isOpen={modal} on toggle={toggle} className="my">
        //   <div
        //     style={{
        //       width: `${width}%`,
        //       backgroundColor: 'green',
        //       height: '3px',
        //     }}
        //   />
        //   <ModalHeader toggle={toggle} />
        //   <div onMouseOver={pause}>
        //     <h1>{sec}</h1>
        //   </div>
        //   <ModalBody>
        //     {props.message}-- {seconds}---- {sec}
        //   </ModalBody>
        //   {/* <ModalFooter>
        //     <Button color="primary" onClick={toggle}>
        //       Ok
        //     </Button>{' '}
        //   </ModalFooter> */}
        // </Modal>

        <div className="callout" onMouseOver={stop}>
          <div className="calloutHeading"></div>
          <span
            className="close"
            // onClick="this.parentElement.style.display='none';"
          >
            ×
          </span>
          <div className="calloutMessage" onMouseOver={pause}>
            <p>
            {props.message}-- {seconds}---- {sec}
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Callout;
