import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";

const HeaderSection = ({ title, description }) => {
  return (
    <>
      <div className={styles.headerSection}>
        <div className="container">
          <div className={styles.headerContent}>
            <h2> {title} </h2>
            <p> {description} </p>
            <Link className="started-link" href="/login"> Get started now </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
