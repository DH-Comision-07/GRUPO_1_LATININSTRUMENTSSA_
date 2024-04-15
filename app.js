const express = require("express");
const usersRoutes = require("./src/routes/usersRoutes.js");
const indexRoutes = require("./src/routes/indexRoutes.js");
const productsRoutes = require("./src/routes/productsRoutes.js");

const methodOverride = require ('method-override');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/users", usersRoutes);
app.use("/", indexRoutes);
app.use("/product", productsRoutes);


const port = 3131;
app.listen(port, () => {
	console.log(`El servidor corre en el puerto ${port}`);
});
