import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function SecondsCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor((counter % 1000) / 100);
  const two = Math.floor((counter % 100) / 10);
  const one = Math.floor(counter % 10);

  return (
    <div>
      <div className="tittle">
        <p>Seconds Counter</p>
      </div>
      <div className="bigCounter">
        <div className="calendar">
          <i className="far fa-clock"></i>
        </div>
        <div className="four">{four}</div>
        <div className="three">{three}</div>
        <div className="two">{two}</div>
        <div className="one">{one}</div>
      </div>
    </div>

  );
}

SecondsCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

export default SecondsCounter;
