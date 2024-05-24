"use client";
import React, { useState } from "react";
import Link from "next/link";
import CountdownTimer from "../components/CountdownTimer";

const AdminPage = () => {
  const [natwest, setNatwest] = useState(false);
  const [chase, setChase] = useState(false);

  const [pending, setPending] = useState(false);
  const [natwestTransfer, setNatwestTransfer] = useState({
    firstName: "",
    lastName: "",
    accountNumber: "",
    sortCode: "",
    amount: "",
  });

  const natwestChange = (e) => {
    setNatwestTransfer({
      ...natwestTransfer,
      [e.target.name]: e.target.value,
    });
    console.log(natwestTransfer);
  };

  const natwestSubmitHandler = (e) => {
    e.preventDefault();

    if (
      natwestTransfer.firstName === "" ||
      natwestTransfer.lastName === "" ||
      natwestTransfer.accountNumber === "" ||
      natwestTransfer.sortCode === "" ||
      natwestTransfer.amount === ""
    ) {
      alert("All fields are required");
      return;
    }

    if (natwestTransfer.amount > 5000000) {
      alert("Amount should be less than $5,000,000");
      return;
    }
    setNatwest(false);
    setPending(true);
  };

  return (
    <>
      {natwest && (
        <div className="admin-nat-model">
          <div className="natwest">
            <div className="text-end">
              <img
                src="/plus.svg"
                className="admin-cross"
                alt=""
                onClick={() => setNatwest(false)}
              />
            </div>

            <div className="nat-form mt-3">
              <form onSubmit={natwestSubmitHandler}>
                <input
                  type="text"
                  className="custom-field mt-3"
                  placeholder="Beneficiary First Name:"
                  name="firstName"
                  value={natwestTransfer.firstName}
                  onChange={natwestChange}
                />
                <input
                  type="text"
                  className="custom-field mt-3"
                  placeholder="Beneficiary Last Name:"
                  name="lastName"
                  value={natwestTransfer.lastName}
                  onChange={natwestChange}
                />
                <input
                  type="text"
                  className="custom-field mt-3"
                  placeholder="Beneficiary Account Number:"
                  name="accountNumber"
                  value={natwestTransfer.accountNumber}
                  onChange={natwestChange}
                />
                <input
                  type="text"
                  className="custom-field mt-3"
                  placeholder="Bank Sort Code:"
                  name="sortCode"
                  value={natwestTransfer.sortCode}
                  onChange={natwestChange}
                />
                <input
                  type="number"
                  className="custom-field mt-3"
                  placeholder="Enter Amount (Max $5,000,000)"
                  name="amount"
                  value={natwestTransfer.amount}
                  onChange={natwestChange}
                />
                <button type="submit" className="admin-btn mt-4">
                  Transfer
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {
        pending &&  <div className="admin-nat-model">
        <div className="pending-pop-up">
          

          <div className="natwest">
          <div className="text-end">
            <img
              src="/plus.svg"
              className="admin-cross"
              alt=""
              onClick={() => setPending(false)}
            />
          </div>
            <p>Thanks for transaction</p>
            <h4>TRANSACTION PENDING</h4>
          </div>
        </div>
      </div>
      }

      

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
          <div className="row">
            <div className="col-lg-6">
              <div className="top">
                <div className="top-left">
                  <img src="lewis.jpeg" className="img-fluid" alt="menu" />
                </div>
                <div className="top-right">
                  <h5 className="greeting">Greetings!</h5>
                  <h3 className="purple mb-5">Welcome Lewis F Clark</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column align-items-center mt-4 mt-lg-0">
              <img src="sig.jpeg" alt="signature" className="sig-img" />

              <p className="mt-4 text-center">
                <b>DIGITAL SIGNATURE COMPLETED</b>
              </p>
            </div>
          </div>

          <div className="row py-5">
            <div className="row">
              <div className="col-md-6">
                <div className="custom-card">
                  <h3>Escrow international Customers Details</h3>

                  <p className="mb-1">First Name: LEWIS</p>
                  <p className="mb-1">Last Name: CLARK</p>
                  <p className="mb-1">Country: United States Of America</p>
                  <p className="mb-1">Account Balance: $10,000,000.00 USD </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="custom-card">
                  <button
                    className="admin-btn"
                    onClick={() => setNatwest(true)}
                  >
                    NATWEST TRANSFER
                  </button>
                  <button className="admin-btn" onClick={() => setNatwest(true)} >CHASE TRANSFER</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
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
                      <p className="faded">99% Completed</p>
                    </div>
                  </div>
                </li>
                {/* <li>
                    <div className="dash-card p-1">
                      <img src="clock.svg" alt />

                      <div className="dash-card-header w-100">


                      <p className="faded text-start mt-2 mb-1">
                      Outstanding Tax Payments
                        </p>

                        <div className="payment-box ">
                          <p className="payment-para mb-1"> $15,286</p>

                          <div className="check">
                            <img src="check.svg" alt="check" />
                          </div>
                        </div>

                       


                        <p className="faded text-start mt-2 mb-1">
                          Successful Payments:
                        </p>

                        <div className="payment-box ">
                          <p className="payment-para mb-1">$1,999</p>

                          <div className="check">
                            <img src="check.svg" alt="check" />
                          </div>
                        </div>

                        <div className="payment-box">
                          <p className="payment-para mb-1">$1,000</p>

                          <div className="check ">
                            <img src="check.svg" alt="check" />
                          </div>
                        </div>

                        <div className="payment-box">
                          <p className="payment-para mb-1">$5,000</p>
                          <div className="check">
                            <img src="check.svg" alt="check" />
                          </div>
                        </div>

                        <div className="payment-box">
                          <p className="payment-para mb-1">$2,000</p>

                          <div className="check">
                            <img src="check.svg" alt="check" />
                          </div>
                        </div>

                        <div className="payment-box">
                          <p className="payment-para mb-1">$1,000</p>

                          <div className="check ">
                            <img src="check.svg" alt="check" />
                          </div>
                        </div>

                        <div className="payment-box">
                          <p className="payment-para mb-1">$2,000</p>

                          <div className="check  ">
                            <img src="check.svg" alt="check" />
                          </div>
                        </div>

                        <div className="payment-box">
                          <p className="payment-para mb-1">$2,000</p>

                          <div className="check">
                            <img src="check.svg" alt="check" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
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
                          <span className="black fw-bold">Chase&nbsp;Bank</span>
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
                <img src="card-back.jpeg" className="img-fluid" alt="updates" />
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
    </>
  );
};

export default AdminPage;
