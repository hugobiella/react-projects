import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Dashboard from "@/pages/dashboard";
import SideMenu from "@/components/sideMenu";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <SideMenu />
        <Dashboard />
      </main>
    </>
  );
}
