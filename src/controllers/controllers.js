import { createUserService } from "../services/createUser.service";
import { retrieveUserService } from "../services/retrieveUser.service";
import { userLoginService } from "../services/userLogin.service";

export const createUserController = async (request, response) => {
    const [status, user] = await createUserService(request.body);
  
    return response.status(status).json(user);
  };

export const userLoginController = async (request, response) => {
    const { email, password } = request.body;
  
    const [status, token] = await userLoginService(email, password);
  
    return response.status(status).json(token);
  };

export const retrieveUserController = (request, response) => {
    const [status, user] = retrieveUserService(request);
  
    return response.status(status).json(user);
  };