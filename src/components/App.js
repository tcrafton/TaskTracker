import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import InfoPage from "./info/InfoPage";
import TaskList from "./tasks/TaskList";
import TaskEdit from "./tasks/TaskEdit";
import TaskCreate from "./tasks/TaskCreate";
import TaskDelete from "./tasks/TaskDelete";
import Header from "./common/Header";
import history from "../history";

const App = () => {
  return (
    <div className="container-fluid">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/info" component={InfoPage} />
          <Route path="/tasks/new" exact component={TaskCreate} />
          <Route path="/tasks/edit/:id" exact component={TaskEdit} />
          <Route path="/tasks/delete/:id" exact component={TaskDelete} />
          <Route path="/tasks" component={TaskList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
