import React from 'react';
import GlobalStyles from './GlobalStyles';
import { TopBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <TopBar />
    </div>
  );
}

export default App;
