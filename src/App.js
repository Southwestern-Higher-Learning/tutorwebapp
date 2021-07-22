import "./App.css";
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import { ProfilePage } from "./pages/ProfilePage";
import { SearchTutor } from "./pages/SearchTutor";
import ProviderComponent from './providers/UserContextProvider'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ProviderComponent>
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
    </ProviderComponent>

  );
}

export default App;
