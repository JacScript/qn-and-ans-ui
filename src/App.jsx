import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";
import Home from "./pages/Home.jsx";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Ask from "./pages/Ask.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Sign.jsx";
// import UserContext from "./UserContext.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";

import "./App.css";
import ErrorPage from "./pages/NotFound.jsx";

Axios.defaults.withCredentials = true;

const App = () => {


  // useEffect( () => {
  //   Axios.get("http://localhost:3000/auth/profile", {
  //     username,
  //   }).then(() => {
  //     (response) => {
  //       console.log(response);
  //       setCheckingAuth(false);
  //     }
  //   }).catch(
  //     (response) => {
  //       setCheckingAuth(false)
  //     }
  //   )
  // }, [])

  return (
    <div className="">
      {/* <UserContext.Provider value={user}> */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ask" component={Ask} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/questions/:id" component={QuestionPage} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
      {/* </UserContext.Provider> */}
    </div>
  );
};

export default App;
