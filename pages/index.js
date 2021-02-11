import Head from "next/head";
import styles from "../styles/Home.module.scss";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.alert}>Welcome to the Homepage!</div>
        </div>
    );
}
