import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from "./pages/ProfilePage";

import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
import { SearchTutor } from "./pages/SearchTutor";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/login">
          <HomePage />
        </Route>
        <Route exact path="/homepage">
          <HomePage />
        </Route>
        <Route exact path="/searchtutor">
          <SearchTutor />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default withRouter(App);
