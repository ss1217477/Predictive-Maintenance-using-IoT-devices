# Predictive-Maintenance-using-IoT-devices

Real-time temperature monitoring for equipment health using Arduino, Python, Node.js, and a responsive web UI. Detects anomalies, sends alerts, and visualizes trends.

## Quick Demo
![Dashboard Screenshot](https://github.com/ss1217477/Predictive-Maintenance-using-IoT-devices/blob/a4a844c15e75076237b3e0736f56e1bdc81c988d/Screenshot%202024-12-24%20110134.png
) <!-- Add a screenshot later -->

## Features
- Live gauge & charts (JustGage, Chart.js).
- Threshold alerts with history.
- Stability detection (e.g., "stable at 25°C for 10s").
- AWS-inspired design.

## Tech Stack
| Layer | Tech |
|-------|------|
| Hardware | Arduino + Thermistor |
| Bridge | Python (pyserial) |
| Backend | Node.js + Socket.io |
| Frontend | HTML/JS/CSS |

## Setup
1. **Arduino**: Upload `arduino.ino` (115200 baud).
2. **Python**: `pip install -r requirements.txt` → `python scrapping.py`.
3. **Server**: `npm install` → `node server.js`.
4. **UI**: Open `dashboard.html` or serve via Express.

### Circuit Diagram
![Circuit Diagram](https://www.electronicwings.com/storage/PlatformSection/TopicContent/208/description/Thermistor_Interfacing_Diagram.png)

### Actual Setup (Breadboard)
![Real Setup](https://www.electronicwings.com/storage/PlatformSection/TopicContent/208/description/Content%20Image%20NTC%20.jpg)

> **Components Used**:
> - Arduino Uno
> - 10K NTC Thermistor
> - 10K Resistor (R2) → Voltage divider
> - Jumper wires
> - Breadboard

**Connections**:
- One leg of thermistor → 5V (red wire)
- Other leg → A0 and also to 10K resistor (R2)
- Other end of 10K resistor → GND (blue/black wire)
- A0 reads the voltage in the middle of the voltage divider
## Run Full Stack
- Terminals: Arduino IDE → Python → Node.
- Browser: localhost:3001/dashboard.html.

## Files
- `arduino.cpp`: Sensor firmware.
- `scrapping.py`: Serial to server.
- `server.js`: API + real-time.
- `dashboard.html`: Monitoring UI.
- `alert.html`: Alert viewer (now dynamic!).
- `home1.html`: Landing page.
- `temperature.js`: Notification module.

## Future Ideas
- Add ML anomaly detection.
- Multi-sensor (vibration, pressure).
- Deploy: Vercel (frontend) + Railway (backend).
