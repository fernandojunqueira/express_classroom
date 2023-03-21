import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import users from "../db";

//...
export const userLoginService = async (email, password) => {
  const user = users.find((element) => element.email === email);

  if (!user) {
    return [ 401, { message: "Email ou senha inválidos" } ];
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    return [ 401, { message: "Email ou senha inválidos" } ];
  }

  const token = jwt.sign(
    { email },
    "SECRET_KEY",
    { expiresIn: "24h", subject: user.id }
  );

  return [ 200, { token } ]
};