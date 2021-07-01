import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Tasklist from "./Components/Tasklist";
import Addtask from "./Components/Addtask";
import Simple from './Components/Simple';
function App() {

  return (
    <>
      {/* <Simple /> */}
      <Router>
        <Tasklist />
        <Switch>
          <Route path='/Login'> <Login /> </Route>
          <Route path='/Signup'> <Signup /> </Route>
          <Route path='/Addtask'> <Addtask /> </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
