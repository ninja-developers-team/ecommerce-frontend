import React from 'react';
import Main from './Screens/Main'
import Header from './Component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Component/Footer';

class App extends React.Component {

  render() {
    return ( //   /electronics /clothing2
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/profile">
              {/* profile component */}
            </Route>
            <Route exact path="/Cars">
              {/* car component */}
            </Route>
            <Route exact path="/clothing1">
              {/* women clothing compnent */}
            </Route>
            <Route exact path="/jewelery">
              {/* jewelery component */}
            </Route>
            <Route exact path="/electronics">
              {/* electronics */}
            </Route>
            <Route exact path="/clothing2">
              {/* men clothing */}
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;