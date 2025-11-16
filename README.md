# Predictive-Maintenance-using-IoT-devices

Real-time temperature monitoring for equipment health using Arduino, Python, Node.js, and a responsive web UI. Detects anomalies, sends alerts, and visualizes trends.

## Quick Demo
![Dashboard Screenshot](<img width="1877" height="918" alt="Screenshot 2024-12-24 110134" src="https://github.com/user-attachments/assets/31b5859a-51d2-4a7f-8725-ad77784b0e61" />
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
1. **Arduino**: Upload `arduino.cpp` (115200 baud).
2. **Python**: `pip install -r requirements.txt` → `python scrapping.py`.
3. **Server**: `npm install` → `node server.js`.
4. **UI**: Open `dashboard.html` or serve via Express.

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
