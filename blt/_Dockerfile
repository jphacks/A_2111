FROM python:3.8
USER root
RUN apt update
RUN apt install -y vim libglib2.0-dev libdbus-1-dev libudev-dev libical-dev libreadline6-dev bluez bluetooth



RUN mkdir -p /root/src
WORKDIR /home
COPY requirements.txt /root/src
RUN pip install -r /root/src/requirements.txt

