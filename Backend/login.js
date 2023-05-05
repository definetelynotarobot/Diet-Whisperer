const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

//veritabanı bağlantısı
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
    const email = "user1";
    const sifre = "123";

    db.connect(function (hata) {
        if (!hata) {
            console.log("Giriş Post için Veri tabanına başarıyla bağlandı!");
        } else {
            console.log(" Giriş Post için Veri tabanına Bağlanamadı !");
        }
    }); // bağlan

    sorgu = "SELECT * FROM dietwhisperer.users WHERE (email='" + email + "') and (password='" + sifre + "')";
    baglanti.query(sorgu, function (hata, sonuc) {
        if (hata) {
            console.log("\n\n\n Hata Oluştu!");
            console.log(hata);

        } else {

            if (sonuc==0) // sonuç yoksa yanlış bilgi girilmiştir
            {
                req.flash('Error', 'Yanlış email veya şifre');
                res.locals.message = req.flash();
            } else {

                req.session.admin = email;
                res.redirect("/home");
            }
        }
    });
};



// app.listen(5000, () => {
//     console.log("server is running on port 5000");
// });
