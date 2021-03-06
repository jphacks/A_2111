# ココノマスク

![image](https://user-images.githubusercontent.com/38291975/142687042-432f950e-36f3-4b2e-aca8-ae591185f5c4.png)

### 動画

[![YouTube](http://img.youtube.com/vi/qxXKw7ptXFY/0.jpg)](https://youtu.be/qxXKw7ptXFY)

### プレゼンテーション
以下のリンクより確認可能です。

https://www.canva.com/design/DAEv-7H1qU4/view?embed

## 製品概要

### 背景（製品開発のきっかけ、課題等）

2021 年現在、コロナ禍でマスクの着用が事実上義務化されている。その中で、マスクを着用することによる息苦しさが注目されるようになってきた。本製品では、COCOA という既存の信号を受信することで、マスクの不要な場面を判断し、快適な呼吸を促すことを目的とする。

![image](https://user-images.githubusercontent.com/38291975/142709470-d57c927d-11d7-458b-989b-574a7a5099f8.png)

### 製品説明（具体的な製品の説明）

![image](https://user-images.githubusercontent.com/38291975/142687552-7220ed3a-ce7c-4707-8801-a175fa20e62a.png)
### 特長

#### 特長 1 　 COCOA の電波受信して自動でマスク開閉


周りに人がいないときには息苦しさから解放されます。

#### 特長 2 　ファッションアイテムとしてのIoT

帽子型のため、普段着とも着あわせて着用が可能です。

#### 特長 3 　デバイス共有機能

一つのデバイスに対して複数人が共有できます。一台あたり、製作費を3000円程度と推定計算すると、４人家族で共有すれば一人当たりのコストは1000円未満とリーズナブルです。

#### 特長 4 　顔認証AI

デバイスに顔画像が紐づけられ、紐の長さが自動調節されます。メールアドレスを持っていない子供でも簡単に利用できます。オンデバイス機械学習のため、クラウドに顔画像が送信されることはなく、プライバシー保護の観点からも安全です。
![image](https://user-images.githubusercontent.com/38291975/142407457-3edabc91-3723-4df1-981b-b2c346dc2c18.png)


#### 特長 5 　ミライ小町さんによる可視化

現在のマスクの開閉状況が可愛い3Dモデルで可視化されます。
![image](https://user-images.githubusercontent.com/38291975/142709688-553685cf-d8b4-457a-8c49-6267f3e045d4.png)

### 解決出来ること

コロナ禍でマスクを常時使用を強いられることにより発生する息苦しさから解放されます。
また、マスクの紐を耳にかけることによって生じる痛みからも逃れることができます。

### 今後の展望
withコロナ時代におけるマスクを常時着用しなければいけないという懸念を除去します。

### 注力したこと（こだわり等）

- web bluetooth を用いた開発・通信
- オンデバイスAIにより、プライバシーの守られた顔認識を実現
- CI/CD の整備による開発体験の向上（良く実感できました！）
  - `frontend` `backend` 共にブランチへの push で自動デプロイがされます。（[frontend_commit](https://github.com/jphacks/A_2111/commit/3d6e045e7f468189539d3eae92b6ac4364f3365c)）（バックエンドは、Heroku から GUI による設定）
  - フロントエンドは、PR 時に自動でフォーマッターをかけ、commit をしてくれます。（[commit](https://github.com/jphacks/A_2111/commit/ebf6f3c81f3c925b4eb5342ea1f0acad78dae846)）（[自動フォーマット・コミットの例](https://github.com/jphacks/A_2111/commit/ac675cf1c97963aa3b8122f794c6f78de5d9021b)）
  - codeQL による脆弱性自動検出（[commit](https://github.com/jphacks/A_2111/blob/main/.github/workflows/codeql-analysis.yml)）（[脆弱性を指摘された例](https://github.com/jphacks/A_2111/runs/4058233223)）
  - `main` への merge には "一人以上からのコードレビュー・approve" && "CI が全て成功する" を必須にし、コードレビューをし合えただけでなく、事故を防止できました。

## 開発技術

### 活用した技術

![image](https://user-images.githubusercontent.com/38291975/142573502-7fc69ebd-356f-4542-98bc-0f99e673533e.png)

#### API・データ

- Google/Apple Notification Exposure Notification（API は経由せず、受信信号を使用）
- ミライ小町
- FastAPI
- VGGFACE2
- InceptionNet

#### フレームワーク・ライブラリ・モジュール

- Pytorch
- ONNX
- ONNXRuntime
- React
- Bluetooth Low Energy
- Web Bluetooth
- Firebase Hosting
- Cloud Firestore
- blender
- Python
- numpy
- pybleno
- pybluez

#### デバイス

- Raspberry Pi 3

### 独自技術
顔認証の実装、オンデバイス処理をONNXRumtimeで実装
![image](https://user-images.githubusercontent.com/38291975/142709216-fc971620-9bae-4248-b90b-86a3ca20bb8d.png)

#### ハッカソンで開発した独自機能・技術
- 独自デバイスの作成・アップデート
 ![image](https://user-images.githubusercontent.com/38291975/142709389-66c567bc-2fc3-44ed-a229-282a61147ec4.png)

- 電動スライダー（Motorized Slide Potentiometer）とワイヤーを用いた動力変換機構
  ![image](https://user-images.githubusercontent.com/83204474/142711960-ba00ef61-a9ed-4382-8658-42b0e66c2e56.jpg)

- COCOA の API は一般人は許可なく利用できなかったため、GAEN API を利用せず、bluetooth の service uuid を直接解析して通信。
<!-- - 特に力を入れた部分をファイルリンク、または commit_id を記載してください。 -->

### その他

- よくある質問をまとめました。→ [質問コーナー](faq.md)
- 各パートの README も **ぜひご覧ください！**
  - [frontend](frontend)　 → UI の紹介
  - [backend](backend)　 → API 仕様
  - [device](device/) 　 → 部品リスト・製作費など
  - [Machine Learning](ML/) 　 → 使用したモデルなど
