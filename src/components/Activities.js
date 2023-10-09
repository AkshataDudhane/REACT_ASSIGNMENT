import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Activities.module.css'

export default function Activities({updateTotalPurchaseCount}) {
  const [purchases, setPurchases] = useState([]);
  const URL = 'https://65127e22b8c6ce52b395b28b.mockapi.io/api/v1/activity';
  const handlePurchaseClick = async (purchaseId) => {
    try {
      const updatedPurchases = purchases.map((purchase) => {
        if (purchase.id === purchaseId) {
          return { ...purchase, count: purchase.count + 1 };
        }
        return purchase;

      });

      setPurchases(updatedPurchases);
      
      await axios.put(`${URL}/${purchaseId}`, { 
        count: purchases.find(p => p.id === purchaseId).count + 1 });
        const newCount = updatedPurchases.reduce((acc, purchase) => acc + purchase.count, 0);
        updateTotalPurchaseCount(newCount);
    } catch (error) {
      console.error('Error updating purchase:', error);
    }
  };

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const { data } = await axios.get(URL);
        setPurchases(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPurchases();
  }, []);


  return (
    <>
    <div className='Activity'>
      <h2 style={{textAlign:'center'}}>Purchases</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>id</th>
            <th>Description</th>
            <th>Name</th>
            <th>Count</th>
            <th>Click to purchase</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id}>
              <td>{purchase.id}</td>
              <td>{purchase.desc}</td>
              <td>{purchase.name}</td>
              <td>{purchase.count}</td>
              <td><button onClick={() => handlePurchaseClick(purchase.id)} type="button" className="btn btn-dark">Purchase</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}