import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Nav from './Nav';
import Home from './posts/Home';
import Create from './Create';
import Readmore from './posts/Readmore';


function App() {
  return (<>
    <BrowserRouter>
      <div>
        <Nav />
        <div>
          <Switch>
            <Route exact path="/">  <Home />  </Route>
            <Route path="/Create">  <Create />  </Route>
            <Route path="/posts/:id">  <Readmore />  </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </>);
}

export default App;
