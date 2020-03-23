const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3000

let companies = [];

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.post('/company', (req, res) => {
    const company = req.body;

    console.log(company);
    companies.push(company);

    res.send('Company is added to the database');
});

app.get('/company', (req, res) => {
    res.json(companies);
});

app.get('/company/:id', (req, res) => {
    const id = req.params.id;

    for (let company of companies) {
        if (company.id === id) {
            res.json(company);
            return;
        }
    }

    res.status(404).send('Company id not found');
});

app.delete('/company/:id', (req, res) => {
    const id = req.params.id;
    
    companies = companies.filter(i => {
        if(i.id !== id) {
            return true;
        }
        return false;
    });

    res.send('Company deleted');
});

app.post('/company/:id', (req, res) => {
    const id = req.params.id;
    const newComp = req.body;

    for (let i = 0; i < companies.length; i++) {
        let company = companies[i]

        if (company.id === id) {
            companies[i] = newComp;
        }
    }

    res.send('Company edited')
});


app.listen(port, () => console.log(`Company API app is listening on port: ${port}`));

