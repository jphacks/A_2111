docker  build -t blt:latest .
docker run  -v /home:/home  --privileged -it --net host python:3.8 /bin/bash
