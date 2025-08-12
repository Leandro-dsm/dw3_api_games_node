import express, { json } from "express";
const app = express();

// Configuraçoes do express
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// criando retorno da api
app.get("/", (req, res) => {
    const games = [
   {
       tittle: "Delta",
       year: 2024,
       plataform: "PC (windows)",
       price: 0,
   },
    {
        tittle: "Diablo 3",
       year: 2009,
       plataform: "PC (windows)",
       price: 0,
    },
    {
        tittle: "League of Legends",
       year: 2009,
       plataform: "PC (windows)",
       price: 0,
    },
   ];
   res.json(games)
})
// Rodando API na porta 4000
const port = 4000;
app.listen(port, (error) =>{
    if (error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}`);
})
