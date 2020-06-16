import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import { TopBar } from './components/NavBar/NavBar';
import Home from './pages/Home';
import ImgView from "./pages/ImgView"

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <TopBar />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route path={"/img/:id"} component={ImgView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
