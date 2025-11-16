let lastTemperature = null;
let lastTemperatureTime = null;  // Time when the last temperature was set
let notificationActive = false;  // Flag to track if a notification is already active

async function fetchTemperature() {
    try {
        const response = await fetch('http://localhost:3001/latest-data');
        const data = await response.json();
        const temperature = parseFloat(data.temperature);

        if (isNaN(temperature)) return;

        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(1);
        
        tempGauge.refresh(temperature);
        temperatureData.push(temperature);
        tempChart.data.labels.push(elapsedTime);
        tempChart.data.datasets[0].data.push(temperature);
        tempChart.update();

        totalTemperature += temperature;
        readingCount++;
        minTemperature = Math.min(minTemperature, temperature);
        maxTemperature = Math.max(maxTemperature, temperature);

        // Check if the temperature is the same as the last one
        if (temperature === lastTemperature) {
            // Calculate the duration the temperature has remained the same
            const duration = ((Date.now() - lastTemperatureTime) / 1000).toFixed(1);  // In seconds
            if (!notificationActive) {
                showNotification(temperature, 'stable', duration);
            }
        } else {
            // If temperature changed, reset and show a new notification
            showNotification(temperature, 'changed');
            lastTemperature = temperature;
            lastTemperatureTime = Date.now();  // Update the time when the temperature changed
            notificationActive = false;  // Reset notification flag
        }
        
    } catch (error) {
        console.error("Error fetching temperature:", error);
    }
}

function showNotification(temperature, type, duration = '') {
    const notificationBox = document.getElementById('notification-box');

    if (type === 'stable') {
        // Show notification for stable temperature with duration
        notificationBox.textContent = `Temperature is stable at ${temperature}°C for ${duration} seconds.`;
        notificationBox.className = 'notification-box safe';
        notificationBox.style.display = 'block';
        notificationActive = true;  // Mark notification as active
    } else if (type === 'changed') {
        // Show notification for temperature change
        notificationBox.textContent = `Temperature changed to ${temperature}°C!`;
        notificationBox.className = 'notification-box warning';
        notificationBox.style.display = 'block';
        notificationActive = false;  // Reset notification flag for next change
    }
}

// Call this function every 1 second to fetch the temperature data
setInterval(fetchTemperature, 1000);
