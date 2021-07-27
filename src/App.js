// import Routes from '../routes.js'
import Header from './components/Header'
import Posts from './pages/Posts'
import Resposta from './pages/Resposta'
import Form from './pages/Form'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router>
    <div className="App"  style={{
      backgroundColor: '#36393f'
    }}>
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