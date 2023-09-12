const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello, World!');
});

baseRouter.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Both num1 and num2 should be numbers.'});
    }

    const result = num1 + num2;
    res.json({ result });
});


baseRouter.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json({ error: 'Both num1 and num2 should be numbers.'});
    }

    const result = num1 - num2;
    res.json({ result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});