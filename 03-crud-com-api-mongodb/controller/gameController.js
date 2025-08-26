import gameServices from "../service/gameServices.js";
const getAllGames = async (req, res) => {
  try {
    const games = await gameServices.getAll();
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(200).json({ error: "Erro Interno do servidor." });
  }
};
// função para cadastrar jogos
const createGame = async (req, res) => {
    try{
        const {title, year, genre, plataform, price} = req.body
        await gameServices.Create(title, year, genre, plataform, price);
        res.sendStatus(201);//codigo 201 (create) : recurso criado
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do sevidor. "});
    }
};
export default { getAllGames, createGame };