import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import { TopBar } from './components/NavBar/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <TopBar />
        <Switch>
          <Route exact to={'/'}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
