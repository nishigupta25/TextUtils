
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert.js';
{/*import {
  BrowserRouter as Router,
  BrowserRouter as Router,
  Routes,
  Route,
  Link
 from "react-router-dom";}*/}

function App() {
  const[mode,setMode]=useState('light');//Whether dark mode is enabled or node
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
const toggleMode=()=>{
  if(mode==='light')
  {
    setMode('dark')
  document.body.style.backgroundColor='#273a56';
  showAlert("Dark mode has been enabled","success")
}
  else
 { setMode('light')
  document.body.style.backgroundColor='white';
  showAlert("Light mode has been enabled","success")
}
}
  return (
    <>
  {/*<Router>*/}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3" >
{/*<Routes>*/}
         {/*<Route exact path="/about" element={<About/>}/>*/}
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
</div>
{/*</Router>*/}
    </>
  );
}

export default App;
