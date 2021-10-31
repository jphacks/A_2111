## 説明
- main.py

  COCOAの信号を受信し、マスクの開閉を行います。COCOAのAPIは認証された組織しか使用できないため、APIを経由せず直接Service UUIDを読み込んで判断しています。また、変数ageによってマスクの長さを調節します。
  
- pair.py

  BLEでペアリングし、モーターを動作させます。
  
## 実行方法

`docker  build -t blt:latest .`

`docker run  -v /home:/home  --privileged -it --net host python:3.8 /bin/bash`
