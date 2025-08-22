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
Next.js フロントエンドと Python 製の背景削除サービスを同時に起動します。別ターミナルで以下を実行してください。
```
# Next.js フロントエンド (http://localhost:3000)
pnpm dev:web

# rembg サービス (http://localhost:7000)
pnpm dev:rembg
```
もしくは一括起動:
```
pnpm dev:all
```

### API 呼び出し例
`curl`:
```
curl -X POST -F "file=@sample.png" http://localhost:3000/api/remove-bg --output out.png
```

フロントエンドの `fetch`:
```ts
const formData = new FormData();
formData.append('file', file);
const res = await fetch('/api/remove-bg', { method: 'POST', body: formData });
const blob = await res.blob();
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
