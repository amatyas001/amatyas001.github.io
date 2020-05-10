import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Container } from "react-bootstrap";
import { Home, Projetcs } from "./pages";
import { Navigation } from "./components";
import "./index.sass";

function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Navigation />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projetcs} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
