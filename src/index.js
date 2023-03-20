import express from "express"


// const express = require("express")

const app = express()

app.get("/", (req, res) => {
    return res.send("Hello, Express!")
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`App rodando em http://localhost:${PORT}`)
})