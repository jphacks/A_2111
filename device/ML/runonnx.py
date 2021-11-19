import onnxruntime as ort
from PIL import Image
import numpy as np



def run(url):
    x=np.array(Image.open(url),dtype=np.float32).reshape(1,3,160,160)
    ort_sess = ort.InferenceSession('model.onnx')
    outputs = ort_sess.run(None, {'input': x})
    return outputs[0][0]


if __name__ == '__main__':
    print(run("sample.jpg"))
