"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.css";
import { categoryLabels, latestArticles, type CategoryKey } from "./data";

const categoryOrder: CategoryKey[] = ["ai-society", "singularity", "business"];

export function MediaHome() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("ai-society");

  const categoryArticles = useMemo(
    () => latestArticles.filter((article) => article.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.kicker}>Future Plot Media</p>
        <h1>未来を、経営判断に使える解像度で読む。</h1>
        <p>
          AI機能は載せない。いま必要な論点を、トピック・新着・カテゴリ別で最短把握できる構成。
        </p>
      </header>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>トピック</h2>
          <span>編集部注目</span>
        </div>
        <div className={styles.topicGrid}>
          {latestArticles.slice(0, 2).map((article) => (
            <Link href={`/media/${article.slug}`} key={article.slug} className={styles.topicCard}>
              <p>{categoryLabels[article.category]}</p>
              <h3>{article.title}</h3>
              <span>{article.readTime}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>新着記事</h2>
          <span>Latest</span>
        </div>
        <div className={styles.cards}>
          {latestArticles.map((article) => (
            <Link href={`/media/${article.slug}`} key={article.slug} className={styles.card}>
              <p className={styles.meta}>
                {categoryLabels[article.category]} ・ {article.publishedAt}
              </p>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span>{article.readTime}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <h2>カテゴリ別</h2>
          <span>Tabs</span>
        </div>
        <div className={styles.tabs} role="tablist" aria-label="カテゴリ選択">
          {categoryOrder.map((category) => (
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={activeCategory === category ? styles.activeTab : styles.tab}
              key={category}
              onClick={() => setActiveCategory(category)}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        <div className={styles.cards}>
          {categoryArticles.map((article) => (
            <Link href={`/media/${article.slug}`} key={article.slug} className={styles.card}>
              <p className={styles.meta}>{article.publishedAt}</p>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <span>{article.readTime}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
