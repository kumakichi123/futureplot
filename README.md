# Future Plot

AI、ロボット、政治、経済制度の変化が社会をどう作り変えるかを扱う「未来構想メディア」の初期実装です。  
単なる AI ニュースの要約ではなく、技術進歩を制度設計と社会変動の視点から読むことを目的にしています。

## Stack

- Next.js 16
- React 19
- TypeScript
- App Router

## Local Development

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開くと確認できます。

## Initial Direction

- ヒーローでメディアの立ち位置を明示
- 扱うテーマを 3 本柱で整理
- 初期特集候補をカード形式で提示
- X と長文メディアをどう接続するかを明文化

## Deploy

最短は Vercel です。GitHub に push した後、Vercel にリポジトリ連携すると自動デプロイできます。

公開 URL:

- https://futureplot.vercel.app/

```bash
npm run build
```

ビルドが通れば、そのまま Vercel へのデプロイ対象にできます。

## Agent Operation Rule (Push Policy)

- 以後、エージェントは **ユーザーから毎回指示されなくても**、実装完了時に `git push` まで実施する。
- `git push` が失敗した場合は、失敗理由（認証・権限・remote未設定など）と再実行に必要なコマンドを必ず報告する。
- デプロイ環境（例: Vercel）が自動デプロイ連携されている場合、push後に本番反映の確認手順もあわせて案内する。

## GitHub Push

この環境では GitHub CLI と認証情報が未設定なので、リモートリポジトリの自動作成までは未完です。  
次のどちらかが必要です。

1. `gh` をインストールして GitHub にログインする
2. GitHub 上で空リポジトリを作って、その URL を `git remote add origin ...` で接続する

接続後の基本コマンド:

```bash
git branch -M main
git remote add origin <YOUR_REPO_URL>
git add .
git commit -m "Initial Future Plot site"
git push -u origin main
```
