const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to read form data and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Display the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    console.log(req.body);

    res.send('Form data received successfully');
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});