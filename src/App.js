
import './App.css';
import {useState} from 'react';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';

function App() {
  const [mode, setmode] = useState('light'); // dark mode is enabled or not

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
    }

    else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtills" aboutText="About us" mode={mode} togglemode={togglemode} />
      <div className='container my-3'>
        <TextForm Heading="Enter Your Text to Analyze" mode={mode} />
      </div>
    </>
  );

}

export default App;
