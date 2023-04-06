import express from "express";
import cors from "cors";
import Joi from "joi";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

const schema = Joi.object({
  username: Joi.string().required(),
  avatar: Joi.string().required(),
});

app.post("/sign-up", (req, resp) => {
  const { error } = schema.validate(req.body);

  if (error) {
    resp.status(400).send("Todos os campos são obrigatórios!");
    return;
  }

  users.push(req.body);

  return resp.status(201).send("OK");
});

app.post("/tweets", (req, resp) => {
  const username = req.header("user");
  const tweet = req.body.tweet;

  const isUserRegistered = users.find((user) => user.username === username);

  if (!isUserRegistered) {
    resp.status(400).send("UNAUTHORIZED");
    return;
  }

  tweets.push({ username, tweet });
  console.log(`Novo tweet de ${username}: ${tweet}`);

  return resp.status(201).send("OK");
});

app.get("/tweets", (req, resp) => {
  const latestTweets = tweets.slice(-10);

  const tweetAvatars = latestTweets.map((tweet) => {
    const user = users.find((user) => user.username === tweet.username);
    const avatar = user ? user.avatar : null;
    return { ...tweet, avatar };
  });

  return resp.status(200).send(tweetAvatars);
});

app.get("/tweets/:username", (req, resp) => {
  const { username } = req.params;

  const userTweets = tweets.filter((tweet) => tweet.username === username);

  if (userTweets.length === 0) {
    resp.status(200).send([]);
    return;
  }

  const tweetAvatars = userTweets.map((tweet) => {
    const user = users.find((user) => user.username === tweet.username);
    const avatar = user ? user.avatar : null;
    return { ...tweet, avatar };
  });

  return resp.status(200).send(tweetAvatars);
});

const DOOR = 5000;
app.listen(DOOR, () => console.log(`Servidor rodando na porta ${DOOR}`));
