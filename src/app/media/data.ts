export type CategoryKey = "ai-society" | "singularity" | "business";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: CategoryKey;
  topic: string;
};

export const categoryLabels: Record<CategoryKey, string> = {
  "ai-society": "AIと社会",
  singularity: "シンギュラリティ",
  business: "ビジネス",
};

export const articles: Article[] = [
  {
    slug: "public-infrastructure-for-ai-agents",
    title: "AIエージェント時代の公共インフラをどう設計するか",
    excerpt:
      "自治体と企業の役割分担を整理し、行政サービスを壊さない実装原則を提案する。",
    publishedAt: "2026-03-20",
    readTime: "8分",
    category: "ai-society",
    topic: "トピック",
  },
  {
    slug: "who-owns-intelligence-in-2030",
    title: "2030年、知能の所有権は誰のものになるのか",
    excerpt:
      "計算資源とモデルの集中が進むなかで、個人の交渉力を守る制度を検討する。",
    publishedAt: "2026-03-18",
    readTime: "10分",
    category: "singularity",
    topic: "トピック",
  },
  {
    slug: "ai-governance-as-business-strategy",
    title: "AIガバナンスをコストではなく競争力に変える",
    excerpt:
      "規制対応を後追いにせず、事業設計に埋め込むことで収益に接続する方法。",
    publishedAt: "2026-03-16",
    readTime: "7分",
    category: "business",
    topic: "新着",
  },
  {
    slug: "work-reallocation-beyond-automation",
    title: "自動化の次に来る仕事再配分のリアル",
    excerpt: "職種消滅の議論ではなく、企業が今すぐ設計すべき役割再編を解説。",
    publishedAt: "2026-03-14",
    readTime: "6分",
    category: "ai-society",
    topic: "新着",
  },
  {
    slug: "singularity-scenarios-for-japan",
    title: "日本企業向けシンギュラリティ・シナリオ3選",
    excerpt:
      "技術進化を悲観でも楽観でもなく、経営判断に使える3つの未来像に落とし込む。",
    publishedAt: "2026-03-12",
    readTime: "9分",
    category: "singularity",
    topic: "新着",
  },
  {
    slug: "boardroom-metrics-for-ai-transformation",
    title: "取締役会が見るべきAI変革KPI",
    excerpt: "PoCの件数ではなく、事業価値につながる評価軸を定義する。",
    publishedAt: "2026-03-10",
    readTime: "5分",
    category: "business",
    topic: "新着",
  },
];

export const featuredTopics = articles.filter((article) => article.topic === "トピック");

export const latestArticles = [...articles]
  .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
  .slice(0, 6);
