from bluepy import btle
 
scanner = btle.Scanner(0)
devices = scanner.scan(3.0)
 
for device in devices:
  for (_, description, valueText) in device.getScanData():
    if("Complete 16b Services"==description and "fd6f"==valueText[4:8]):
      print("cocoa detexted")
