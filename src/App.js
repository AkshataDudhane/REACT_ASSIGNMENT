import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Activities from './components/Activities';
import axios from 'axios';
import Rewards from './components/Rewards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const name = "Name: Akshata Dudhane";
  const dob = "DOB: 04/05/2001";
  const tier = "Tier: GOLD";
  const [totalPurchaseCount, setTotalPurchaseCount] = useState(0); 

  const URL = 'https://65127e22b8c6ce52b395b28b.mockapi.io/api/v1/activity';

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await axios.get(URL);
        const purchases = response.data;
        setTotalPurchaseCount(purchases.reduce((acc, purchase) => acc + purchase.count,0));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPurchases();
  },[]);

  const updateTotalPurchaseCount = (newCount) => {
    setTotalPurchaseCount(newCount);
  };

  return (
    <>
      <Router>
        <Navbar totalPurchaseCount={totalPurchaseCount} name={name} dob={dob} tier={tier} />
        <div>
          <Routes>
            <Route path="/" element={<Activities updateTotalPurchaseCount={updateTotalPurchaseCount} />} />
            <Route path="/list" element={<Rewards />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
