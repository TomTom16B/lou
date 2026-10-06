const express = require("express");
const multer = require("multer");


const app = express();
const PORT = 3000

const upload = multer({
    dest: "uploads/",
    limits: {
        fileSize: 50 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {

        const allowed = [
            "image/png",
            "image/jpeg",
            "image/webp"
        ];

        if (allowed.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Type de fichier non autorisé"));
        }
    }
});

app.use(express.static("public"));

app.post("/upload", (req, res) => {
    upload.single("file")(req, res, (err) => {
        if (err) {
            console.log("Erreur upload :", err.message);

            return res.status(400).send("Could not send this file.");
        }

        console.log(req.file);

        res.send("File sent!");
    });

});


app.listen(PORT, "0.0.0.0", () => {
    console.log("Serveur lancé");
});
