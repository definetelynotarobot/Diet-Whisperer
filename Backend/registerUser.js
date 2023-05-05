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

//kullanıcı kayıt işlemi
//veriler formdan gelecek
app.get("/register", (req, res) => {
    const sqlInsert = "INSERT INTO dietwhisperer.users (email,name,surname,password,gender,age,weight,height) VALUES ('user1@gmail.com','user1','user1','123','female',34, 40.78, 170.0)";
    db.query(sqlInsert, (err, result) => {
        console.log("error", err);
        console.log("result", result);
        res.send("hello express");
    });
    res.send("hello express");
});


// app.listen(5000, () => {
//     console.log("server is running on port 5000");
// });
