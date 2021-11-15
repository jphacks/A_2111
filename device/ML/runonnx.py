import onnxruntime as ort
from PIL import Image
import numpy as np



def run(url):
    x=np.array(Image.open(url))
    ort_sess = ort.InferenceSession('model.onnx')
    outputs = ort_sess.run(None, {'input': x})
    print(ooutputs)


if __name__ == '__main__':
    run("sample.jpg")
