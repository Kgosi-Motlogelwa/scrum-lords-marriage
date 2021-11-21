import React from "react";
import Link from "next/link";
// Images
import Image from "next/image";
import GovernmentSeal from "../public/DefaultImages/Code-of-Arms-colour.png";

import styles from "../styles/Home.module.css";
const marriageRegistrationStepOne = () => {
  const buttons = [
    {
      link: "/marriageRegistrationStepTwo",
      text: "After Banns",
    },
    { link: "", text: "Special License" },
    { link: "", text: "Solem- isation" },
  ];
  return (
    <main className={styles.main}>
      <h2 className="largeHeading">Marriage Registration: Step One</h2>
      <div className={styles.grid}>
        {buttons.map((button) => {
          return (
            <Link href={button.link}>
              <a href="/" className={styles.card}>
                <div className={styles.labelHeading}>
                  <h1 align="center">{button.text}</h1>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default marriageRegistrationStepOne;
