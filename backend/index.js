const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

// mongoose.connect('mongodb://localhost/backend', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });
// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB');
// });

app.get('/', (req, res) => {
    res.end('hello from the backend')
})

app.get('/api/data', (req, res) => {
    Data.find({}, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error 5000' });
        } else {
            res.send('data is not their')
            res.json(data);
        }
    });
});

app.post('/api/data', (req, res) => {
    const newData = new Data(req.body);
    newData.save((err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(data);
        }
    });
});

app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    Data.findByIdAndUpdate(id, req.body, { new: true }, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(data);
        }
    });
});

app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id;
    Data.findByIdAndRemove(id, (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ message: 'Data deleted successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});