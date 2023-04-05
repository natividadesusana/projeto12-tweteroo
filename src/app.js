import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, resp) => {
  const { username, avatar } = req.body;

  if (username && avatar) {
    users.push(req.body);
    return resp.status(201).send("OK");
  }
  return resp
    .status(400)
    .send("O nome de usuário e o avatar são obrigatórios!");
});

app.post("/tweets", (req, resp) => {
  const { username, tweet } = req.body;

  const userExists = users.find((user) => user.username === username);

  if (!userExists) {
    return resp
        .status(401)
        .send("UNAUTHORIZED");
  }

  const newTweet = { username, tweet };
  tweets.push(newTweet);
  console.log(`Novo tweet de ${username}: ${tweet}`);

  return resp
    .status(200)
    .send("OK");
});

app.get("/tweets", (req, resp) => {
  const lastTenTweets = tweets.slice(-10);

  const tweetsWithAvatar = lastTenTweets.map((tweet) => {
    const user = users.find((user) => user.username === tweet.username);
    const avatar = user ? user.avatar : null;
    return { ...tweet, avatar };
  });

  return resp
    .status(200)
    .send(tweetsWithAvatar);
});

const DOOR = 5000;
app.listen(DOOR, () => console.log(`Servidor rodando na porta ${DOOR} ...`));
