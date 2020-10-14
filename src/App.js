import React from 'react';
import OptionsDropdown from './components/OptionsDropdown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ColorGrid from './components/ColorGrid';
import OptionsSelector from './components/OptionsSelector';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/options' component={OptionsSelector} />
          <Route exact path='/'>
            <OptionsDropdown />
            <ColorGrid />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
