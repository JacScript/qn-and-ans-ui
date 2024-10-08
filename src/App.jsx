import React, { createContext, useEffect, useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Ask from "./pages/Ask.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Sign.jsx";
import QuestionPage from "./pages/QuestionPage.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import UserContext from "./UserContext.jsx";
// import Axios from "axios";

import ErrorPage from "./pages/NotFound.jsx";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";
import TagPage from "./pages/TagPage.jsx";

import "./App.css";
import UserPage from "./pages/UserPage.jsx";


// Axios.defaults.withCredentials = true;

const App = () => {

  return (
    <div className="w-screen">
      {/* <UserContext.Provider value={user}> */}
        <ToastContainer className="text-sm"/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/users/:id" component={UserPage}/>
          {/* PrivateRoutes */}
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/ask" component={Ask} />
          <PrivateRoute path="/question/:id" component={QuestionPage} />
          <PrivateRoute path="/tag/:name" component={TagPage}/>
          {/* <Route path="/question/:id" component={QuestionPage} /> */}
          {/* <Route path="/ask" component={Ask} />
          <Route path="/profile" component={Profile} /> */}
        </Switch>
      </BrowserRouter>
      {/* </UserContext.Provider> */}
    </div>
  );
};

export default App;
