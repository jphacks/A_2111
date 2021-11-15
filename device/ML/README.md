docker build -t runonnx:latest .
docker run -v /home/pi:/home -it  runonnx /bin/bash
