import jwt from "jsonwebtoken";
import userController from "../controllers/userController";

// a função de autenticação para verificar se o usuáro está enviando o token e se ele é valido
const Authorization = (req,res,next) => {
    const authToken = req.headers['authorization']
    if (authToken != undefined) {
        next()
    } else {
        res.status(401).json({error: "Token inválido"});
        }
    };

export default {Authorization};