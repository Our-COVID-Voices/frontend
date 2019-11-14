import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles/main.scss";

import Home from "./views/Home";
import NotFound from "./views/NotFound";
import About from "./views/About";
import Contribute from "./views/Contribute";
import Login from "./views/Login";
import Register from "./views/Register";
import PrivacyPolicy from "./views/PrivacyPolicy";

import Header from "./components/Header";

import CookiesStore from "./stores/cookiesStore";
import RegisterStore from "./stores/registerStore";

library.add(fas);

const cookieStore = new CookiesStore();
const registerStore = new RegisterStore();

const App: FunctionComponent = () => (
  <Provider cookieStore={cookieStore} registerStore={registerStore}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/contribute" component={Contribute} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/privacy-policy" component={PrivacyPolicy} exact={true} />

        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
