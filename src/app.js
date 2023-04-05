import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  {
    username: "bobesponja",
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
  },
];

const tweets = [
  {
    username: "bobesponja",
    tweet: "Eu amo hambúrguer de siri!",
  },
];

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
    return resp.status(401).send("UNAUTHORIZED");
  }

  const newTweet = { username, tweet };
  tweets.push(newTweet);
  console.log(tweets);

  return resp.send("OK");
});

app.get("/tweets", (req, resp) => {
  const lastTenTweets = tweets.slice(-10);

  const tweetsWithAvatar = lastTenTweets.map((tweet) => {
    const user = users.find((user) => user.username === tweet.username);
    return user ? { ...tweet, avatar: user.avatar } : tweet;
  });

  resp.send(tweetsWithAvatar);
});

const DOOR = 5000;
app.listen(DOOR, () => console.log(`Servidor rodando na porta ${DOOR} ...`));
