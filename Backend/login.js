const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "sifre",
    database: "dietwhisperer"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


module.exports.girisPOST = function (req, res) {
    //şifre ve eposta formdan gelecek
    const k_adi = "user1";
    const sifre = "123";

    var baglanti = db
    baglanti.connect(function (hata) {
        if (!hata) {
            console.log("Giriş Post için Veri tabanına başarıyla bağlandı!");
        } else {
            console.log(" Giriş Post için Veri tabanına Bağlanamadı !");
        }
    }); // bağlan


    sorgu = "select * from dietwhisperer.users where (email='" + k_adi + "') and (password='" + sifre + "')";
    baglanti.query(sorgu, function (hata, sonuc) {

        if (hata) {
            console.log("\n\n\n Hata Oluştu! \n\n\n");
            console.log(hata);


        } else {

            if (sonuc==0) // sonuç yoksa yanlış k_adi ve şifre girmiştir.
            {
                req.flash('yanlisgiris', 'Yanlış kullanıcı adı veya şifre');
                res.locals.message = req.flash();
            } else {

                req.session.admin = k_adi;
                res.redirect("/home");
            }
        }
    });
};





app.get("/register", (req, res) => {
    const sqlInsert = "INSERT INTO dietwhisperer.users (email,name,surname,password,gender,age,weight,height) VALUES ('user1@gmail.com','user1','user1','123','female',34, 40.78, 170.0)";
    db.query(sqlInsert, (err, result) => {
        console.log("error", err);
        console.log("result", result);
        res.send("hello express");
    });
    res.send("hello express");
});


app.listen(5000, () => {
    console.log("server is running on port 5000");
});
