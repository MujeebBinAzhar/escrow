"use client";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("");
  const [balance, setBalance] = useState("");
  const [region, setRegion] = useState("");

  const [showRegion, setShowRegion] = useState(false);

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };

  const checkBalance = () => {
    if (balance === "") alert("Please input a valid card number");
    else if (balance.length !== 16) alert("Please input a valid card number");
    else if (balance === "4531582493421042") {
      if (activeTab === "balance") alert("Lewis Clark balance  $100,000,000");
      if (activeTab === "activation") alert("Visa Card Activated");
      if (activeTab === "pin") alert("Pin code Activated");
    } else alert("Card Number is invalid");
  };

  const checkRegion = () => {
    if (region === "") {
      alert("Please input a valid card number");
      setShowRegion(false);
    } else if (region.length !== 16) {
      alert("Please input a valid card number");
      setShowRegion(false);
    } else if (region === "4531582493421042") {
      setShowRegion(true);
    } else {
      alert("Card Number is invalid");
      setShowRegion(false);
    }
  };

  return (
    <div className="row">
      <div className="col-11 mx-auto">
        <div className="row">
          <div className="col-lg-4">
            <div className="side-btns">
              <button
                className={activeTab === "balance" ? "active" : ""}
                onClick={() => handleButtonClick("balance")}
              >
                Check visa debit card balance
              </button>
              <button
                className={activeTab === "activation" ? "active" : ""}
                onClick={() => handleButtonClick("activation")}
              >
                Check visa debit card Activation status
              </button>
              <button
                className={activeTab === "pin" ? "active" : ""}
                onClick={() => handleButtonClick("pin")}
              >
                Check visa debit card pin code status
              </button>
              <button
                className={activeTab === "usage" ? "active" : ""}
                onClick={() => handleButtonClick("usage")}
              >
                Check Visa Debit card usage location
              </button>
            </div>
          </div>

          <div className="col-lg-8 mt-3 mt-lg-0">
            {activeTab === "balance" && (
              <div className="visa-card">
                <div className="input">
                  <input
                    type="text"
                    name="balance"
                    value={balance}
                    placeholder="Input Your Card Number"
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </div>

                <button onClick={checkBalance}>Check</button>
              </div>
            )}
            {activeTab === "activation" && (
              <div className="visa-card">
                <div className="input">
                  <input
                    type="text"
                    name="balance"
                    value={balance}
                    placeholder="Input Your Card Number"
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </div>

                <button onClick={checkBalance}>Check</button>
              </div>
            )}
            {activeTab === "pin" && (
              <div className="visa-card">
                <div className="input">
                  <input
                    type="text"
                    name="balance"
                    value={balance}
                    placeholder="Input Your Card Number"
                    onChange={(e) => setBalance(e.target.value)}
                  />
                </div>

                <button onClick={checkBalance}>Check</button>
              </div>
            )}
            {activeTab === "usage" && (
              <div className="visa-card">
                <div className="input">
                  <input
                    type="text"
                    name="region"
                    value={region}
                    placeholder="Input Your Card Number"
                    onChange={(e) => setRegion(e.target.value)}
                  />
                </div>

                <button onClick={checkRegion}>Check</button>
              </div>
            )}

            {showRegion && (
              <div className="region">
                <h4>Visa Debit Card Usage Locations</h4>
                <ul>
                  <li>ASIA </li>
                  <li>AFRICA</li>
                  <li>EUROPE </li>
                  <li>AUSTRALIA</li>
                </ul>
              </div>
            )}

            <img
              src="world-card.jpg"
              alt="credit-card"
              className="img-fluid border-radius"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
