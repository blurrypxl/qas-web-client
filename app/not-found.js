import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>404 Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </main>
    </div>
  );
}
