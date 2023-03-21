import express from "express"
import { createUserController, retrieveUserController, userLoginController } from "./controllers/controllers"

const app = express()
app.use(express.json())

app.get("/", (request, response) => {
    return response.send("Hello Kenzie");
  });

app.post("/users", createUserController)
app.post("/login", userLoginController)

app.get("/users/:id", retrieveUserController)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`App rodando em http://localhost:${PORT}`)
})