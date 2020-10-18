import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

export const title = "The Manurepo";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Collection of cheatsheets, snippets and utils"
        />
        <meta name="og:title" content={title} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/repo.svg"
              className={`${styles.headerHomeImage}`}
              alt={title}
            />
            <h1 className={utilStyles.heading2Xl}>{title}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <>
                <a>
                  <img
                    src="/images/repo.svg"
                    className={`${styles.headerImage}`}
                    alt={title}
                  />
                </a>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{title}</a>
                  </Link>
                </h2>
              </>
            </Link>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
