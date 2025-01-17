# 開発メモ

## 初期インストール
- 下記のコマンドを打って適当なフォルダにインストール

```bash
# Next.js でセットアップ
npx create-next-app@latest
# ↓
#   プロジェクト名 : next-js-test-01
#   TypeScript 使用 : Yes
#   ESLint 使用 : Yes
#   Tailwind CSS 使用 : Yes
#   src ディレクトリ 使用 : Yes
#   App Router 使用 : Yes
#   カスタム import エイリアス 使用 : No

# フォルダの作成と、npm install が自動的に始まる
```

- インストール完了後、クローンしたGitリポジトリのフォルダにファイルを丸ごと移動する
- **参考**
  - [create\-next\-app で訊かれていること](https://zenn.dev/ikkik/articles/51d97ff70bd0da)
  - [Next\.js Pages Router と App Router のルーティング \- Qiita](https://qiita.com/Yasushi-Mo/items/865a8d6e1a063058d702)


## パッケージのインストール
### Sass用パッケージインストール

```bash
npm install sass
```

### ress用パッケージインストール

```bash
npm install ress
```

## Prettier の導入
- 自動整形ツール
- VSCode 側で導入する

### 手順
#### 拡張機能
- 拡張機能（ID：esbenp.prettier-vscode）を導入する

#### 設定変更
- 「.vscode/settings.json」に以下を追加する
  
```json
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```

### 設定ファイル配置
#### .prettierrc
- プロジェクトのトップに `.prettierrc` を作成する
- 以下のような内容をお好みで入れる

```json
{
    "tabWidth": 2,
    "semi": true,
    "singleQuote": true
}
```

#### .prettierignore
- プロジェクトのトップに `.prettierignore` を作成する
- 以下を追加する

```
node_modules
```

- 他にも除外したいものがあったら追加する





## 追加導入
### react-icons

```shell
npm install react-icons
```



