import React, { useEffect, useCallback, useState } from 'react';

const interval =
  (delay = 0) =>
  /** @param {() => void} callback */ (callback) =>
    useEffect(() => {
      const id = setInterval(callback, delay);

      return () => clearInterval(id);
    }, [callback]);

const use1Second = interval(1e3);

const useTimer = ({
  seconds: initialSeconds = 0,
  running: initiallyRunning = false,
} = {}) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const tick = useCallback(
    () => (running ? setSeconds((seconds) => seconds + 1) : undefined),
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

  return { pause, reset, running, seconds, start, stop };
};

const Message = (props) => {
  const { pause, reset, running, seconds, start, stop } = useTimer();
  const { message, second } = props;
  const [width, setWidth] = useState(100);
  React.useEffect(() => {
    start();
  }, []);
  const getTimerInfo = () => {
    if (second === seconds) {
      console.log('Timer Off');
      props.onFinish();
    }
  };
  return (
    <React.Fragment>
      {getTimerInfo()}
      <div className="callout" onMouseOver={pause} onMouseLeave={start}>
      <div
          style={{
            width: `${width-((width/second)*seconds)}%`,
            backgroundColor: 'green',
            height: '3px',
          }}
        />
        <div className="calloutHeading"></div>
        <span
          className="close"
          onClick={() => {
            props.onFinish();
          }}
        >
          ×
        </span>
        <div className="calloutMessage">
          <p>
            {second}-{seconds}- {message}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Message;
