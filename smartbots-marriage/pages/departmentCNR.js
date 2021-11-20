import React from "react";
import Link from "next/link";

// Styles
import styles from "../styles/Home.module.css";

// Images
import Image from "next/image";
import GovernmentSeal from "../public/DefaultImages/Code-of-Arms-colour.png";
import IDPicture from "../public/DefaultImages/unnamed.png";
import WeddingPicture from "../public/DefaultImages/married-couple-clipart-marriage-clipart-11564134264gpjynvso8v.png";
import BabyPicture from "../public/DefaultImages/images.png";
import DeathPicture from "../public/DefaultImages/61-613144_death-clipart-grave-marker-no-matter-how-big.png";

const departmentCNR = () => {
  const buttons = [
    {
      link: "IDPicture",
      text: "Apply for Omang/ID",
      image: IDPicture,
    },
    { link: "", text: "Register of Birth", image: BabyPicture },
    { link: "", text: "Register Death", image: DeathPicture },
    {
      link: "IDPicture",
      text: "Change of Name",
      image: IDPicture,
    },
    { link: "", text: "Marriage Registration", image: WeddingPicture },
    {
      link: "",
      text: "Marriage Person Property Regime",
      image: WeddingPicture,
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className="largeHeading">
          Department of Civil and National Registration
        </h2>
        <div className={styles.grid}>
          {buttons.map((button) => {
            return (
              <Link href={button.link}>
                <a href="" className={styles.card}>
                  <div>
                    <h4 style={{ width: 90 % +"em" }} align="center">
                      {button.text}
                    </h4>
                    <Image
                      src={button.image}
                      alt="Logo Government seal"
                      height={150}
                      width={150}
                      align="center"
                    />
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default departmentCNR;
