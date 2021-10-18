import React,{ useEffect, useCallback, useState } from 'react';

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

const Message = () => {
  const { pause, reset, running, seconds, start, stop } = useTimer();

  return (
    <div  onMouseOver={pause} onLoad={start} onMouseLeave={start}>
      <h1>{seconds}</h1>
    </div>
  );
};
export default Message;