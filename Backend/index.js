const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

//veritabanı bağlantısı
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "şifre",
    database: "dietwhisperer"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//kullanıcıları getirme
app.get("/api/get", (req, res) => {
    const sqlInsert = "SELECT * FROM dietwhisperer.users";
    db.query(sqlInsert, (err, result) => {
        console.log("error", err);
        console.log("result", result);
        res.send("kullanıcı listesi");
    });
    res.send("kullanıcı listesi");
});

// app.listen(5000, () => {
//     console.log("server is running on port 5000");
// });
