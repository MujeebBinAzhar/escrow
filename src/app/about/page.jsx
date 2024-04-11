import React from "react";
import styles from "./aboutSection.module.scss";
import HeaderSection from "@/app/common/HeaderSection";
// import Matt from "../../../../public/matt.jpg";
// import Neil from "../../../../public/neil.jpg";
// import Michael from "../../../../public/Michael_Best.png";
// import Behrokh from "../../../../public/Behrokh_Abbasnejad.png";
// import Kristian from "../../../../public/Kristian_Sisayan.jpg";

const HeroSectionAbout = () => {
  return (
    <>
      <HeaderSection
        title="About Us"
        description="We are not just an online escrow service, We are the online escrow service
"
      />

      <div className={styles.container}>
        <div className={`row my-5`}>
          <div className={`col-lg-8 col-md-8 col-sm-12 col-12 ${styles.left}`}>
            <p>
              We were the first company to create online escrow over a decade
              ago. We&apos;re leading the way in safe, reliable and trustworthy
              escrow services and will be for many years to come.
            </p>
            <h1>Escrow.com is:</h1>
            <ul>
              <li>
                Online escrow that is simple and safe for Buyers and Sellers
              </li>
              <li>Compliant with relevant state laws</li>
              <li>Armed with an in-depth knowledge of the escrow process</li>
              <li>The safest service to trust with your money</li>
            </ul>
            <p>
              Headquartered in San Francisco, California, Escrow.com and its
              operating subsidiaries provide online escrow services that
              facilitate and accelerate e-commerce by assuring a secure
              settlement.
            </p>
            <p>
              Escrow.com has pioneered the process of online escrow services.
              The Company, founded in 1999 by Fidelity National Financial, has
              established itself as one of the leading providers of secure
              business and consumer transaction management on the Internet.
              Escrow.com was purchased by Freelancer.com (ASX:FLN) in 2015.
            </p>
            <p>
              All escrow services offered on this website are provided
              independently and exclusively by Internet Escrow Services (SM)
              (IES), one of the operating subsidiaries of Escrow.com. IES is
              fully licensed and accredited as an escrow company and is subject
              to compliance with applicable escrow regulations, including the
              California Financial and Business Code.
            </p>
            <h1>Meet our leaders</h1>
            <p>
              Escrow.com’s management team is comprised of industry-leading
              professionals, all with extensive experience in their respective
              areas of expertise. Our management team is dedicated to executing
              the company vision and maintaining Escrow.com’s unique and
              productive work environment, while ensuring we deliver world class
              service to our marketplaces and customers.
            </p>

            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                <h3 className="mt-5"> MATT BARRIE </h3>
                <p>CEO and President</p>
                <img src="/matt.jpg" alt="" />
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <p style={{ marginTop: "100px" }}>
                  Matt Barrie is an award winning technology entrepreneur. Matt
                  was Adjunct Associate Professor at the Department of
                  Electrical and Information Engineering at the University of
                  Sydney where he taught Cryptography for fifteen years and,
                  later, Technology Venture Creation. He is the co-author of
                  over 20 US patent applications. Previously he founded and was
                  CEO of Sensory Networks Inc., a vendor of high performance
                  network security processors which sold to Intel Corporation
                  (NASDAQ:INTC).
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <h3 className="mt-5"> NEIL KATZ </h3>
                <p>Chief Financial Officer</p>
                <img src="neil.jpg" alt="" />
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <p style={{ marginTop: "100px" }}>
                  Neil Katz is the Chief Financial Officer at the Freelancer
                  Group and is responsible for the finance and administration
                  functions of the Company. Neil has over 20 years experience in
                  finance, accounting and general management. Neil has held CFO
                  roles at a number of technology companies, including IPscape,
                  Threatmetrix (acquired by NYSE:RELX), Sensory Networks
                  (acquired by NASDAQ:INTC) and Aptrix (acquired by NYSE:IBM).
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <h3 className="mt-5"> MICHAEL BEST </h3>
                <p>Director of BSA/AML Compliance</p>
                <img src="Michael_Best.png" alt="" />
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <p style={{ marginTop: "100px" }}>
                  Michael Best is the BSA/AML and Regulatory Compliance Officer
                  at Escrow.com, where he is responsible for overseeing and
                  maintaining the BSA/AML program and regulatory compliance
                  functions of the company. With more than 15 years of
                  experience in regulatory compliance, Michael has worked
                  extensively with large and small financial institutions
                  building BSA/AML, risk management, and compliance programs.
                  Michael holds a bachelor&apos;s degree in Political Science with a
                  focus on Economics from Purdue University, and he is both a
                  Certified Regulatory Compliance Manager (CRCM) and a Certified
                  Anti Money Laundering Specialist (CAMS).
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <h3 className="mt-5"> BEHROKH ABBASNEJAD </h3>
                <p>Product Manager</p>
                <img src="Behrokh_Abbasnejad.png" alt="" />
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <p style={{ marginTop: "100px" }}>
                  Behrokh is an accomplished Product Manager with a diverse
                  background, currently serving at Escrow.com. In this capacity,
                  she adeptly oversees product development engineering, account
                  management, and business operations, collaborating closely
                  with key stakeholders to ensure the seamless and timely
                  execution of goals across the organization. In addition to her
                  role at Escrow.com, Behrokh brings her expertise to
                  Freelancer.com, where she effectively serves as the Product
                  Manager for payments, showcasing her ability to handle
                  multiple responsibilities with finesse and efficiency. Before
                  joining the dynamic tech industry, her journey started in
                  academia. Holding a PhD in Biomedical/Mechanical engineering,
                  she previously contributed as a casual lecturer in esteemed
                  universities both in Iran and Australia, further emphasizing
                  her passion for knowledge-sharing and education.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <h3 className="mt-5"> KRISTIAN SISAYAN </h3>
                <p>Associate Product Manager</p>
                <img src="Kristian_Sisayan.jpg" alt="" />
              </div>
              <div className="col-lg-8 col-md-8 col-12">
                <p style={{ marginTop: "100px" }}>
                  Kristian Sisayan is the Associate Product Manager at
                  Escrow.com, where he is responsible for overseeing product
                  development, engineering, and business operations. He also
                  manages relationships with partners and key stakeholders, and
                  ensures timely and proper execution of goals across the
                  business. Kristian was previously a Software Engineer at
                  Escrow.com and holds a bachelor&apos;s degree in Computer Science
                  from De La Salle University in the Philippines.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
            <ul className={styles.rightList}>
              <li>What Is Escrow?</li>
              <li>Fee Calculator</li>
              <li>Escrow Accounts</li>
              <li>Services</li>
              <li>Help Center</li>
              <li>Partners</li>
              <li>Learn More</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionAbout;
