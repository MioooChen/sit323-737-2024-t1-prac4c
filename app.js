const express = require('express');
const app = express();

app.use(express.json()); // Used to parse JSON request body

function validateNumbers(num1, num2) {
    if (typeof num1 !== 'number') {
        return 'First input is not a valid number';
    }
    if (typeof num2 !== 'number') {
        return 'Second input is not a valid number';
    }
    return null;
}

// Addtion endpoint
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    const error = validateNumbers(num1, num2);
    if (error) {
        return res.status(400).json({ error });
    }
    const result = num1 + num2;
    res.json({ result });
});

// Subtraction endpoint
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    const error = validateNumbers(num1, num2);
    if (error) {
        return res.status(400).json({ error });
    }
    const result = num1 - num2;
    res.json({ result });
});

// Multiplication endpoint
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    const error = validateNumbers(num1, num2);
    if (error) {
        return res.status(400).json({ error });
    }
    const result = num1 * num2;
    res.json({ result });
});

// Division endpoint
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    const error = validateNumbers(num1, num2);
    if (error) {
        return res.status(400).json({ error });
    }
    if (num2 === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    const result = num1 / num2;
    res.json({ result });
});

// exponentiation
app.post('/power', (req, res) => {
    const { num1, num2 } = req.body;
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Invalid input numbers' });
    }
    const result = Math.pow(num1, num2);
    res.json({ result });
});

// square root
app.post('/sqrt', (req, res) => {
    const { num } = req.body;
    if (typeof num !== 'number') {
        return res.status(400).json({ error: 'Invalid input number' });
    }
    if (num < 0) {
        return res.status(400).json({ error: 'Cannot compute square root of negative number' });
    }
    const result = Math.sqrt(num);
    res.json({ result });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));