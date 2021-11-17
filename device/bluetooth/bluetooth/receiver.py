import bluetooth

PORT = 1
server_sock = bluetooth.BluetoothSocket(bluetooth.RFCOMM)
server_sock.bind(('', PORT))
server_sock.listen(1) # backlog: 接続待ち受け数

client_sock, client_addrport = server_sock.accept() # blocking until connection

data = client_sock.recv(1024)
print(data) # bytes
