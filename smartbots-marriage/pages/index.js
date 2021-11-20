import Head from "next/head";
import Link from "next/link";
// Images
import Image from "next/image";
import GovernmentSeal from "../public/DefaultImages/Code-of-Arms-colour.png";

import styles from "../styles/Home.module.css";

export default function Home() {
  const buttons = [
    {
      link: "departmentCNR",
      text: "Department of Civil and National Registration",
    },
    { link: "", text: "Department of Immigration and Citizenship" },
    { link: "", text: "Department of Gender Affairs" },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="OneGov" content="OneGove Marriage Registration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className="largeHeading">
          Ministry of Nationality, Immigration and Gender Affairs
        </h2>
        <div className={styles.grid}>
          {buttons.map((button) => {
            return (
              <Link href={button.link}>
                <a href="" className={styles.card}>
                  <div>
                    <Image src={GovernmentSeal} alt="Logo Government seal" />
                    <h5 align="center">{button.text}</h5>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
        <h2 className="largeHeading">
          Ministry of Employment, Labour Productivity and Skills Development
        </h2>
      </main>
    </div>
  );
}
