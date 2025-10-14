// Importando o service
import userService from "../services/userService.js";

// Importando o jwt
import jwt from 'jsonwebtoken'
const JWTSecret = 'apithegames'

// Função para CADASTRAR um Usuário
const createUser = async (req, res) => {
  try {
    // Coletando os dados do corpo da requisição
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.status(201).json({ success: "Usuário cadastrado com sucesso!" }); // Cod. 201: CREATED
  } catch (error) {
    console.log(error);
    res.sendStatus(500); // Erro interno do servidor
  }
};

// FUNÇÃO para realizar o LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Buscando o usuário pelo email
    const user = await userService.getOne(email);
    // Se o usuário for encontrado
    if (user != undefined) {
        if (user.password == password){
          // gerando token
          jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (error, token) => {
            if (error) {
              res.status(400).json({error: "Não foi possível gerar token de autenticação."})
            } else {
              res.status(200).json({token})
            }
          })
    }else {
      //senha incorreta
      res.status(401).json({error: "Credenciais inválidas"})
      // cod. 401: UNATHORIZED
    }
      
    } else {
      res.status(404).json({ error: "Usuário não encontrado!" });
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser, JWTSecret };

