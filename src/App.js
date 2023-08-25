
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from "react";


// import {
//   BrowserRouter,
//   Routes,
//   Route
//  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({msg: message,
    type: type
    })
    setTimeout( ()=>{
      setAlert(null)
    },3000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode is enabled", "success: ");
      document.title='TextEditors-Dark Mode';
      setInterval( ()=>{
        document.title='TextEditors is Amazing';
      },2000);
      setInterval( ()=>{
        document.title='install TextEditors now';
      },1500);

    }else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode is enabled", "success: ");
      document.title='TextEditors-Light Mode';
    }
  } 
  // const onClick = ()=>{

  // }

  return (
    <>
     {/* <BrowserRouter> */}
           {/* <Navbar title = "TextUtils" about = "About Us"/> */}
           {/* <Navbar/> */}
           <Navbar title = "TextEditor" mode={mode} toggleMode={toggleMode} />
           <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading = "Enter Text To Analyze" mode={mode}/>
        {/* <Routes>
          <Route path="/" Component={TextForm}></Route>
          <Route path="/about" Component={About}></Route>
        </Routes> */}
      </div>
     {/* </BrowserRouter> */}
  </>
  );
}

export default App;
