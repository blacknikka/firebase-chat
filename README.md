# chat

## 最初に
1. firebaseアカウント
firebaseのアカウントを作ります。
googleのアカウントがあればすぐに作れるはずです。

2. firebaseプロジェクト
firebaseのプロジェクトを作ります。

3. firebase-CLIをインストールします
`npm`が必要となりますので、`npm`が入っていない人はnode.jsをインストールしてください

```
npm install -g firebase-tools
```

ファイルのアクセス権限のエラーが出た場合にはsudoつけてください。

```
sudo npm install -g firebase-tools
```

## deploy
まずはプロダクトをビルドします

```
npm run build
```

このコマンドにより、`dist`フォルダにvueファイルがビルドされます。
ビルドが正常に完了したことを確認します。

```
firebase deploy --project <projectID>
```

`<projectID>`は、firebaseの設定画面で確認ができます
このコマンドで`dist`フォルダがデプロイされます
この`dist`フォルダは`firebase.json`ファイルによって指定されています（デフォルトの設定では`public`フォルダをデプロイするようです）

