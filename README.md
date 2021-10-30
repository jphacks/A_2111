# ココノマスク

![https://youtu.be/Ja4EomWBJzQ](https://user-images.githubusercontent.com/38291975/139435847-981771ed-dc06-4846-a17f-aae96ee9c854.png)

[![YouTube](http://img.youtube.com/vi/a1cLADMHmT0/0.jpg)](https://www.youtube.com/watch?v=a1cLADMHmT0)

## 製品概要

### 背景(製品開発のきっかけ、課題等）

2021 年現在、コロナ禍でマスクの着用が事実上義務化されている。その中で、マスクを着用することによる息苦しさが注目されるようになってきた。本製品では、COCOA という既存の信号を受信することで、マスクの不要な場面を判断し、快適な呼吸を促すことを目的とする。

### 製品説明（具体的な製品の説明）

![image](https://user-images.githubusercontent.com/38291975/139435877-484c4f48-e14e-4967-bc1a-b8cfeeac1472.png)

### 特長

#### 1. 特長 1 　 COCOA の電波受信して自動でマスク開閉
![](https://github.com/jphacks/A_2111/blob/main/mask-open-closegif.gif?raw=true)

周りに人がいないときには息苦しさから解放されます。

#### 2. 特長 2 　紐の自動調節

紐の長さを顔に自動でフィットさせます。

#### 3. 特長 3 　家族の登録

家族同士で QR を読み込んで家族登録すると、家族と、家族からの COCOA の信号を受信してもマスクを開けっぱなしにできます。

### 解決出来ること

コロナ禍でマスクを常時使用を強いられることにより発生する息苦しさから解放されます。

### 今後の展望

with コロナ時代におけるマスクを常時着用しなければいけないという懸念の除去

### 注力したこと（こだわり等）

![image](https://user-images.githubusercontent.com/38291975/139519023-d2810b2a-2e6b-4664-95c6-3403b6b7e0ce.png)

- web bluetooth を用いた開発・通信
- QR コードによる家族登録の簡略化

## 開発技術

### 活用した技術

![image](https://user-images.githubusercontent.com/38291975/139519420-880ae7ab-b3e4-44b0-85f8-c834613d6aa4.png)

#### API・データ

- Apple/Google Notification Exposure Notification
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

- 電動スライダー(Motorized Slide Potentiometer)とワイヤーを用いた動力変換機構
<!-- - 特に力を入れた部分をファイルリンク、または commit_id を記載してください。 -->

#### 製品に取り入れた研究内容（データ・ソフトウェアなど）（※アカデミック部門の場合のみ提出必須）

-
-
