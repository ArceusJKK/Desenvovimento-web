const express = require ('express')
const app = express()
const port = 8005
const mongoose = require('mongoose')
const connectionString = ""

mongoose.connect(connectionString, {
    dbname: "DevsBar"
}).then(()=> {
    console.log("MongoDB up!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})

app.get('/lista-lanche', (req , resp) => {
    return resp.status (200).json(lanche)
})
app.post ('/adicionar-lanche', (req, resp) => {
    let lanche = req.body; 
    return resp.status(201).json("bebida adicionada com suceso!")
})

app.get('/lista-bebida', (req , resp) => {
    return resp.status (200).json(bebida)
})
app.post ('/adicionar-bebida', (req, resp) => {
    let bebida = req.body; 
    return resp.status(201).json("bebida adicionada com suceso!")
})

