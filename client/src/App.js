import React, { useState, useEffect } from 'react';
import OptionsDropdown from './components/OptionsDropdown';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ColorGrid from './components/ColorGrid';
import OptionsPage from './components/OptionsPage/OptionsPage';
import Login from './components/LoginSignupPages/Login';
// import ColorGetter from './components/ColorGetter';
import axios from 'axios';
import Signup from './components/LoginSignupPages/Signup';
import { loggedInUser, selectLoggedInUser } from './redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import SaveDropdown from './components/SaveDropdown';
import LoadDropdown from './components/LoadDropdown';
import TopBar from './components/TopBar';

function App() {
  const [colorGrid, setColorGrid] = useState([]);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let userInfo = useSelector(selectLoggedInUser);


  useEffect(() => {
    axios.get("/api/userdata").then(({ data }) => {
      if (data) {
        console.log(data)
        dispatch(loggedInUser(data))
      }
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/options' component={OptionsPage} />

          {/* Loads the color grid with default options */}
          <Route exact path='/'>
            {/* <ColorGetter /> */}
            <TopBar />
            <ColorGrid />
          </Route>

          {/* This route loads the grid with custom options */}
          <Route exact path='/optionsgrid'>
            <TopBar />
            <ColorGrid
              reloadingWithOptions={true}
            />
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
