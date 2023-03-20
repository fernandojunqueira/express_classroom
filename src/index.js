// import express from "express";
// import { v4 as uuidv4 } from "uuid";

// const users = [];

// const app = express();
// app.use(express.json());

// app.post("/user", (request, response) => {
//   const { email, name } = request.body

//   const userAlrealdyExists = users.find((user) => user.email === email);

//   if (userAlrealdyExists) {
//     return response.status(400).json({
//       error: "This email address is already being used"
//     });
//   }

//   const newUser = {
//     id: v4(),
//     email,
//     name,
//   }

//   users.push(newUser);

//   return response.status(201).json(newUser);
// });

// app.get("/", (request, response) => {
//   return response.send("Hello Kenzie");
// });

// app.listen(3000);
import express from "express"
import { v4 } from "uuid"
const users = []

const app = express()
app.use(express.json())

app.post("/users", (request, response) => {
    const { email, name } = request.body

    const userAlrealdyExists = users.find((user) => user.email === email)

    if (userAlrealdyExists) {
        return response.status(400).json({
          error: "This email address is already being used"
        });
      }

    const newUser = {
        id: v4(),
        email,
        name
    }

    users.push(newUser)

    return response.status(201).json(newUser)
})

app.get("/", (request, response) => {
    return response.send("Hello Kenzie");
  });

const PORT = 3000

app.listen(PORT, () => {
    console.log(`App rodando em http://localhost:${PORT}`)
})