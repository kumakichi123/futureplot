import Link from "next/link";
import styles from "./page.module.css";
import { latestArticles } from "./media/data";

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <p>Future Plot</p>
        <h1>未来を読む、会社のメディア。</h1>
        <Link href="/media" className={styles.primary}>
          メディアを見る
        </Link>
      </header>

      <section className={styles.section}>
        <h2>新着3本</h2>
        <div className={styles.list}>
          {latestArticles.slice(0, 3).map((article) => (
            <Link href={`/media/${article.slug}`} key={article.slug} className={styles.item}>
              <h3>{article.title}</h3>
              <p>{article.publishedAt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
