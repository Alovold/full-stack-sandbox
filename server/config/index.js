//this functions as our file to log in to mySQL
//by means of a file called ".env"

//gitignore will by default not push any files with ".env" in front of them to github
//the .env file should be specific to anyone working on the same code-base

const dotenv = require("dotenv");

const envFound = dotenv.config();

if (!envFound){
    throw new Error("cannot find .env")
}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
    },
    port: parseInt(process.env.PORT)
}