# Tweteroo API

Tweteroo is a Twitter Clone API, built in Node.js using global variables in memory to persist data from users and tweets.

<div>
    <img width="238" alt="Captura de Tela 2023-04-10 às 21 30 44" src="https://user-images.githubusercontent.com/95102911/231024891-acf8fde1-a0d4-4a9a-83e8-489be36fcc2c.png">
    <img width="239" alt="Captura de Tela 2023-04-10 às 21 31 08" src="https://user-images.githubusercontent.com/95102911/231024941-c9a6593a-ef97-4d33-9d74-babc9c50d68e.png">
</div>


## About
The Tweteroo API allows users to register and post tweets on their profile. Tweets are stored in an array and can be accessed by the last 10 tweets. In addition, the API validates that the user is registered before allowing him to post a tweet.

<hr/>

## Key features
User registration with username and avatar
posting tweets
Access to the last 10 published tweets
Validation of registered users before posting tweets
Next steps
Implementing User Authentication
Add replies to tweets

<hr/>

## Technologies

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)&nbsp;
![Express.js](https://img.shields.io/badge/Express.js-20B2AA?style=for-the-badge&logo=express&logoColor=white)&nbsp;

The project was built in Node.js using the Express.js framework to handle HTTP requests.

<hr/>

## How to run the project

1.Clone the repository on your local machine.
2. Navigate to the project folder via the terminal.
3. Install the project's dependencies with the npm install command.
4. Start the application with the npm start command.
5. The application will be running on http://localhost:5000.

<hr/>

# How to use the API

### POST /sign-up
To register a user, send a POST request to http://localhost:5000/sign-up with the following request body:

    {
        "username": "bobesponja",
        "avatar": "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
    }
    
 ### POST /tweets
To post a tweet, send a POST request to http://localhost:5000/tweets with the following request body:

    {
        "username": "bobesponja",
        "tweet": "Eu amo hambúrguer de siri!"
    }

### GET /tweets
To access the last 10 posted tweets, send a GET request to http://localhost:5000/tweets. The result will be an array with the following format:

    [
        {
            "username": "bobesponja",
            "avatar": "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
            "tweet": "Eu amo hambúrguer de siri!"
        }
    ]

If there is no tweet registered, the result will be an empty array.
