import "./App.css";
import Navbars from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Courses from "./components/pages/Courses";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import Progess from "./components/pages/Progess";
import TrainingPage from "./components/pages/TrainingPage";
import Record from "./components/pages/Record";
import Result from "./components/pages/Result";
import Activity from "./components/pages/Activity";
import React from "react";

function App() {
  return (
    <>
      <Router>
         <Navbars></Navbars>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" component={TrainingPage} />
          <Route path="/courses" component={Courses} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/record" component={Record} />
          <Route path="/news" component={Contact} />
          <Route path="/progess" component={Progess} />
          <Route path="/result" component={Result} />
          <Route path="/activity" component={Activity} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
