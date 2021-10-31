## 説明

### `main.py`

COCOA の信号を受信し、マスクの開閉を行います。COCOA の API は認証された組織しか使用できないため、API を経由せず直接 Service UUID を読み込んで判断しています。公式 Docs より、COCOA の Service UUID は１６進数で`fd6f`です。また、変数 age によってマスクの長さを調節します。

- 出典：https://blog.google/documents/70/Exposure_Notification_-_Bluetooth_Specification_v1.2.2.pdf/
  ![image](https://user-images.githubusercontent.com/38291975/139562187-42336a13-7507-4942-8bce-fe982d58ced1.png)

### `pair.py`

BLE でペアリングし、モーターを動作させます。

## 実行方法

`docker build -t blt:latest .`

`docker run -v /home:/home --privileged -it --net host python:3.8 /bin/bash`
