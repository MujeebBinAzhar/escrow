"use client";

import React, { useState } from "react";
import TransTimer from "./TransTimer";
import { Navbar } from "react-bootstrap";

const PortalPage = () => {
  const [transId, setTransId] = useState("");

  const [nat, setNat] = useState(false);
  const [chase, setChase] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (transId.trim() === "") {
      alert("Please Enter Transaction ID");
      return;
    }

    // CHASE942453
    if (transId === "CHASE942453") {
      setChase(true);
    } else if (transId === "NATWEST893453") {
      setNat(true);
    } else if (transId === "PAYPAL830938") {
      alert(
        "Paypal needs thumb print verification\nupload thumb print verification\nTo complete transaction process"
      );
    } else {
      alert("Transaction ID Not Found\nPlease Enter A Valid Transaction ID");
    }
  };
  return (
    <>
      {chase && (
        <div className="trans-modal">
          <div className="trans-modal-inner">
            <div className="close">
              <h4>Transaction Information</h4>
              <img
                src="/close.svg"
                className="cursor-pointer"
                onClick={() => setChase(false)}
                alt=""
              />
            </div>

            <div className="trans-content p-3">
              <div
                className="top-card
              "
              >
                <div>
                  <p>
                    Beneficiary First Name: <span>Lewis</span>{" "}
                  </p>
                  <p>
                    Beneficiary Last Name: <span>Clark</span>{" "}
                  </p>
                </div>

                <div className="user-img">
                  <img src="/user.png" className="img-fluid" alt="" />
                </div>
              </div>

              <p>
                Country Of Origin: <span>United States Of America</span>{" "}
              </p>
              <p>
                Expected Amount: <span>$300,000 USD</span>
              </p>
              <p>
                Date of Transfer: <span>September 14th, 2024</span>
              </p>

              <p>
                Senders Of Funds:{" "}
                <span>Escrow International Accounts ( NEST BANK POLSKA)</span>
              </p>

              <div className="d-flex align-items-center my-4">
                <p className="m-0 me-3">Beneficiary Bank: </p>

                <div className="bank-img">
                  <img
                    src="/chase.jpeg"
                    className="img-fluid border-radius"
                    alt=""
                  />
                </div>
              </div>

              <div className="d-flex align-items-center">
                <p
                  className="mb-0 me-3 "
                  style={{
                    minWidth: "150px",
                  }}
                >
                  Transaction Signal:{" "}
                </p>
                <div className="progresss-bar">
                  <div className="progresss-bar-inner">
                    <span>45%</span>
                  </div>
                </div>
              </div>

              <div className="timer">
                <TransTimer />
              </div>
            </div>
          </div>
        </div>
      )}

      {nat && (
        <div className="trans-modal">
          <div className="trans-modal-inner">
            <div className="close">
              <h4>Transaction Information</h4>
              <img
                src="/close.svg"
                className="cursor-pointer"
                onClick={() => setNat(false)}
                alt=""
              />
            </div>

            <div className="trans-content p-3">
              <div
                className="top-card
             "
              >
                <div>
                  <p>
                    Beneficiary First Name: <span>Lewis</span>{" "}
                  </p>
                  <p>
                    Beneficiary Last Name: <span>Clark</span>{" "}
                  </p>
                </div>

                <div className="user-img">
                  <img src="/user.png" className="img-fluid" alt="" />
                </div>
              </div>

              <p>
                Country Of Origin: <span>United States Of America</span>{" "}
              </p>
              <p>
                Expected Amount: <span>$300,000 USD</span>
              </p>
              <p>
                Date of Transfer: <span>September 14th, 2024</span>
              </p>

              <p>
                Senders Of Funds:{" "}
                <span>Escrow International Accounts ( NEST BANK POLSKA)</span>
              </p>

              <div className="d-flex align-items-center my-4">
                <p className="m-0 me-3">Beneficiary Bank: </p>

                <div className="bank-img">
                  <img
                    src="/nat.jpeg"
                    className="img-fluid border-radius"
                    alt=""
                  />
                </div>
              </div>

              <div className="d-flex align-items-center">
                <p
                  className="mb-0 me-3 "
                  style={{
                    minWidth: "150px",
                  }}
                >
                  Transaction Signal:{" "}
                </p>
                <div className="progresss-bar">
                  <div className="progresss-bar-inner">
                    <span>45%</span>
                  </div>
                </div>
              </div>

              <div className="timer">
                <TransTimer />
              </div>
            </div>
          </div>
        </div>
      )}

      <Navbar />

      <div className="portal-banner">
        <div className="container">
          <h1 className="banner-heading-two">
            Welcome To Transaction <span>Tracking Portal</span>
          </h1>
        </div>
      </div>

      <section className="sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>CHECK YOU TRANSACTION DETAILS</h1>

              <form onSubmit={submitForm}>
                <div className="field-container mt-5">
                  <label htmlFor="transid">Please Enter Transaction ID</label>
                  <input
                    type="text"
                    name="transid"
                    id="transid"
                    value={transId}
                    onChange={(e) => setTransId(e.target.value)}
                  />
                </div>

                <div className="field-container">
                  <button className="check-btn">Check</button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <img
                src="/tracking.png"
                className="img-fluid border-radius shadow"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortalPage;
