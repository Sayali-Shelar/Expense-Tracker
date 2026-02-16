import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

import Home from './Dashboard/Home'
import Login from './pages/Login'
import Registration from './pages/Registration'

import Income from './pages/Income';
import Expense from './pages/Expense';
import DashboardLayout from './Dashboard/DashboardLayout';
import OverviewDashboard from './Dashboard/OverviewDashboard';
import IncomeDashboard from './Dashboard/IncomeDashboard';



const App = () => {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/income' element={<Income />} />
          <Route path='/expense' element={<Expense />} />
          <Route path='/dashboard' element={<DashboardLayout />} />
          <Route path='/overview' element={<OverviewDashboard/>} />
          <Route path='/income-dashboard' element={<IncomeDashboard/>} />


        </Routes>
      </Router>
         
    </div>
  )
}

export default App