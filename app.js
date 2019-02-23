const express = require("express");

app = express();
PORT = process.env.PORT || 3000;

let mode;
if (process.env.PORT) {
  mode = "production";
} else {
  mode = "development";
}

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use("/files", express.static(__dirname + "/public/files/"));
app.use("/scripts", express.static(__dirname + "/public/scripts/"));
app.use("/stylesheets", express.static(__dirname + "/public/stylesheets/"));

app.get("/", (req, res) => {
  res.render("index", { mode });
});
app.get("/download", (req, res) => {
  let file = __dirname + "/public/files/Andranik Atoyan CV.pdf";
  res.download(file);
});
app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server Running on ${PORT}`);
  }
});
