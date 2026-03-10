//  Redis and database


const express = require("express");

const app = express();

const { pool } = require("./db_connection");
const { redisClient } = require("./redis_connection");


app.get("/data", async (req, res) => {
    
    let redis_data = await redisClient.get('users');

    if(redis_data){
        console.log("Redis Data");
        res.send(JSON.parse(redis_data));
    }else{
    const data = await pool.query("select * from users");
       redisClient.set("users" , JSON.stringify(data));
       console.log("Database Data");
       res.send(data);
    }
});


app.get("/keys", async (req, res) => {
    const keys = await redisClient.keys('*')

    console.log(keys);

    res.send(keys);
})


app.get("/reset" , async (req,res)=>{
    // delete all keys and values
    let x = await redisClient.flushDb();
      console.log(x);

      res.send("Redis is reset");
})





app.listen(5000, () => {
    console.log("Server is listening");
})
