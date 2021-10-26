import time
# import library
from RpiMotorLib import rpi_dc_lib

def motorone():
    # define instance of the class
    # (GPIO , GPIO , GPIO , freq , verbose, name)
    MotorOne = rpi_dc_lib.L298NMDc(20 ,21 ,12 ,100 ,True, "motor_one")

    try:
        print("1. motor forward at 100")
        MotorOne.forward(100)
        input("press key to stop")
        print("motor stop\n")
        MotorOne.stop(0)
        time.sleep(3)

        print("2. motor forward ramp speed up 50 to 100 steps of 1")
        for i in range(50,100):
            MotorOne.forward(i)
            time.sleep(0.1)
        MotorOne.stop(0)
        print("motor stoped\n")
        time.sleep(3)
        print("3. motor backward")
        MotorOne.backward(100)
        input("press key to stop") 
        MotorOne.stop(0)
        print("motor stopped\n")
        time.sleep(3)

        print("4. motor backward ramp speed up up 15 to 30 steps of 1")
        for i in range(50,100):
            MotorOne.backward(i)
            time.sleep(0.1)
        MotorOne.stop(0)
        print("motor stopped\n")
        time.sleep(3)
         
        print("5  brake check")
        MotorOne.forward(100)
        time.sleep(3)
        MotorOne.brake(0)
        print("motor brake\n")
      
    except KeyboardInterrupt:
            print("CTRL-C: Terminating program.")
    except Exception as error:
            print(error)
            print("Unexpected error:")
    else:
        print("No errors")
    finally:
        print("cleaning up")
        MotorOne.cleanup(True)
    
if __name__ == '__main__':
    # motorone()
    MotorOne = rpi_dc_lib.L298NMDc(20 ,21 ,12 ,100 ,True, "motor_one")
    for i in range(5):
        MotorOne.forward(100)
        time.sleep(0.5)
        MotorOne.backward(100)
        time.sleep(0.5)
    MotorOne.cleanup(True)
    exit()
