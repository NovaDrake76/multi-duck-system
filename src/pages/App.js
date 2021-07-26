// import Routes from '../routes.js'
import Header from '../components/Header.js'
import Posts from './Posts'
import Resposta from './Resposta'
import Form from './Form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App" >
      <Header title="Multi Duck System"/>
      <Switch>
        <Route exact path = "/">
            <Posts />
        </Route>
        <Route path = "/resposta">
            <Resposta />
        </Route>
        <Route path = "/post">
            <Form />
        </Route>
      </Switch>
    </div>
    </Router >
  );
}

export default App;