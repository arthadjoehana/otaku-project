import React, {useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import UserContext from './context/userContext';

import './App.css';

import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';
import Navbar from './components/navbar/Navbar';



export default function App() {

  const [isLogIn, setisLogIn] = useState(false)

  // useEffect(() => {
  //   console.log("UseEFFECT MARCHE")
  //   axios.get(process.env.REACT_APP_API_URL + "/home/logIn", { withCredentials: true })
  //   .then((res) => {
  //     localStorage.setItem("isLogin", res.data.logStatus);
  //     setisLogIn("true")
  //     console.log(res.data.logStatus)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ isLogIn, setisLogIn }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/Home" component={Home} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

