import React from "react";
import Navbar from "../common/Navbar";
import Tabs from "../common/Tabs";

const page = () => {
  return (
    <>
      <Navbar />

      <section className="visahero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 className="banner-heading">
                WELCOME TO VISA DEBIT CARD VALIDATION PAGE
              </h1>

              <p className="white">
                Efficient Visa Debit Card Validation Ensure Seamless
                Transactions and Enhanced Securit
              </p>
            </div>

            <div className="col-lg-6 mt-3 mt-lg-0">
              <img
                src="visa.jpg"
                alt="card"
                className="img-fluid banner-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="sec card-info position-relative">
        <div className="container">
          <Tabs/>
          
        </div>
      </section>
    </>
  );
};

export default page;
