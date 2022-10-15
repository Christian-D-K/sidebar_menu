## 起動方法

### Dev 環境

```bash
npm run dev
# or
yarn dev
```

### Storybook

```bash
npm run storybook
# or
yarn storybook
```

## リポジトリルール

### ブランチ名

基本的に以下の形式

```
{修正ステータス}/{機能名}-{２桁の番号}
```

- 修正ステータスとは?
  機能作成：create
  機能追加：add
  機能修正・バグフィックス：fix
  機能削除：delete
  その他：other

#### 例

- 機能や画面の新規作成

```
create/holloWorld-01
```

- 既に作成された機能に機能を追加。またはブラッシュアップ

```
add/holloWorld-01
```

- 既存の機能にバグが見つかった！

```
fix/holloWorld-01
```

- 機能の削除

```
delete/holloWorld-01
```

- 上記に該当しないもの

```
other/holloWorld-01
```

## コミットルール

### プルリクエスト

#### プルリクエスト名

```
【{修正ステータス}】{機能名}-{２桁の番号} {簡単な実装の説明}
```

##### 例

```
【create】helloWorld-01 Hello World画面
```

```
【add】helloWorld-01 ボタンの押下でアラートに出力する
```

```
【fix】helloWorld-01 文字列がおかしくなっていたため修正
```

#### プルリクエスト説明

以下を貼り付け編集

```
# 新規作成:seedling:
# 機能追加:sparkles:
# バグフィックス:bug:
# 機能削除:boom:
# リファクタリング:construction_worker:
# その他:zap:
↑この文と該当の項目以外は削除！↑

# 概要:page_facing_up:
- blah blah blah...
- etc...

# モチベーション:fire:
- blah blah blah...
- etc...

# 実装:wrench:
- blah blah blah...
- etc...

# 懸念点:pushpin:
- 特になし

# 備考:pencil2:
- 特になし
```
