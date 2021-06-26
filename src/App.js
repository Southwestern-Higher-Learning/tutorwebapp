import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'
import ProviderComponent from './providers/UserContextProvider'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
      </Switch>
      </Router>
    </ProviderComponent>
    
  );
}

export default App;
