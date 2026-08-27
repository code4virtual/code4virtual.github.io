# code4virtual.github.io

**Code for Virtual** の公式ウェブサイトです。
VRChat・cluster などのバーチャル空間を拠点に活動するシビックテック・コミュニティの紹介サイトで、
GitHub Pages（`main` ブランチの `docs/` ディレクトリ）から公開されます。

公開URL: <https://code4virtual.github.io/>

## 構成

```
docs/
├── index.html          トップページ（1ページ完結型）
├── 404.html            Not Found ページ
├── robots.txt
├── sitemap.xml
├── .nojekyll           Jekyll のビルドを無効化して静的配信する
└── assets/
    ├── style.css       スタイル（デザイントークンは :root にまとめています）
    ├── main.js         ナビゲーション開閉・スクロール表示（依存ライブラリなし）
    └── favicon.svg
```

ビルド不要の静的サイトです。フレームワークも外部CDNも使っていないため、
`docs/` をローカルで開くだけで確認できます。

```bash
# 例: ローカルで確認する
python3 -m http.server 8000 --directory docs
# → http://localhost:8000
```

## 公開設定（GitHub Pages）

リポジトリの **Settings → Pages** で、以下を選択してください。

- Source: `Deploy from a branch`
- Branch: `main` / `/docs`

## 公開前に差し替えたい箇所

サイト内には、実際の情報に置き換える前提のプレースホルダーが含まれています。
HTML 内の `TODO` コメントを目印にしてください。

| 箇所 | 内容 |
| --- | --- |
| ヘッダー／CTA／フッターの参加リンク | Discord などコミュニティ招待URL（現在は `#join` / `#contact` へのリンク） |
| フッターのリンク集 | VRChat グループ、cluster のページURL |
| プロジェクト一覧 | 実際に動いているプロジェクトの名称・説明・状態タグ |
| 定例会セクション | 開催曜日・時刻（現在は所要時間のみ記載） |
| OGP 画像 | `og:image` は未設定。用意でき次第 `<head>` に追加してください |

## デザイン方針

- ダークテーマ固定。背景のグリッドとオーロラでバーチャル空間の雰囲気を出しています
- 色・角丸・余白は `docs/assets/style.css` の `:root` にトークンとして集約
- レスポンシブ対応（900px 以下でナビゲーションをメニュー化）
- スキップリンク、`aria-*` 属性、キーボード操作、`prefers-reduced-motion` に対応

## ライセンス

コンテンツおよびコードの取り扱いは、コミュニティの方針が決まり次第追記します。
