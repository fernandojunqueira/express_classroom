import { hash } from "bcryptjs"
import { v4 } from "uuid"
import users from "../db"

export const createUserService = async ({ email,name,password}) => {
    const foundUser = users.find((user) => user.email === email)

    if (foundUser) {
        return [409, {message: "E-mail already exists."}]
    }

    const hashPassword = await hash(password,10)

    const newUser = {
        id : v4(),
        email,
        name,
        password: hashPassword
    }

    users.push(newUser)

    return [201, newUser]
}