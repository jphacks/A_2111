# ココノマスク

![image](https://user-images.githubusercontent.com/38291975/139435847-981771ed-dc06-4846-a17f-aae96ee9c854.png)

### 動画

[![YouTube](http://img.youtube.com/vi/a1cLADMHmT0/0.jpg)](https://www.youtube.com/watch?v=a1cLADMHmT0)

### プレゼンテーション

https://docs.google.com/presentation/d/e/2PACX-1vSDdz9wtoaqWwp9J3if5AZR-36ecevJdxNyXyJ7Ji4ghFfAptug0QxjFISP8JmJCWudaysbajGu4hpY/pub?start=false&loop=false&delayms=3000

## 製品概要

### 背景（製品開発のきっかけ、課題等）

2021 年現在、コロナ禍でマスクの着用が事実上義務化されている。その中で、マスクを着用することによる息苦しさが注目されるようになってきた。本製品では、COCOA という既存の信号を受信することで、マスクの不要な場面を判断し、快適な呼吸を促すことを目的とする。

### 製品説明（具体的な製品の説明）

![image](https://user-images.githubusercontent.com/38291975/139435877-484c4f48-e14e-4967-bc1a-b8cfeeac1472.png)

### 特長

#### 特長 1 　 COCOA の電波受信して自動でマスク開閉

![](https://github.com/jphacks/A_2111/blob/main/mask-open-closegif.gif?raw=true)

周りに人がいないときには息苦しさから解放されます。

#### 特長 2 　紐の自動調節

紐の長さを顔に自動でフィットさせます。

#### 特長 3 　家族の登録

家族同士で QR を読み込んで家族登録すると、家族と、家族からの COCOA の信号を受信してもマスクを開けっぱなしにできます。

![image](https://user-images.githubusercontent.com/55702777/139567695-c9291ab4-d96d-4831-9178-81ed302e9840.png)

### 解決出来ること

コロナ禍でマスクを常時使用を強いられることにより発生する息苦しさから解放されます。
また、マスクの紐を耳にかけることによって生じる痛みからも逃れることができます。

### 今後の展望

- デバイスの小型化
  - 現状の首に装着するスタイル → キャップや帽子への内蔵を考え、進めています。
- アプリのオフライン・バックグラウンド動作の実装
- ちゃんとしたアカウント機能の実装（[参照](https://github.com/jphacks/A_2111/blob/main/faq.md#%E3%81%A9%E3%81%86%E3%81%84%E3%81%86%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E6%A9%9F%E6%A7%8B%E3%81%AA%E3%82%93%E3%81%A7%E3%81%99%E3%81%8B) ）
- with コロナ時代におけるマスクを常時着用しなければいけないという懸念の除去

### 注力したこと（こだわり等）

![image](https://user-images.githubusercontent.com/38291975/139519023-d2810b2a-2e6b-4664-95c6-3403b6b7e0ce.png)

- web bluetooth を用いた開発・通信
- QR コードによる家族登録の簡略化
- CI/CD の整備による開発体験の向上（良く実感できました！）
  - `frontend` `backend` 共にブランチへの push で自動デプロイがされます。（[frontend_commit](https://github.com/jphacks/A_2111/commit/3d6e045e7f468189539d3eae92b6ac4364f3365c)）（バックエンドは、Heroku から GUI による設定）
  - フロントエンドは、PR 時に自動でフォーマッターをかけ、commit をしてくれます。（[commit](https://github.com/jphacks/A_2111/commit/ebf6f3c81f3c925b4eb5342ea1f0acad78dae846)）（[自動フォーマット・コミットの例](https://github.com/jphacks/A_2111/commit/ac675cf1c97963aa3b8122f794c6f78de5d9021b)）
  - codeQL による脆弱性自動検出（[commit](https://github.com/jphacks/A_2111/blob/main/.github/workflows/codeql-analysis.yml)）（[脆弱性を指摘された例](https://github.com/jphacks/A_2111/runs/4058233223)）
  - `main` への merge には "一人以上からのコードレビュー・approve" && "CI が全て成功する" を必須にし、コードレビューをし合えただけでなく、事故を防止できました。

## 開発技術

### 活用した技術

![image](https://user-images.githubusercontent.com/38291975/139519420-880ae7ab-b3e4-44b0-85f8-c834613d6aa4.png)

#### API・データ

- Google/Apple Notification Exposure Notification（API は経由せず、受信信号を使用）
- FastAPI

#### フレームワーク・ライブラリ・モジュール

- React
- Bluetooth Low Energy
- Web Bluetooth
- Firebase Hosting
- Cloud Firestore
- blender
- Python
- pybleno

#### デバイス

- Raspberry Pi Zero

### 独自技術

#### ハッカソンで開発した独自機能・技術

- 電動スライダー（Motorized Slide Potentiometer）とワイヤーを用いた動力変換機構
  ![image](https://user-images.githubusercontent.com/38291975/139562527-45087b38-b113-4212-8371-10bc76d05a08.png)

- COCOA の API は一般人は許可なく利用できなかったため、GAEN API を利用せず、bluetooth の service uuid を直接解析して通信。
<!-- - 特に力を入れた部分をファイルリンク、または commit_id を記載してください。 -->

### その他

- よくある質問をまとめました。→ [質問コーナー](faq.md)
- 各パートの README も **ぜひご覧ください！**
  - [frontend](frontend)　 → UI の紹介
  - [backend](backend)　 → API 仕様
  - [device](device/) 　 → 部品リスト・製作費など
