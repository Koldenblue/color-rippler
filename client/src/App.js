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

function App() {
  const [colorGrid, setColorGrid] = useState([]);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let userInfo = useSelector(selectLoggedInUser);

  // const getCurrentUser = () => axios.get("/api/userdata").then(({data}) => {
  //   console.log(data)
  //   if (data) {
  //     console.log(data)
  //     dispatch(loggedInUser(data))
  //   }
  // })

  useEffect(()=> {

    // console.log(user)
    // getCurrentUser()
    // .then((data) => {

    //   if(data) {
    //     try {
    //       console.log(data)
    //       // setUser(data);
    //     }
    //     catch (err) {
    //       console.log(err)
    //     }
    //   }
    //   setLoading(false)
    // }).catch((err) => {
    //   console.error(err);
    // })
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/options' component={OptionsPage} />

          {/* Loads the color grid with default options */}
          <Route exact path='/'>
            {/* <ColorGetter /> */}
            <OptionsDropdown />
            {/* these should be shown conditionally */}
            <SaveDropdown 
              // colorGrid={colorGrid}
              // setColorGrid={setColorGrid}
            />
            <LoadDropdown 
              // setColorGrid={setColorGrid}
            />
            <ColorGrid
              // colorGrid={colorGrid}
              // setColorGrid={setColorGrid}
            />
          </Route>

          {/* This route loads the grid with custom options */}
          <Route exact path='/optionsgrid'>
            <OptionsDropdown />
            <LoadDropdown 
              // setColorGrid={setColorGrid}
            />
            <ColorGrid 
              reloadingWithOptions={true} 
              // colorGrid={colorGrid}
              // setColorGrid={setColorGrid}
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
