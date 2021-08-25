import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Head>
        <title>Hulu 2.0</title>
      </Head>
      <h1 className="text-blue-900 text-3xl text-center">This is Home Page</h1>
    </>
  );
}
