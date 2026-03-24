import styles from "./page.module.css";

const themes = [
  {
    title: "AI失業と再分配",
    body: "雇用が壊れる速度より先に、所得・教育・再訓練の制度をどう再設計するかを追う。",
  },
  {
    title: "ポスト資本主義の仮説",
    body: "限界費用の低下、機械所有の集中、ベーシックインカム以後の制度設計を検討する。",
  },
  {
    title: "人間拡張と倫理",
    body: "脳-機械接続、義肢、認知補助が『人間らしさ』をどう書き換えるかを扱う。",
  },
];

const features = [
  {
    label: "Feature Essay",
    title: "シンギュラリティ後に国家は何を管理するのか",
    summary:
      "生産手段の中心が人間労働から計算資源とロボットに移った時、税制・福祉・主権はどこへ向かうのか。",
  },
  {
    label: "Scenario",
    title: "2032年、日本のホワイトカラー市場はどう再編されるか",
    summary:
      "AIエージェントの低価格化と大企業の導入競争を前提に、職種ごとの変化をシナリオで整理する。",
  },
  {
    label: "Briefing",
    title: "ロボティクスの普及は地方経済を再起動させるのか",
    summary:
      "物流・介護・建設の自動化が進んだ時、都市集中と地方衰退の力学は逆転するのかを検証する。",
  },
];

const formats = [
  "長文の論考",
  "時事に紐づく短い解説",
  "制度設計のシナリオ分析",
  "将来プロダクトの検証ログ",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>FUTURE PLOT / 未来構想メディア</p>
          <h1>
            AI・ロボット・政治経済の変化を、
            <span>社会設計の視点で読む。</span>
          </h1>
          <p className={styles.lead}>
            Future Plot は、単なるニュース紹介ではなく、技術進歩が制度、
            労働、市民生活、国家の形をどう変えるかを追跡するための
            メディアです。
          </p>
          <div className={styles.ctas}>
            <a className={styles.primary} href="#features">
              特集を見る
            </a>
            <a className={styles.secondary} href="#manifesto">
              編集方針
            </a>
          </div>
        </div>
        <aside className={styles.heroPanel}>
          <p className={styles.panelLabel}>Launch Thesis</p>
          <h2>これから起きるのは、技術革新ではなく社会仕様の書き換えだ。</h2>
          <p>
            生産、意思決定、所有、分配の仕組みが変わる以上、
            未来を読むにはプロダクトだけでなく制度まで見る必要がある。
          </p>
        </aside>
      </header>

      <main className={styles.main}>
        <section className={styles.section} id="manifesto">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Manifesto</p>
            <h2>何を扱うメディアか</h2>
          </div>
          <div className={styles.themeGrid}>
            {themes.map((theme) => (
              <article className={styles.themeCard} key={theme.title}>
                <h3>{theme.title}</h3>
                <p>{theme.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="features">
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Editorial Queue</p>
            <h2>最初に出すべき論点</h2>
          </div>
          <div className={styles.featureList}>
            {features.map((feature) => (
              <article className={styles.featureCard} key={feature.title}>
                <p className={styles.featureLabel}>{feature.label}</p>
                <h3>{feature.title}</h3>
                <p>{feature.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Format</p>
            <h2>X運用とメディア運用を接続する</h2>
          </div>
          <div className={styles.formatPanel}>
            <div>
              <p className={styles.panelLead}>
                Xでは短い仮説を投げ、メディアでは制度と歴史の文脈まで掘る。
              </p>
              <p className={styles.panelText}>
                流行りのAIニュースを追うだけでは差別化になりません。勝ち筋は、
                「技術変化を社会の再設計として読む」視点を一貫して出すことです。
              </p>
            </div>
            <ul className={styles.formatList}>
              {formats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
