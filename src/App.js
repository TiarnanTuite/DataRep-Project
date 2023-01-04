import React from 'react';
import Navbar from './Components/Navbar';
import {Home} from './Components/home';
import {Calories} from './Components/calories';
import {Macros} from './Components/macros';
import {Signup} from './Components/sign-up';
import { Login } from './Components/log-in';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
    <Router>

      {/* implementing navbar component */}
      <React.Fragment>
        <Navbar/>
      </React.Fragment>

      {/* using BrowserRouter to switch between components */}
      <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/calories' element={<Calories></Calories>}></Route>
       <Route path='/macros' element={<Macros></Macros>}></Route>
       <Route path='/sign-up' element={<Signup></Signup>}></Route>
       <Route path='/log-in' element={<Login></Login>}></Route>
      </Routes>
    </Router>

  );
}
}

export default App;
