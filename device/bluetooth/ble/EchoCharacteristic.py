from pybleno import Characteristic
import array
import struct
import sys
import traceback
import motor
class EchoCharacteristic(Characteristic):
    
    def __init__(self, uuid):
        Characteristic.__init__(self, {
            'uuid': uuid,
            'properties': ['read', 'write', 'notify'],
            'value': None
          })
          
        self._value = array.array('B', [0] * 0)
        self._updateValueCallback = None
          
    def onReadRequest(self, offset, callback):
        print('EchoCharacteristic - %s - onReadRequest: value = %s' % (self['uuid'], [hex(c) for c in self._value]))
        callback(Characteristic.RESULT_SUCCESS, self._value[offset:])

    def onWriteRequest(self, data, offset, withoutResponse, callback):
        self._value = data

        print('EchoCharacteristic - %s - onWriteRequest: value = %s' % (self['uuid'], [hex(c) for c in self._value]))
        print([hex(c) for c in self._value])
        if([hex(c) for c in self._value]==['0x0']):
            motor.open_mask()
        #小さく閉じる
        elif([hex(c) for c in self._value]==['0x1']):
            motor.close_mask(0.2)
        #普通ぐらい閉じる
        elif([hex(c) for c in self._value]==['0x2']):
            motor.close_mask(0.3)
        #キツく閉じる
        elif([hex(c) for c in self._value]==['0x3']):
            motor.close_mask(0.5)
        if self._updateValueCallback:
            print('EchoCharacteristic - onWriteRequest: notifying');
            
            self._updateValueCallback(self._value)
        
        callback(Characteristic.RESULT_SUCCESS)
        
    def onSubscribe(self, maxValueSize, updateValueCallback):
        print('EchoCharacteristic - onSubscribe')
        
        self._updateValueCallback = updateValueCallback

    def onUnsubscribe(self):
        print('EchoCharacteristic - onUnsubscribe');
        
        self._updateValueCallback = None
