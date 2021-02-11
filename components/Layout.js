import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "../styles/Layout.module.scss";

export const Layout = (props) => {
    const title = "Welcome to Nextjs";
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <script src="https://js.stripe.com/v3" />
            </Head>
            <div className={styles.navbar}>
                <Link href="/">
                    <a className={styles.title}>Home</a>
                </Link>
                <div className={styles.navItems}>
                    <Link href="/login">
                        <a>Sign In</a>
                    </Link>
                    <Link href="/register">
                        <a>Sign Up</a>
                    </Link>
                </div>
            </div>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};
