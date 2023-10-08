import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import "../styles/global.css";
import styles from "../styles/page.module.css";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main_container}> 
        <NavBar />
        <Component key={router.asPath} {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
