# Machine Leaning実装ディレクトリ

ラズパイ上で動作検証を行う前に、Pytorch→ONNXのエクスポートと、ONNXRuntimeでの推論機能の検証を行なっています。
160×160の顔画像を入力とし、512次元ベクトルを出力します。

## 事前学習データセット

vggface2(https://arxiv.org/abs/1710.08092)

## モデル

InceptionResnetV1

モデル概要図
![](https://github.com/jphacks/A_2111/blob/readme/ML/pic.png?raw=true)
