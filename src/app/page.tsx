import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <span className={styles.card}>
          <Link href="/people/">
            <h2 className={inter.className}>
              People <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {/* Find in-depth information about Next.js features and API. */}
            </p>
          </Link>
        </span>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Teams <span>-&gt;</span>
          </h2>
          {/* <p className={inter.className}>Explore the Next.js 13 playground.</p> */}
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Leagues <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            {/* Instantly deploy your Next.js site to a shareable URL with Vercel. */}
          </p>
        </a>
      </div>
    </main>
  );
}
