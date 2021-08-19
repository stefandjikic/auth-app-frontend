import React, { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('/data').then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <h1>Welcome</h1>
  );
}

export default App;
