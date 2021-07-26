import React from "react";
import Resposta from "./pages/Resposta";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routes() {
  return (
      <div>
    <Router path={[
        '/resposta'
    ]}/>

        <Switch>
          <Route path="/resposta" exact component={Resposta} /> 
        </Switch>
      </div>
  );
}
