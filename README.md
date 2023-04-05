# Twitter API

Tweteroo is a Twitter Clone API, built in Node.js using global variables in memory to persist data from users and tweets.

## About
The Tweteroo API allows users to register and post tweets on their profile. Tweets are stored in an array and can be accessed by the last 10 tweets. In addition, the API validates that the user is registered before allowing him to post a tweet.

## Key features
User registration with username and avatar
posting tweets
Access to the last 10 published tweets
Validation of registered users before posting tweets
Next steps
Implementing User Authentication
Add replies to tweets

## Technologies
node.js
express.js

The project was built in Node.js using the Express.js framework to handle HTTP requests.

## How to run the project

1.Clone the repository on your local machine.
2. Navigate to the project folder via the terminal.
3. Install the project's dependencies with the npm install command.
4. Start the application with the npm start command.
5. The application will be running on http://localhost:3000.

_____

# How to use the API

### POST /sign-up
To register a user, send a POST request to http://localhost:5000/sign-up with the following request body:

    {
        "username": "bobesponja",
        "avatar": "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png"
    }
    
 ### POST /tweets
To post a tweet, send a POST request to http://localhost:3000/tweets with the following request body:

    {
        "username": "bobesponja",
        "tweet": "Eu amo hambúrguer de siri!"
    }

### GET /tweets
To access the last 10 posted tweets, send a GET request to http://localhost:3000/tweets. The result will be an array with the following format:

    [
        {
            "username": "bobesponja",
            "avatar": "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
            "tweet": "Eu amo hambúrguer de siri!"
        }
    ]

If there is no tweet registered, the result will be an empty array.
