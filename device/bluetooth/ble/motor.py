import time
from RpiMotorLib import rpi_dc_lib
import RPi.GPIO as GPIO


# https://github.com/gavinlyonsrepo/RpiMotorLib/blob/master/Documentation/L298N_DC.md
# forward(n) 又は backward(n)、そして stop(0) で回したり止めたり
# n は duty(つまり強さ) で、0-100
# (GPIO(input3) , GPIO(input4) , GPIO(PWM) , freq , verbose, name)

MotorOne = rpi_dc_lib.L298NMDc(20, 21, 12, 100, True, "motor_one")

#MotorOne.cleanup(True)

def close_mask(t=0.5):
    print("closing")
    MotorOne.forward(100)  # forward と
    time.sleep(t)
    MotorOne.stop(0)


def open_mask():
    print("opening")
    MotorOne.backward(100)  # backward、逆かも
    time.sleep(0.5)
    MotorOne.stop(0)

