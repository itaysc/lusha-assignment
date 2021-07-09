import {UserList, CreateUser} from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
         <Switch>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
