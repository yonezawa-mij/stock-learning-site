# StockLearn — 株式投資学習サイト

株式投資を体系的に学べる Next.js 学習サイトです。`learning-site`（英会話）とは別プロジェクトとして、同じ Vercel アカウントにデプロイできます。

## 機能（現段階）

- ホーム・コース一覧・レッスン閲覧
- 3コース（基礎 / リスク管理 / 銘柄リサーチ）
- 理解度クイズ（クライアント側）
- ダッシュボード（静的・拡張予定）
- 料金ページ（Stripe 連携は今後）

## 開発

```bash
cd stock-learning-site
npm install
npm run dev
```

デフォルトは http://localhost:3000 。英会話サイトと同時起動する場合:

```bash
npm run dev -- -p 3001
```

## Vercel デプロイ（同一アカウント・別プロジェクト）

```bash
cd stock-learning-site
npx vercel
npx vercel --prod
```

`learning-site` とは **別の Vercel プロジェクト** としてリンクしてください。

## ディレクトリ

```
cursol project/
  learning-site/       … 英会話学習（既存）
  stock-learning-site/ … 株式投資学習（本プロジェクト）
```

## 今後の拡張

- DB・認証・Stripe（learning-site と同様）
- 学習進捗の永続化
- AI による問題生成・対話（任意）

## 免責

本サイトは教育目的のコンテンツです。投資判断は自己責任で行ってください。
