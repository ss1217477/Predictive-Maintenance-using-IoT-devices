const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io'); // Import Socket.io

const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Initialize Socket.io

const port = 3001;

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let latestTemperature = 0;

// Endpoint to receive temperature data
app.post('/update', (req, res) => {
    latestTemperature = req.body.temperature;  // Save the temperature
    console.log(`Received Temperature: ${latestTemperature}°C`);

    // Emit the latest temperature to all connected clients
    io.emit('temperatureUpdate', latestTemperature);

    res.send('Temperature updated successfully');
});

// Endpoint to send the latest temperature data (initial fetch)
app.get('/latest-data', (req, res) => {
    res.json({ temperature: latestTemperature });
});

// Socket.io connection to handle real-time updates
io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Send the latest temperature to new clients
    socket.emit('temperatureUpdate', latestTemperature);

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
