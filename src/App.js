import React from 'react';
import OptionsDropdown from './components/OptionsDropdown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ColorGrid from './components/ColorGrid';
import OptionsPage from './components/OptionsPage/OptionsPage';


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/options' component={OptionsPage} />

          <Route exact path='/'>
            <OptionsDropdown />
            <ColorGrid />
          </Route>

          <Route exact path='/optionsgrid'>
            <OptionsDropdown />

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
