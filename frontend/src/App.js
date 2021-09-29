import React, {useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import UserContext from './context/userContext';

import './App.css';

import Home from './components/pages/home/Home';
import Register from './components/pages/Register';
import NavBar from './components/navbar/NavBar';



function App() {
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, {headers: {"x-auth-token": token}});
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    }

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <NavBar />
        <Switch>
          {userData.user ? (
            <Route exact path="/" component={Home} />
          ) : (
            <Register />
          )}
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
