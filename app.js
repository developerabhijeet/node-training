// Import the Express.js framework
const express = require("express");

// Create an Express application
const app = express();

// Define the port number for the server, with a fallback to 5000 if not provided
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Define a route for the root URL ("/") that responds with a simple message
app.get("/", (req, res) => {
    res.send("Hello, Welcome in NodeJs")
})

// Start the server on the specified port
app.listen(
    port,
    console.log(`Server running on PORT ${port}...`)
);