import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Transactions from './pages/Transactions'
import Transfer from './pages/Transfer'
import Budgets from './pages/Budgets'
import SignUp from './pages/SignUp'
import HomePage from './pages/HomePage'

import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          } 
        />

        <Route 
          path='/account' 
          element={
            <ProtectedRoute>
              <Account/>
            </ProtectedRoute>
          } 
        />

        <Route 
          path='/transactions' 
          element={
            <ProtectedRoute>
              <Transactions/>
            </ProtectedRoute>
          } 
        />

        <Route 
          path='/transfer-amount' 
          element={
            <ProtectedRoute>
              <Transfer/>
            </ProtectedRoute>
          } 
        />

        <Route 
          path='/budgets' 
          element={
            <ProtectedRoute>
              <Budgets/>
            </ProtectedRoute>
          } 
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
