//import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/textform';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>
  {
    setAlert 
    ({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1750);
  }

  const toggleMode = () =>
  {
    if (mode === 'light')
    {
      setMode('darkGrey');
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Activated", "success");

    //   setTimeout(() => {
    //     document.title='TextUtils is Free!'
    //   },1500);
    //   setTimeout(() => {
    //     document.title='Install Now!'
    //   },2000);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Activated", "success");
    }
  }
  const toggleMode2 = () =>
  {
    if (mode === 'light')
    {
      setMode('darkGreen');
      document.body.style.backgroundColor = "#005500";
      showAlert(" Green Dark Mode Activated", "success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Activated", "success");
    }
  }
  return (
  <>
    <Router>
      {/*Navigation Bar*/}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} togglemode={toggleMode2}/>
      <Alert alert={alert} />

    <div className='container my-5'>
      <Switch>
          <Route exact path="/About">
            <About/>
          </Route>
          <Route exact path="/">
            {/* Text Box */}
            <TextForm showAlert={showAlert} heading="Text Analyser" mode={mode}/>
          </Route>
      </Switch>
    </div>
  </Router>
  </>
  );
}
export default App;
