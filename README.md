# Lumina Editor

背景削除・透過・サイズ調整に特化した軽量画像編集Webアプリ（Next.js + Node + Sharp + rembg）

## 環境要件
- Node.js 20
- pnpm
- Python 3.10 (rembg サービス用)

## セットアップ
```
pnpm install
```

## 開発
別ターミナルで以下を実行します。
```
# Next.js フロントエンド
pnpm dev:web

# rembg サービス
pnpm dev:rembg
```
または一括起動:
```
pnpm dev:all
```

## テスト
```
pnpm lint
pnpm typecheck
pnpm test
pnpm e2e
```

## スクリーンショット
以下のスクリーンショットは後でGitHubに直接アップロードします。

![home (to be uploaded via GitHub)](docs/screenshot-home.png)
![before (to be uploaded via GitHub)](docs/screenshot-before.png)
![after (to be uploaded via GitHub)](docs/screenshot-after.png)

## ライセンス
MIT
