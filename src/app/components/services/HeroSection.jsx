import React from "react";
import HeaderSection from "@/app/common/HeaderSection";
import styles from "./heroSection.module.scss";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <HeaderSection
        title="Our services"
        description="Confidently buy and sell goods and services online."
      />
      <div className={styles.container}>
        <div className={styles.navList}>
          <ul>
            <li>
              <a className={styles.link} href="/what-is-escrow">
                ESCROW 101
              </a>
            </li>
            <li>
              <a className={styles.link} href="/helpdesk">
                HELP CENTER
              </a>
            </li>
            <li>
              <a className={styles.link} href="/partners">
                PARTNERS
              </a>
            </li>
            <li>
              <a className={styles.link} href="/news">
                IN THE NEWS
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* -------------------buy sell products------------------------ */}
      <div className={styles.container}>
        <h1>
          Safely buy and sell products and services from $100 to $100 million or
          more
        </h1>
        <div className="row mt-5 mb-5">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img src="/domain-names.svg" alt="" />
            <h3> Domain Names </h3>
            <p>
              Escrow.com is the dominant payment method for the buying & selling
              of domain names, with transactions including uber.com,
              snapchat.com, spacex.com, twitter.com, instagram.com,
              freelancer.com, gmail.com, slack.com, wechat.com, chrome.com and
              wordpress.com.
            </p>
            <a href="#"> LEARN MORE </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
            <img src="/motor-vehicles.svg" alt="" />
            <h3> Motor Vehicles </h3>
            <p>
              When buying classic cars, a used sailboat or even an aircraft
              engine Escrow.com ensures money transfer and vehicle delivery with
              every sale. Our experienced personnel can even help you with
              shipping documentation, titles, liens and more.
            </p>
            <a href="#"> LEARN MORE </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
            <img src="/electronics.svg" alt="" />
            <h3> Electronics </h3>
            <p>
              Escrow.com handles the buying and selling large scale computer
              setups, professional sound systems and all manner of electronic
              equipment both big and small.
            </p>
            <a href="#"> LEARN MORE </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
            <img src="/general-merchandize.svg" alt="" />
            <h3> General Merchandise </h3>
            <p>
              From computer hardware to luxury goods, you can safely and easily
              buy and sell merchandise all over the world with the protection of
              Escrow.com.
            </p>
            <a href="#"> LEARN MORE </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
            <img src="/milestone-transactions.svg" alt="" />
            <h3> Milestone Transactions </h3>
            <p>
              Paying for a good or service and want money released only at
              certain stages? Use Escrow to assure that money is released only
              when you&apos;re happy with each step.
            </p>
            <a href="#"> LEARN MORE </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-4">
            <img src="/jewelry.svg" alt="" />
            <h3> Jewelry, Watches, and Fashion </h3>
            <p>
              Buying and selling expensive jewelry online can be difficult, as
              it is extremely difficult to spot a scam. Escrow.com&apos;s simple
              5-step process ensures money transfer and jewelry delivery with
              every sale.
            </p>
            <a href="#"> LEARN MORE </a>
          </div>
          <div className="col-md-12 mt-5">
            <p className={styles.contactPara}>
              Contact our friendly support team on
              <a href="">+1-415-801-2270</a>
              to find out if your transaction can be covered.
            </p>
          </div>
          <div className="col-md-12 text-center mt-5">
           <Link className="started-like" href="/login"> Get started now </Link>
            <a href="" className={styles.try_out}>
              TRY OUT FREE CALCULATOR
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className={styles.container}>
        <div className="row py-5 d-flex align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h2 className={styles.getStartedHeading}>
              {" "}
              Ready to get started?{" "}
            </h2>
            <p className={styles.getStartedPara}>
              Not sure if your transaction can be covered? Call our friendly
              support team on <a href="">+1-415-801-2270</a> to find out
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-end">
           <Link className="started-like" href="/login"> Get started now </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
