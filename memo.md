# DB に仮データを登録

## mysql を設定

### 参考

- 【WSL】WSL2 に mysql をインストールする

  - https://makky12.hatenablog.com/entry/2022/10/11/120500

- Mysql 8.0 初期設定

  - https://qiita.com/ucan-lab/items/c80fb8a880679fa20162

- 接続

```
sudo mysql -u root -p

show Databases;
```

- 起動

```
sudo /etc/init.d/mysql status
sudo /etc/init.d/mysql restart

```

### DB 作成

```
show databases;
CREATE DATABASE nicodb_db;

USE nicodb_db;

CREATE TABLE test_table (
    user_id INT,
    user_name VARCHAR(255)
);
show columns from test_table;

select * from test_table;

INSERT INTO test_table (user_id, user_name)
VALUES (128551563, "ヤスマサ");


INSERT INTO test_table (user_id, user_name)
VALUES (74326232, "わっさん");

```

### ユーザー作成

```
CREATE USER 'test_user'@'localhost' IDENTIFIED BY 'test';
GRANT ALL PRIVILEGES ON nicodb_db.* TO 'test_user'@'localhost';
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'test_user'@'localhost';
```

# Hello world を表示させる

## 参考

### チュートリアル記載のコマンド

```
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/main/basics/learn-starter"
```

### 実行コマンド

```
npx create-next-app@latest nicodb --use-npm
```

# 参考

## コマンド等

- プロジェクトディレクトリ
  - /home/masa/works/nicodb

## 参考 URL

- PlanetScale というサーバレス DB が凄く勢いのあるサービスらしいので Quick Start やってみた

  - https://qiita.com/tak001/items/cfbaa9dcb542929ff235

- Next.js マニュアル
  - https://nextjs.org/docs
