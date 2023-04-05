import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    username:
        "bobesponja",
    avatar:
        "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];

app.post("/sign-up", (req, resp) => {
  const { username, avatar } = req.body;

  if (username && avatar) {
    users.push(req.body);
    return resp
        .status(201)
        .send("OK");
  }
  return resp
    .status(400)
    .send("O nome de usuário e o avatar são obrigatórios!");
});

const DOOR = 5000;
app.listen(DOOR, () => console.log(`Servidor rodando na porta ${DOOR} ...`));
