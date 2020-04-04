import React, { useEffect } from "react";
import SideBar from "./components/SideBar/SideBar";
import Nav from "./components/NavBar/Nav";
import Landing from "./components/Layout/Landing";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

function App() {
  // useEffect(() => {
  //   setAuthToken(localStorage.token);
  //   store.dispatch(loadUser());
  // }, []);
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />

          <Route exact path='/dashboard' component={SideBar} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
