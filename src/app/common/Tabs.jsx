"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";

import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("");
  const [balance, setBalance] = useState("");
  const [region, setRegion] = useState("");
  const [pin, setPin] = useState("");
  const [showRegion, setShowRegion] = useState(false);
  const [cardToPay, setCardToPay] = useState(false);
  const [cardToPayData, setCardToPayData] = useState({
    name: "",
    card: "",
    paypall: "",
    amount: "",
  });

  const [cardToBank, setCardToBank] = useState(false);

  const [cardToBankData, setCardToBankData] = useState({
    cardnumber: "",
    cardcvv: "",
    cardpin: "",

    firstname: "",
    lastname: "",
    accnumber: "",
    amount: "",
    sortcode: "",
    swiftcode: "",
    bankname: "",
    country: "",
  });

  const cardToPayChange = (e) => {
    setCardToPayData({
      ...cardToPayData,
      [e.target.name]: e.target.value,
    });
  };

  const cardToPaySubmit = () => {
    if (
      cardToPayData.name === "" ||
      cardToPayData.card === "" ||
      cardToPayData.paypall === "" ||
      cardToPayData.amount === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (cardToPayData.amount < 10) {
      alert("Minimum amount to send is $10");
      return;
    }

    if (cardToPayData.card.length !== 16) {
      alert("Please input a valid card number");
      return;
    }

    if (cardToPayData.card === "4531582493421042") {
      setCardToPay(false);
      alert("Transaction successful");

      setCardToPayData({
        name: "",
        card: "",
        paypall: "",
        amount: "",
      });
      upGradeLimit();
      return;
    }
  };

  const invalidPin = () => {
    Swal.fire({
      icon: "question",
      color: "#FC0000",

      html: '<p htmlFor="idd" className="fs-6" >Invalid Transaction</p>  ',
    });
  };

  const handleCardToBank = async () => {
    try {
      // First popup for the 4-digit ATM card PIN
      const pinResult = await MySwal.fire({
        icon: "question",
        color: "#FC0000",
        html: '<p for="idd" className="fs-6">Enter 4 Digit ATM card pin to complete Transfer</p><input className="mt-4 w-100 custom-field" id="idd" name="idd" type="number" />',
        preConfirm: () => {
          const pin = Swal.getPopup().querySelector("#idd").value;
          if (!pin) {
            Swal.showValidationMessage("Please enter the 4-digit ATM card PIN");
            return false;
          } else if (!/^\d{4}$/.test(pin)) {
            Swal.showValidationMessage("PIN must be exactly 4 digits");
            return false;
          } else if (pin !== "9911") {
            Swal.showValidationMessage("Invalid PIN");
            return false;
          }
          return pin;
        },
      });

      if (pinResult.isConfirmed) {
        const enteredPin = pinResult.value;
        if (enteredPin === "9911") {
          // Second popup for the 9-digit approval code
          const approvalCodeResult = await MySwal.fire({
            icon: "info",
            title: "Approval Code",
            html: '<p for="approvalCode" className="fs-6">Enter 9 Digit Approval Code to international bank (Natwest Bank England)</p><input className="mt-4 w-100 custom-field" id="approvalCode" name="approvalCode" type="number" />',
            preConfirm: () => {
              const approvalCode =
                Swal.getPopup().querySelector("#approvalCode").value;
              if (!approvalCode) {
                Swal.showValidationMessage(
                  "Please enter the 9-digit approval code"
                );
                return false;
              } else if (!/^\d{9}$/.test(approvalCode)) {
                Swal.showValidationMessage(
                  "Approval code must be exactly 9 digits"
                );
                return false;
              } else if (approvalCode !== "839423432") {
                Swal.showValidationMessage("Invalid approval code");
                return false;
              }
              return approvalCode;
            },
          });

          if (approvalCodeResult.isConfirmed) {
            const enteredApprovalCode = approvalCodeResult.value;
            if (enteredApprovalCode === "839423432") {
              MySwal.fire({
                icon: "success",
             
              
             
                html: "<p style='color:green' ><b>SUCCESS</b></p><p  ><b>TRANSACTION PENDING</b></p> <p style='color:red'>Error - 232</p><p style='color:red'>FOR A SUCCESSFUL TRANSACTION,WITHDRAW A MINIMUM OF $1,000 FROM THE ATM CARD AT THE ATM LOCATION IN  BOSTON</p>",
              });
            } else {
              console.log("Entered Approval Code:", enteredApprovalCode);
            }
          }
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

 

  const cardToBankSubmit = () => {
    if (
      cardToBankData.cardnumber === "" ||
      cardToBankData.cardcvv === "" ||
      cardToBankData.firstname === "" ||
      cardToBankData.accnumber === "" ||
      cardToBankData.amount === "" ||
      cardToBankData.swiftcode === "" ||
      cardToBankData.bankname === "" ||
      cardToBankData.country === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (cardToBankData.cardnumber.length !== 16) {
      alert("Please input a valid card number");
      return;
    }
    // amount check
    if (cardToBankData.amount < 100000) {
      alert("Minimum amount to send is $100,000");
      return;
    }

    if (cardToBankData.cardnumber === "4531582493421042") {
      // alert("Transaction successful");

      setCardToBankData({
        cardnumber: "",
        cardcvv: "",
        cardpin: "",
        firstname: "",
        accnumber: "",
        amount: "",
        swiftcode: "",
        bankname: "",
        country: "",
      });
      setCardToBank(false);

      handleCardToBank();
      return;
    }
  };

  const handleWestern = () => {
    Swal.fire({
      icon: "question",
      color: "#FC0000",

      html: "<strong  >Upgrade Debit card to send up to $15,000 daily</strong>",
    });
  };

  const upGradeLimit = () => {
    Swal.fire({
      icon: "question",

      html: "<strong >Upgrade Debit card to send up to $20,000 daily</strong>",
    });
  };

  const handleButtonClick = (tabName) => {
    setActiveTab(tabName);
  };

  const checkBalance = () => {
    setShowRegion(false);
    if (balance === "") alert("Please input a valid card number");
    else if (balance.length !== 16) alert("Please input a valid card number");
    else if (balance === "4531582493421042") {
      if (activeTab === "balance") alert("Balance  $910,000,000");
      if (activeTab === "activation") alert("Visa Card Activated");
      if (activeTab === "pin") alert("Pin code Activated");
    } else if (balance === "5444765497644646")
      alert(
        "Gold card Master card\nEnding with card  ***646\nLewis F Clark\nCard balance  $10,000,000\nCard Status : Activated"
      );
    else alert("Card Number is invalid");
  };

  const checkPin = () => {
    setShowRegion(false);
    if (pin === "") {
      alert("Please input a valid Pin");
    } else if (pin.length !== 4) {
      alert("Please input a 4 digit valid Pin");
    } else if (pin === "5391") {
      alert("Lewis clark \nAtm pin activated\nComplete  $1,000 signature payments\nFor pin to process money withdrawal at Atm machine");
    } else {
      alert("Pin is invalid");
    }
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

  const cardToBankChange = (e) => {
    setCardToBankData({
      ...cardToBankData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {cardToPay && (
        <div className="card-model">
          <div className="model-inner">
            <div className="text-end">
              <img
                src="plus.svg"
                className="cross"
                onClick={() => setCardToPay(false)}
                alt=""
              />
            </div>

            <div className="cardpay-form">
              <div className="field-container">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="custom-field"
                  name="name"
                  value={cardToPayData.name}
                  onChange={cardToPayChange}
                />
              </div>

              <div className="field-container">
                <label htmlFor="card">Enter 16 Digit of your Visa Card</label>
                <input
                  type="text"
                  id="card"
                  className="custom-field"
                  name="card"
                  value={cardToPayData.card}
                  onChange={cardToPayChange}
                />
              </div>

              <div className="field-container">
                <label htmlFor="paypall">Beneficiary PayPal ID</label>
                <input
                  type="text"
                  id="paypall"
                  className="custom-field"
                  name="paypall"
                  value={cardToPayData.paypall}
                  onChange={cardToPayChange}
                />
              </div>

              <div className="field-container">
                <label htmlFor="amount">Amount to send</label>
                <input
                  type="number"
                  id="amount"
                  className="custom-field"
                  placeholder="Min $10"
                  name="amount"
                  value={cardToPayData.amount}
                  onChange={cardToPayChange}
                />
              </div>

              <div className="side-btns p-0 mt-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={cardToPaySubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {cardToBank && (
        <div className="card-model">
          <div className="model-inner">
            <h5>The cost of Transfer have been paid by escrow international</h5>
            <hr />
            <div className="text-end">
              <img
                src="plus.svg"
                className="cross"
                onClick={() => setCardToBank(false)}
                alt=""
              />
            </div>

            <div className="cardpay-form">
              <div className="field-container">
                <input
                  type="text"
                  id="cardnumber"
                  className="custom-field"
                  name="cardnumber"
                  value={cardToBankData.cardnumber}
                  onChange={cardToBankChange}
                  placeholder="Visa Card Number"
                />
              </div>

              <div className="field-container">
                <input
                  type="number"
                  id="cardcvv"
                  name="cardcvv"
                  value={cardToBankData.cardcvv}
                  onChange={cardToBankChange}
                  className="custom-field"
                  placeholder="Visa Card CVV"
                />
              </div>

              <div className="field-container">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  value={cardToBankData.firstname}
                  onChange={cardToBankChange}
                  className="custom-field"
                  placeholder="Beneficiary  Name"
                />
              </div>

              <div className="field-container">
                <input
                  type="text"
                  id="accnumber"
                  className="custom-field"
                  name="accnumber"
                  placeholder="Beneficiary Account Number"
                  value={cardToBankData.accnumber}
                  onChange={cardToBankChange}
                />
              </div>

              <div className="field-container mb-0">
                <input
                  type="number"
                  id="amount"
                  className="custom-field"
                  placeholder="$"
                  name="amount"
                  value={cardToBankData.amount}
                  onChange={cardToBankChange}
                />
              </div>

              <p className="text-danger m-0 mb-2">
                Minimum daily withdrawal $300,000
              </p>

              <div className="field-container">
                <input
                  type="text"
                  id="sortcode"
                  name="sortcode"
                  
               
                  className="custom-field"
                  placeholder="Cryptocurrency Bitcoin  Wallet"
                />
              </div>

              <div className="field-container">
                <input
                  type="text"
                  id="swiftcode"
                  name="swiftcode"
                  value={cardToBankData.swiftcode}
                  onChange={cardToBankChange}
                  className="custom-field"
                  placeholder="Swift Code"
                />
              </div>

              <div className="field-container">
                <input
                  type="text"
                  id="bankname"
                  name="bankname"
                  value={cardToBankData.bankname}
                  onChange={cardToBankChange}
                  className="custom-field"
                  placeholder="Bank Name"
                />
              </div>

              <div className="field-container">
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={cardToBankData.country}
                  onChange={cardToBankChange}
                  className="custom-field"
                  placeholder="Country Name"
                />
              </div>

              <div className="side-btns p-0 mt-4">
                <button
                  className="btn btn-primary w-100"
                  onClick={cardToBankSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                {/* <button
                  className={activeTab === "usage" ? "active" : ""}
                  onClick={() => handleButtonClick("usage")}
                >
                  Check Visa Debit card usage location
                </button> */}

                <button
                  className={activeTab === "transfer" ? "active" : ""}
                  onClick={() => handleButtonClick("transfer")}
                >
                  Transfer Funds via Debit Card
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
                      placeholder="Input fr Card Number"
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
                      name="pin"
                      value={pin}
                      placeholder="Input your Pin"
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </div>

                  <button onClick={checkPin}>Check</button>
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

              {activeTab === "transfer" && (
                <div className="transer-card">
                  <button className="transfer-btn" onClick={invalidPin}>
                    <p className="m-0">Transfer Funds From Card To Paypal</p>
                    <div className="graphic">
                      <img src="card.svg" className="card-img" alt="arrow" />
                      <img src="arrow.svg" className="arrow" alt="arrow" />
                      <img src="paypall.svg" alt="paypal" />
                    </div>
                  </button>
                  <button
                    className="transfer-btn"
                    onClick={() => setCardToBank(true)}
                  >
                    <p className="m-0">Transfer Funds From Card To Bank And cryptocurrency Wallets</p>

                    <div className="graphic">
                      <img className="card-img" src="card.svg" alt="paypal" />
                      <img src="arrow.svg" className="arrow" alt="arrow" />
                      <img src="bank.svg" alt="arrow" />
                    </div>
                  </button>
                  <button className="transfer-btn" onClick={handleWestern}>
                    <p className="m-0">
                      Transfer Funds Via western union money Transfer
                    </p>

                    <div className="graphic">
                      <img
                        src="western.png"
                        className="western"
                        alt="western"
                      />
                    </div>
                  </button>
                </div>
              )}

              {showRegion && (
                <div className="region">
                  <h4>Visa Debit Card Usage Locations</h4>
                  <p className="usa">
                    {" "}
                    <span>Note:</span> Card is now available in the united
                    states of america pending fee $3,000 must be paid for card
                    to work at atm locations in the united states
                  </p>
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
    </>
  );
};

export default Tabs;
