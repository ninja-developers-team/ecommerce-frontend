import React from 'react';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";


class App extends React.Component{
  render(){
    return(
      <div>
         
        <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
          <Main/>
          </Route>
          <Route path="/Checkoutitems">
           
          </Route>
        </Switch>
      
    </Router>
      </div>
    );
  }
}

export default App;
