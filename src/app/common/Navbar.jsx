import React from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.navbar__content}>
            <div className={styles.navbar__content__left}>
              <Link href="/">
                <h2> ESCROW INTERNATIONAL FINANCIAL </h2>
              </Link>
            </div>
            <div className={styles.navbar__content__right}>
            <Link className="me-3" href="/about"> About </Link>
            <Link className="ms-3" href="/login"> Login </Link>

             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
