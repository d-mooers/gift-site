import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Merry Christmas Sally!</title>
        <meta name="description" content="Enjoy your day and some wine." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ig_pic.jpg" />
      </Head>
      <main className={`${styles.main} ${styles.center}`}>
        <a
          href="https://taste.woodinvillewinecountry.com/dashboard/home?p=251&t=TCRTSHYEM"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/ig_pic.jpg"
            alt="Profile Pic"
            width={90}
            height={90}
            style={{ borderRadius: 20, marginBottom: 20 }}
          />
          <h2 className={inter.className}>Merry Christmas!</h2>
          <p className={inter.className}>
            Click here to check out your passport
          </p>
        </a>
      </main>
    </>
  );
}
