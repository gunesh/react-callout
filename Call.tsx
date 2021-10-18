import React, { useCallback, useEffect, useState } from 'react';


const Call = (props) => {
  const [width, setWidth] = useState(100);
  const [seconds, setSeconds] = React.useState(props.second);
  
  const startCount = () => {
    console.log('Call');
    if (seconds > 0) {
      setTimeout(() => {
        setWidth(width - width / seconds);
        setSeconds(seconds - 1);
      }, 1000);
    } else {
      props.onFinish();
      
    }
  };

  return (
    <React.Fragment>
      {props.message && (
       
        <div className="callout" >
          <div className="calloutHeading"></div>
          <span
            className="close"
            // onClick="this.parentElement.style.display='none';"
          >
            ×
          </span>
          <div className="calloutMessage" >
            <p>
            {props.message}-- {seconds}----
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
export default Call;
