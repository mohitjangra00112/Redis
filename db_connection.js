// npm i pg

const { users } = require("./users_data");

const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'Test1',
    port: '5432'

});


// pool.connect().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

// for single data 

// const adddata = async (data)=>{
//     const x = await pool.query('Insert into users (name , email) values ($1 , $2 ) returning * ;' , [name , email]);

//     console.log(x.rowCount);
//     console.log(x.rows);
// }


// for multiple data 


const adddata = async (data) => {

    for (const user of data) {
        const x = await pool.query(
            "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
            [user.name, user.email]
        );
    }

    console.log("data added to db ");
}

// let user = [{ name: "New User", email: "newusr@gmail.com" } , { name:"user2" , email:"usre2@gmail.com"}];
// adddata(user);


// add multiple users

// adddata(users);

module.exports = {pool};