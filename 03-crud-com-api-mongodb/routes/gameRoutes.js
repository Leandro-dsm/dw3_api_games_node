import express from "express";
const gameRoutes = express.Router();
import gameController from "../controller/gameController.js";

// a camada de routes será responsavel por conter os ENDPOINTS da API

// ENDPOINT para listar
gameRoutes.get("/games", gameController.getAllGames);
// ENDPOINT para cadastrar
gameRoutes.post("/games", gameController.createGame);

export default gameRoutes;
