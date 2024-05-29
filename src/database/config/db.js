const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

const db = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASS ?? "", {
	host: process.env.BD_HOST,
	port: 3306,
	dialect: "mysql",
	define: {
		timestamps: false,
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	operatorAliases: false,
});

async function test() {
	try {
		await db.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
}

test();

module.exports = db;
