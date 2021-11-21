import React, { useState } from "react";
import Link from "next/link";
// Styles
import styles from "../styles/Info.module.css";

// Images
import Image from "next/image";
import YouTubeImage from "../public/DefaultImages/modern-red-video-media-player-template_1017-23409.jpg";

const informationMarriage = () => {
  const [columns, setColumns] = useState(false);

  const buttons = [
    {
      link: "departmentCNR",
      text: "Department of Civil and National Registration",
    },
    { link: "", text: "Department of Immigration and Citizenship" },
    { link: "", text: "Department of Gender Affairs" },
  ];

  const column = "column";
  const left = "left";
  const right = "right";

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.row}>
          <div className={`${styles.column} ${styles.left}`}>
            <h1>Hello Bakang, Ready to Register a Marriage </h1>
            <p>
              Watch the help video playlist to the left for the different
              details and process involved in Registering a marriage in Botswana
              or Skip if you want
            </p>
            <Link href="/marriageRegistrationStepOne">
              <a href="/" className={styles.skipButton}>
                Skip
              </a>
            </Link>
          </div>
          <div className={`${styles.column} ${styles.center}`}></div>
          <div className={`${styles.column} ${styles.right}`}>
            <div className={`${styles.grid} ${styles.videos}`}>
              {buttons.map((button) => {
                return (
                  <Link href={button.link} key={button.link}>
                    <a href="/" className={styles.card}>
                      <div>
                        <Image
                          src={YouTubeImage}
                          alt="Logo Government seal"
                          height={400}
                          width={600}
                          align="center"
                        />
                        <h4 style={{ width: 90 % +"em" }} align="left">
                          How to abc in the marriage process
                        </h4>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default informationMarriage;
