// import Routes from '../routes.js'
import Header from "./components/Header";
import Posts from "./pages/Posts";
import Form from "./pages/Form";
import Resposta from "./pages/Resposta";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="Multi Duck System" />
        <Switch>
          <Route exact path="/">
            <Posts />
          </Route>
          <Route path="/resposta/:id">
            <Resposta />
          </Route>
          <Route path="/post">
            <Form />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
