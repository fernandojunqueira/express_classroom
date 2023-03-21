import jwt from "jsonwebtoken"
import users from "../db";

export const retrieveUserService = (request) => {
    const authToken = request.headers.authorization;
  
    if (!authToken) {
      return [401, { message: "Missing authorization token." }];
    }
  
    const token = authToken.split(" ")[1];
  
    return jwt.verify(token, "SECRET_KEY", (error, decoded) => {
      if (error) {
        return [401, { message: error.message }];
      }
  
      const userId = request.params.id;
      const foundUser = users.find((user) => user.id === userId);
  
      return [200, foundUser];
    });
  };