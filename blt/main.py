from bluepy import btle
import motor
import numpy as np
AGE = 20


def AGE2Power(age):
  return np.log(age)/np.log(20)

scanner = btle.Scanner(0)
while(True):
  devices = scanner.scan(0.5)
  for device in devices:
    try:
      if(list(device.getScanData()[0])[2][4:8]=="fd6f"):
        print("cocoa detected")
        print("   rssi:",device.rssi)
        print("   Servicedata:",list(device.getScanData()[1])[2])
        motor.open_mask(AGE2Power(AGE))
      else:
        motor.close_mask()
    except:
      pass