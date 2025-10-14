import jwt from "jsonwebtoken";
import userController from "../controllers/userController.js";

// Função de autenticação para verificar se o usuário está enviando o token e se ele é válido
const Authorization = (req, res, next) => {
  const authToken = req.headers["authorization"];
  if (authToken != undefined) {
// Dividindo a string do token
const bearer = authToken.split(" ")  //(" ") corta o token onde tem espaço no meio das aspas
const token = bearer[1]
//Validando o Token.  (split corta o token)
jwt.verify(token,userController.JWTSecret, (error,data) => {
  if (error) {
    res.status(401).json({error:"Token Inválido"})
    // Token Inválido
  } else {
    req.token = token;
    req.loggedUser = {
      id: data.id,
      email: data.email,
    };
    next();
  }
});
  } else {
    res.status(401).json({ error: "Acesso não autorizado. Token inválido" });
  }
};

export default { Authorization };
