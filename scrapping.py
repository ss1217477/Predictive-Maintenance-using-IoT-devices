import serial
import time
import requests

# Serial connection to Arduino (update the COM port as necessary)
ser = serial.Serial('COM3', 9600)  # COM3 is an example, use the correct port for your system
time.sleep(2)  # Give the Arduino some time to reset

while True:
    # Read the data from the Arduino
    line = ser.readline().decode('utf-8').strip()
    
    # Check if the line starts with "Temperature" and extract the value
    if line.startswith("Temperature:"):
        try:
            temperature = float(line.split(":")[1].strip())
            print(f"Temperature: {temperature} °C")

            # Send the temperature data to the Node.js server
            response = requests.post("http://localhost:3001/update", data={"temperature": temperature})
            print(f"Server Response: {response.text}")
        except ValueError:
            print("Failed to read valid temperature from Arduino")

    # Reduce delay to fetch data faster
    time.sleep(0.2)  # Sleep for 200ms instead of 1 second (or no delay)
