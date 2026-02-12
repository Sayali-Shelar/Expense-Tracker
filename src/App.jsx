import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Home from './Dashboard/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Main from './Dashboard/Main';
import Main2 from './Dashboard/Main2';




const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/main' element={<Main />} />
          <Route path='/main1' element={<Main2 />} />
        
          


        </Routes>
      </Router>
         
    </div>
  )
}

export default App