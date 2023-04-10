import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];

function validateUser(user) {
  return (
    user.username &&
    typeof user.username === "string" &&
    user.avatar &&
    typeof user.avatar === "string"
  );
}

app.post("/sign-up", (req, resp) => {
  const user = req.body;

  if (!validateUser(user)) {
    resp.status(400).send("Todos os campos são obrigatórios!");
    return;
  }

  users.push(user);

  return resp.status(201).send("OK");
});

app.post("/tweets", (req, resp) => {
  const username = req.header("user");
  const tweet = req.body.tweet;

  const isUserRegistered = users.find((user) => user.username === username);

  if (!isUserRegistered) {
    resp.status(401).send("UNAUTHORIZED");
    return;
  }

  if (!tweet || typeof tweet !== "string" || tweet.trim().length === 0) {
    resp.status(400).send("Tweet inválido");
    return;
  }

  tweets.push({ username, tweet });
  console.log(`Novo tweet de ${username}: ${tweet}`);

  return resp.status(201).send("CREATED");
});

app.get("/tweets", (req, resp) => {
  const latestTweets = tweets.slice(-10);

  if (latestTweets.length > 10) {
    latestTweets = latestTweets.slice(latestTweets.length - 10);
  }

  const tweetAvatars = latestTweets.map((tweet) => {
    const user = users.find((user) => user.username === tweet.username);
    const avatar = user ? user.avatar : null;
    return { ...tweet, avatar, username: tweet.username, tweet: tweet.tweet };
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
    return { ...tweet, avatar, username: tweet.username, tweet: tweet.tweet };
  });

  return resp.status(200).send(tweetAvatars);
});

const DOOR = 5000;
app.listen(DOOR, () => console.log(`Servidor rodando na porta ${DOOR}`));
