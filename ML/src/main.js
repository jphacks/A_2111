// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// const ort = require('onnxruntime-web');
import { InferenceSession, Tensor } from 'onnxruntime-web'
// use an async context to call onnxruntime functions.
async function main() {
    try {
        // create a new session and load the specific model.
        //
        // the model in this example contains a single MatMul node
        // it has 2 inputs: 'a'(float32, 3x4) and 'b'(float32, 4x3)
        // it has 1 output: 'c'(float32, 3x3)
        const session = await InferenceSession.create('./model.onnx');

        const dataA = Float32Array.from({ length: 3 * 160 * 160 }, () => Math.floor(Math.random() * 40));
        const tensorA = new Tensor('float32', dataA, [1, 3, 160, 160]);

        // prepare feeds. use model input names as keys.
        const feeds = { a: tensorA };

        // feed inputs and run
        const results = await session.run(feeds);

        // read from results
        const dataC = results.c.data;
        document.write(`data of result tensor 'c': ${dataC}`);

    } catch (e) {
        document.write(`failed to inference ONNX model: ${e}.`);
    }
}

main();