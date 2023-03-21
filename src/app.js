import { createUserController, retrieveUserController, userLoginController } from "./controllers/controllers"

app.post("/users", createUserController)
app.post("/login", userLoginController)

app.get("/users/:id", retrieveUserController)