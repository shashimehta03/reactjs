import React from 'react';
//import Greeting from './greeting'; //props
import Counter from './Counter'; //useState

import Home from './Pages/home';
import About from './Pages/about';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    // <div>
    //   <Greeting name="Shashi"  age ="16"/> 
    //   <Greeting age="19"/>
    //   <Greeting name="Alice" />
    //   {/* //passing value in pros for greeting components  */}
    // </div>
    // <>
    //   <Counter/> 
    //   {/* use state implemnteed here */}
    // </>
    <Router>
      <div>
       <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
        </ul>
       </nav>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/counter' element={<Counter/>}/>

       </Routes>
      </div>
    </Router>

    
  );
};

export default App;