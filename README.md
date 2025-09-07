# ToDo App (React)

React, Vite, Tailwind CSSを使用して構築されたシンプルなToDoアプリケーションです。

## ✨ 主な機能

- **タスク管理**: タスクの追加、編集、削除
- **ステータス更新**: タスクの完了・未完了の切り替え
- **タスク検索**: タイトルや説明文での柔軟な検索
- **統計表示**: 全タスク数、完了済み、未完了の数を表示
- **データ永続化**: ブラウザのローカルストレージにタスクを保存
- **レスポンシブデザイン**: モバイルフレンドリーなUI

## 🛠️ 使用技術

- **React**: UI構築のためのメインライブラリ
- **Vite**: 高速な開発サーバーとビルドツール
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
- **Lucide React**: シンプルで美しいアイコンセット

## 🚀 セットアップ

1. **リポジトリをクローンします。**

    ```bash
    git clone <リポジトリのURL>
    cd todo-react
    ```

2. **依存関係をインストールします。**

    ```bash
    npm install
    ```

3. **開発サーバーを起動します。**

    ```bash
    npm run dev
    ```

ブラウザで `http://localhost:5173` を開いてください。(ポートは環境によって異なる場合があります)

## 📜 利用可能なスクリプト

- `npm run dev`: 開発モードでアプリケーションを起動します。
- `npm run build`: 本番用にアプリケーションをビルドします。
- `npm run lint`: ESLintを実行してコードの静的解析を行います。
- `npm run preview`: ビルドされた本番用アプリケーションをローカルでプレビューします。

## 📝 データ構造

このアプリケーションで扱うタスクのデータ構造は以下の通りです。

```typescript
interface Task {
  id: string;          // 一意識別子
  title: string;       // タスクタイトル
  description?: string; // タスク詳細（オプション）
  completed: boolean;  // 完了状態
  createdAt: Date;     // 作成日時
  updatedAt: Date;     // 更新日時
}
```
