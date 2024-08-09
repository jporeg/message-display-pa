import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Hello World');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setMessage(message);
  };

  return (
    <div>
      <label>
        Message to Display:
        <input type="text" onChange={handleChange} />
      </label>
      <button onClick={handleClick}>Display Message</button>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
