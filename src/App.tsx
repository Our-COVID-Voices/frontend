import React, { FunctionComponent, useEffect } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { Provider, observer } from "mobx-react";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles/main.scss";

import httpService from "./service/api";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import About from "./views/About";
import Login from "./views/Login";
import Register from "./views/Register";
import PrivacyPolicy from "./views/PrivacyPolicy";
import ForgotPassword from "./views/ForgotPassword";
import ResetPassword from "./views/ResetPassword";
import Dashboard from "./views/Dashboard";
import Browse from "./views/Browse";
import MyExperiences from "./views/Experiences/MyExperiences";
import Story from "./views/Story";
import TryAgain from "./views/TryAgain";
import SubmitExperiences from "./views/Experiences/SubmitExperiences";
import MyAccount from "./views/MyAccount";
import ChangePassword from "./views/ChangePassword";
import UpdateEmail from "./views/UpdateEmail";
import Withdraw from "./views/Withdraw";
import Problem from "./views/Problem";
import ReviewExperiences from "./views/Experiences/ReviewExperiences";
import MyExperience from "./views/Experiences/MyExperience";

import PrivateRoute from "./components/PrivateRoute";

import CookiesStore from "./stores/cookiesStore";
import RegisterStore from "./stores/registerStore";
import UserStore from "./stores/userStore";
import ContributionStore from "./stores/contributionStore";
import ExperienceStore from "./stores/experienceStore";
import StoryStore from "./stores/storyStore";
import ReviewStore from "./stores/reviewStore";
import FAQ from "./views/FAQ";
import WritingGuidance from "./views/WritingGuidance";
import Contact from "./views/Contact";

library.add(fas);

const userStore = new UserStore();
const cookieStore = new CookiesStore();
const registerStore = new RegisterStore(userStore);
const experienceStore = new ExperienceStore();
const contributionStore = new ContributionStore();
const storyStore = new StoryStore(experienceStore);
const reviewStore = new ReviewStore();
const history = createBrowserHistory();

httpService.setupInterceptors(history);

ReactGA.initialize("UA-169949190-1", {
  testMode: process.env.NODE_ENV === "development",
});

history.listen((location) => {
  ReactGA.pageview(location.pathname + location.search);
});

const App: FunctionComponent = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Provider
      cookieStore={cookieStore}
      registerStore={registerStore}
      userStore={userStore}
      experienceStore={experienceStore}
      contributionStore={contributionStore}
      storyStore={storyStore}
      reviewStore={reviewStore}
    >
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/browse" component={Browse} exact={true} />
            <Route path="/contact" component={Contact} exact={true} />

            <Route path="/story/:storyId" component={Story} exact={true} />
            <Route path="/about" component={About} exact={true} />
            {/* <Route path="/contribute" component={Contribute} exact={true} /> */}
            <Route path="/login" component={Login} exact={true} />
            <Route path="/register" component={Register} exact={true} />
            <Route path="/faqs" component={FAQ} exact={true} />
            <Route
              path="/what-we-need-now"
              component={WritingGuidance}
              exact={true}
            />

            <Route
              path="/privacy-policy"
              component={PrivacyPolicy}
              exact={true}
            />
            <Route
              path="/forgot-password"
              component={ForgotPassword}
              exact={true}
            />
            <Route
              path="/reset-password"
              component={ResetPassword}
              exact={true}
            />
            <Route path="/try-again" component={TryAgain} exact={true} />
            {/* User Routes */}
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              exact={true}
            />
            <PrivateRoute path="/account" component={MyAccount} exact={true} />
            <PrivateRoute
              path="/account/change-email"
              component={UpdateEmail}
              exact={true}
            />
            <PrivateRoute
              path="/account/change-password"
              component={ChangePassword}
              exact={true}
            />
            <PrivateRoute
              path="/account/problem"
              component={Problem}
              exact={true}
            />
            <PrivateRoute
              path="/account/withdraw"
              component={Withdraw}
              exact={true}
            />
            <PrivateRoute
              path="/my-experiences"
              component={MyExperiences}
              exact={true}
            />
            <PrivateRoute
              path="/my-experiences/story/:storyId"
              component={MyExperience}
              exact={true}
            />
            <PrivateRoute
              path="/my-experiences/review/:storyId"
              component={ReviewExperiences}
              exact={true}
            />
            <PrivateRoute
              path="/submit-experience"
              component={SubmitExperiences}
              exact={true}
            />
            <Route component={NotFound} />
          </Switch>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default observer(App);
