import React from "react";
import styles from "../common/footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.footer__content}>
            <div className={styles.footer__content__left}>
              <h2> ESCROW INTERNATIONAL FINANCIAL </h2>
              <p className={styles.desc}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here.
              </p>
            </div>
            <div className={styles.footer__content__right}>
              <p style={{ fontWeight: "600" }}>
                Email:{" "}
                <span style={{ fontWeight: "400" }}>
                  funds@escrowinternationals.com
                </span>
              </p>
              <label> Your Email </label>
              <input type="text" placeholder="Email " />
              <button> Submit </button>
            </div>
          </div>
          <hr />
          <p className={styles.copyright}>
            Copyright © 1999-2024 Escrow.com, Inc. All rights reserved
          </p>
          <p className={styles.copyright}>A company of Freelancer Limited</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
