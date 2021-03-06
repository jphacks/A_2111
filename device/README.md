
# COCONOMASK デバイス

## 説明

### BLE機能

COCOA の信号を受信し、マスクの開閉を行います。COCOA の API は認証された組織しか使用できないため、API を経由せず直接 Service UUID を読み込んで判断しています。公式 Docs より、COCOA の Service UUID は１６進数で`fd6f`です。また、変数 age によってマスクの長さを調節します。

- 出典：https://blog.google/documents/70/Exposure_Notification_-_Bluetooth_Specification_v1.2.2.pdf/
  ![image](https://user-images.githubusercontent.com/38291975/139562187-42336a13-7507-4942-8bce-fe982d58ced1.png)

### BLuetooth機能

スマートフォンとはBLuetoothでペアリングし通信します。

### 顔認証機能

モデルについては`A_2111/ML`ディレクトリに記載してあります。デバイス上では推論に最適化されたONNXRuntimeにより実行しています。

## ハードについて

### 部品

- 制御：raspberry pi 3
- モーター制御：L298N
- 電動スライダー：RSA0N11M9A0J
- ワイヤー（φ1mm 汎用品 左右約 400mm ずつ）
- その他部品（百均など）


![image](https://user-images.githubusercontent.com/38291975/142709525-a1e6dada-4995-4806-a72a-650cb67336bb.png)


