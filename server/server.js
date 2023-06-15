const express = require('express')
const app = express() //this is an instance of the express method (kind of a class?)


//middleware
app.use(express.json())

app.get("/", (request, response)=>{
    response.write("<h1> Home for Superhero App </h1>")
    response.status(200)
    response.end()
})

app.listen(3001, ()=>{
    console.log("server is listening at port 3001")
})