const express= require('express');
const mysql= require('mysql');
const cors= require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:  true}));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ama1568',
    database: 'haufe',
})

app.post("/register", (req, res) =>{
    const values= [
    req.body.name,
    req.body.email,
    req.body.password
    ]
    const sqlInsert=
     "INSERT INTO haufe.users (name, email, password) VALUES (?);";
    db.query(sqlInsert, [values], (err, data) =>{
        if (err){
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.post("/login", (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;
    const sqlInsert=
     "SELECT * FROM haufe.users WHERE email=? AND password=?;";
    db.query(sqlInsert, [email, password], (err, data) =>{
        if (err){
            return res.json("Error");
        }
        if (data.length >0){
            return res.json("Success");
        }
        else{
            return res.json("Failed");
        }
    });
});

app.get('/get', (req, res)=>{
    const sqlSelect=
     "SELECT * FROM haufe.movies;";
    db.query(sqlSelect, (err, result) =>{
        res.send(result);
    });
});

app.post("/recommend", (req, res) => {
    const { title, director, message, place, rating, posterUrl } = req.body;
    const sqlInsert = "INSERT INTO haufe.movies (title, director, message, loc, rating, img) VALUES (?, ?, ?, ?, ?, ?);";
    db.query(sqlInsert, [title, director, message, place, rating, posterUrl], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json("Error");
        }
        return res.status(200).json("Movie recommendation added successfully");
    });
});



app.listen(3001, () => {
    console.log("listening");
});
