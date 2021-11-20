import Head from "next/head";

// Images
import Image from "next/image";
import GovernmentSeal from "../public/DefaultImages/Code-of-Arms-colour.png";

import styles from "../styles/Home.module.css";

export default function Home() {
  const buttons = [
    { link: "", text: "Department of Civil and National Registration" },
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
        <div className={styles.grid}>
          {buttons.map((button) => {
            return (
              <a href="" className={styles.card}>
                <div>
                  <Image src={GovernmentSeal} alt="Logo Government seal" />
                  <p>{button.text}</p>
                </div>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}
