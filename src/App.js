import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import { TopBar } from './components/NavBar/NavBar';
import UploadContainer from './components/UploadWindow/UploadContainer';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <TopBar />
        <Switch>
          <Route to={'/'}>
            <UploadContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
