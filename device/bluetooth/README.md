# ラズパイ bluetooth操作部分のコード

### `pair.py`

BLE でペアリングし、モーターを動作させます。

## 実行方法

`docker build -t blt:latest .`

`docker run -v /home:/home --privileged -it --net host python:3.8 /bin/bash`
