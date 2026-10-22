const express = require('express');
const app = express();

app.use(express.json());

// 1. ErrorHandler Class (matching your slide concept)
class ErrorHandler {
    isTrustedError(error) {
        // Custom logic: return true for operational errors (like invalid user input)
        return true; 
    }

    async handleError(err, res) {
        // Log the error (simulated logger)
        console.error('Error message from the centralized error-handling component:', err.message);
        
        if (res) {
            res.status(err.statusCode || 500).json({
                success: false,
                message: err.message || 'Internal Server Error'
            });
        }
    }
}

const errorHandler = new ErrorHandler();

// 2. Sample Route that triggers an error
app.get('/test-error', async (req, res, next) => {
    try {
        // Simulating an error (e.g., something went wrong in a service)
        throw new Error("Database connection failed!");
    } catch (error) {
        // Pass error to Express error-handling middleware
        next(error);
    }
});

// 3. Centralized Error-Handling Middleware (Must have 4 parameters: err, req, res, next)
app.use(async (err, req, res, next) => {
    if (!errorHandler.isTrustedError(err)) {
        return next(err);
    }
    await errorHandler.handleError(err, res);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

