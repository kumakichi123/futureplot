import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { articles, categoryLabels } from "../data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className={styles.page}>
      <Link href="/media" className={styles.back}>
        ← メディア一覧へ戻る
      </Link>
      <header className={styles.header}>
        <p>
          {categoryLabels[article.category]} ・ {article.publishedAt} ・ {article.readTime}
        </p>
        <h1>{article.title}</h1>
        <p>{article.excerpt}</p>
      </header>

      <section className={styles.body}>
        <h2>要点</h2>
        <p>
          本文はCMS接続前のプレースホルダーです。公開時はこの領域に、見出し階層と図表を含む本文を差し込みます。
          白背景をベースに行間を広くとり、読み切れる体験を優先します。
        </p>
        <h2>なぜ今重要か</h2>
        <p>
          技術の進歩そのものではなく、社会実装と制度設計のズレがビジネスや公共領域に与える影響を扱うのが
          Future Plotの基本方針です。
        </p>
      </section>
    </article>
  );
}
