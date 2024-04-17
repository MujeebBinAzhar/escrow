import React from "react";
import Link from "next/link";
import CountdownTimer from "../components/CountdownTimer";

const page = () => {
  return (
    <>
      <div>
        <section className="dash-navigation">
          <div className="container">
            <div className="dash-inner">
              <div className="dash-logo">
                <h1>ESCROW INTERNATIONAL FINANCIAL</h1>
              </div>
              <div className="dash-user">
                <Link href="/">
                  <img src="logout.svg" alt="logout" />
                  <p>Logout</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="dashboard">
          <div className="container">
            <div className="top">
              <div className="top-left">
                <img src="lewis.jpeg" className="img-fluid" alt="menu" />
              </div>
              <div className="top-right">
                <h5 className="greeting">Greetings!</h5>
                <h3 className="purple mb-5">Welcome Lewis F Clark</h3>
              </div>
            </div>
            <div className="row">
              <CountdownTimer />

              <div className="col-lg-8">
                <ul className="dash-top-ul">
                  <li>
                    <div className="dash-card">
                      <img src="users.svg" alt />
                      <p>Customers</p>
                      <div className="dash-card-header">
                        <h3>34563</h3>
                      </div>
                      <div className="dash-card-body">
                        <p className="faded">Increase by 30%</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dash-card">
                      <img src="orders.svg" alt />
                      <p>Orders</p>
                      <div className="dash-card-header">
                        <h3>45893</h3>
                      </div>
                      <div className="dash-card-body">
                        <p className="faded">Increase by 20%</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dash-card ">
                      <img src="dollar.svg" alt />
                      <p>Transactions</p>
                      <div className="dash-card-header">
                        <h3>$10,000,000</h3>
                      </div>
                      <div className="dash-card-body">
                        <p className="faded">85% Completed</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dash-card p-1">
                      <img src="clock.svg" alt />
                      <p className="mb-2">$1,999</p>
                      <div className="dash-card-header">
                        <p className="">Outstanding payments </p>
                        <p className="text-start mb-1">
                          $2,000
                          <span className="check">
                            <img src="check.svg" alt="check" />
                          </span>
                        </p>

                        <p className="text-start">
                          $1,000
                          <span className="check check-two">
                            <img src="check.svg" alt="check" />
                          </span>
                        </p>
                      </div>
                      <div className="dash-card-body">
                        <p className="faded">Successful Payment </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="trans-card">
                  <h4 className="purple">Details</h4>
                  <div className="name-detials">
                    <p>
                      First Name: <span>Lewis</span>
                    </p>
                    <p>
                      Last Name: <span>Clark</span>
                    </p>
                  </div>
                  <div className="name-detials">
                    <p>
                      Address:
                      <span>
                        1219 WATERSIDE LANE VENICE ,&nbsp;FLORIDA&nbsp;34284,
                        UNITED STATES OF AMERICA
                      </span>
                    </p>
                  </div>
                  <div className="name-detials">
                    <p>
                      Thumb Print Status: <span>Verified ✅</span>
                    </p>
                    <p>
                      Total Amount USD:
                      <span> TRANSFERRED OUT OF ESCROW $10,000,000</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="trans-card">
                  <h5 className="card-heading">
                    INTERNATIONAL ESCROW TRANSACTIONS
                  </h5>
                  <ul className="transaction-ul">
                    <li>
                      <div className="transaction">
                        <div className="user">
                          <img src="dollar.svg" alt="user" />
                          <p className="usd">$5,000,000 Five million dollars</p>
                          <span>Completed</span>
                        </div>
                        <div className="details">
                          <p>
                            <span className="black fw-bold">
                              Chase&nbsp;Bank
                            </span>
                          </p>
                        </div>
                        <div className="details">
                          <p>
                            Date: <span>11-April-2024</span>
                          </p>
                          <p>
                            Account Name: <span>Lewis F. Clark Jr.</span>
                          </p>
                        </div>
                        <div className="details">
                          <p>
                            Account Number: <span>616008093</span>
                          </p>
                          <p>
                            Routing Number: <span>021000021</span>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="transaction">
                        <div className="user">
                          <img src="dollar.svg" alt="user" />
                          <p className="usd">$5,000,000 Five million dollars</p>
                          <span>Completed</span>
                        </div>
                        <div className="details">
                          <p>
                            <span className="black fw-bold">
                              NatWest (UK) Bank&nbsp;
                            </span>
                          </p>
                        </div>
                        <div className="details">
                          <p>
                            Date: <span>11-April-2024</span>
                          </p>
                          <p>
                            Account Name: <span>Lewis F. Clark Jr.</span>
                          </p>
                        </div>
                        <div className="details">
                          <p>
                            Current Plus Account Number: <span>50536133</span>
                          </p>
                        </div>
                        <div className="details">
                          <p>
                            Branch Sort Code: <span>55-50-39</span>
                          </p>
                        </div>
                        <div className="details">
                          <p>
                            SWIFT: <span>NWBKGB2L</span>
                          </p>
                        </div>
                        <div className="details">
                          <p>
                            IBAN: <span>GB78 NWBK 5550 3950 5361 33</span>
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="trans-card">
                  <img
                    src="card-front.jpeg"
                    className="img-fluid"
                    alt="updates"
                  />
                </div>
              </div>
              <div className="col-lg-4 mt-3 mt-lg-0">
                <div className="trans-card">
                  <img
                    src="card-back.jpeg"
                    className="img-fluid"
                    alt="updates"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-4">
                <div className="trans-card">
                  <img src="weekly.PNG" className="img-fluid" alt="updates" />
                </div>
              </div>
              <div className="col-lg-4 mt-3 mt-lg-0">
                <div className="trans-card">
                  <img src="visits.PNG" className="img-fluid" alt="updates" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
