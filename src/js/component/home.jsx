import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div>
      <div
        className={`light red ${color === 'red' ? 'selected' : ''}`}
        onClick={() => handleClick('red')}
      ></div>
      <div
        className={`light yellow ${color === 'yellow' ? 'selected' : ''}`}
        onClick={() => handleClick('yellow')}
      ></div>
      <div
        className={`light green ${color === 'green' ? 'selected' : ''}`}
        onClick={() => handleClick('green')}
      ></div>
    </div>
  );
};

ReactDOM.render(<TrafficLight />, document.querySelector('#app'));

export default App;