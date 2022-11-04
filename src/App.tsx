import React, { useState } from 'react';
import Button from '@mui/material/Button';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material';


function App() {
  // const [data, setData] = useState<string> ('rhodri');

  // const testFunction  = async () => {
  //   await fetch('http://localhost:3001/test')
  //     .then((res) => res.json())
  //     .then((res) => { 
  //       setData(res.someValue);
  //     });
  // };
  // testFunction();

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <div className="App">
      <header className="App-header">
        <ThemeProvider theme={darkTheme}>
          <Home />
          {/* <p>{data}</p> */}
        
          {/* <Button variant="contained" onClick={() => testFunction()}> Add </Button> */}
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
