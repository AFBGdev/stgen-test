// import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page';
import TransactionsPage from './pages/transactions-page';
import RootLayout from './layouts/root-layout';

function App() {

  return (
    <Routes>
      <Route path='/' element={<RootLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path='transactions' element={<TransactionsPage />} />
      </Route>
    </Routes>
  )
}

export default App
