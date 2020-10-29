const express = require('express');
const budget = require("./budget");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
const budgetModel = require('./budget_schema.js')
let url = "mongodb://localhost:27017/personal_budget";

app.use(cors());
app.use('/', express.static('public'));
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.get('/budget', (req, res) => {
    res.json(budget);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.put("addEntry");
app.listen(port, () => {
    console.log('Example app listening at http;//localhost:${port}');
});

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to the database")
        budgetModel.find({})
        .then((data) => {
            console.log(data)
            mongoose.connection.close()
        })
        .catch((connectionError) =>{
            console.log(connectionError)
        })
    })
    .catch((connectionError) => {
        console.log(connectionError)
    })

    app.post('/addBudget', (req, res) => {
        console.log(req.body);
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            newBudget = {
                title: req.body.title,
                price: req.body.price,
                color: req.body.color,
            };
            budgetModel.insertMany(newBudget)
            .then((data) => {
                res.json(data);
                mongoose.connection.close();
            })
            .catch((connectionError) => {
                console.log(connectionError)
            });
        })
            .catch((connectionError) => {
                console.log(connectionError)
            });
    });