import React from 'react';
import OptionsDropdown from './components/OptionsDropdown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ColorGrid from './components/ColorGrid';
import OptionsPage from './components/OptionsPage/OptionsPage';
import Login from './components/LoginSignupPages/Login';
// import ColorGetter from './components/ColorGetter';
import Signup from './components/LoginSignupPages/Signup';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/options' component={OptionsPage} />

          {/* Loads the color grid with default options */}
          <Route exact path='/'>
            {/* <ColorGetter /> */}
            <OptionsDropdown />
            <ColorGrid />
          </Route>

          {/* This route loads the grid with custom options */}
          <Route exact path='/optionsgrid'>
            <OptionsDropdown />
            <ColorGrid reloadingWithOptions={true} />
          </Route>

          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/signup'>
            <Signup />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
