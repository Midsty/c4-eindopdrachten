const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.unsubscribe(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "angulartest"
})

app.get('/', (req, res)=> {
    const sql = "SELECT * FROM personen";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO personen (`Voornaam`, `Achternaam`, `Straat`) VALUES (?)";
    const VALUES = [
        req.body.Voornaam,
        req.body.Achternaam,
        req.body.Straat,
    ]
    db.query(sql, [VALUES], (err, data) => {
        if(err) return res.json(err);
        return res.json("Aangemaakt");
    })
})

app.listen(8081, ()=> {
    console.log("listening...");
})