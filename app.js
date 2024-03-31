const express = require("express");
// const bodyParser = require('body-parser');
const usersRoutes = require("./src/routes/usersRoutes.js");
const indexRoutes = require("./src/routes/indexRoutes.js");
const productsRoutes = require("./src/routes/productsRoutes.js");

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/users", usersRoutes);
app.use("/", indexRoutes);
app.use("/product", productsRoutes);

const port = 3131;
app.listen(port, () => {
	console.log(`El servidor corre en el puerto ${port}`);
});
