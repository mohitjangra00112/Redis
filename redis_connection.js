// npm install redis

const {createClient} = require("redis");

const  redisClient = createClient({
    url:"redis://localhost:6379/"
}) 


redisClient.on('error' , (err)=> console.log('Redis Client Error', err));


async function connectRedis() {
    await redisClient.connect();
    console.log('Connected to Redis');

    // Example: set and get
    // await client.set('mykey', 'hello world');
    // const value = await client.get('mykey');
    // console.log('Value from Redis:', value);
}

connectRedis();

module.exports = {redisClient};