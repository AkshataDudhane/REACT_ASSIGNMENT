import React from 'react';
import './Rewards.css'; 

export default function Rewards() {
  return (
    <div className="card custom-card"> 
      <div className="card-header custom-header"> 
        Rewards
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>Your Rewards</p>
          <footer className="blockquote-footer custom-footer"> 
            Sorry <cite title="Source Title">No rewards to display!</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  
  );
}
