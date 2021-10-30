from bluepy import btle
#import motor
scanner = btle.Scanner(0)
while(True):
  devices = scanner.scan(0.5)
  for device in devices:
    try:
      if(list(device.getScanData()[0])[2][4:8]=="fd6f"):
        print("cocoa detected")
        print("   rssi:",device.rssi)
        print("   Servicedata:",list(device.getScanData()[1])[2])

        motor.open_mask():
      else:
        motor.close_mask()
    except:
      pass
