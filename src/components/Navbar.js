import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({name,dob,tier,totalPurchaseCount}) {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark border border-primary">
        <h6 style={{ marginLeft: ".8rem", marginTop: ".6rem", color: "white" }}>
          {name}
        </h6>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <h6
                style={{
                  marginLeft: ".8rem",
                  marginTop: ".6rem",
                  color: "white",
                }}
              >
                {dob}
              </h6>
            </li>
            <li className="nav-item">
              <h6
                style={{
                  marginLeft: ".8rem",
                  marginTop: ".6rem",
                  color: "white",
                }}
              >
                {tier}
              </h6>
            </li>
            <li
              style={{
                marginLeft: ".8rem",
                marginTop: ".6rem",
                color: "white",
              }}
            >
              <h6>
                TOTAL COUNT:
                <span
                  className="badge bg-secondary"
                  style={{ marginLeft: ".3rem" }}
                >
                  {totalPurchaseCount}  
                </span>
              </h6>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <Link className="nav-link active" id="acti" data-toggle="tab" role="tab" aria-current="page" to="/">
            Activities
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id="rew" data-toggle="tab" role="tab" to="/list">
            Rewards
          </Link>
        </li>
      </ul>
    </>
  );
}
