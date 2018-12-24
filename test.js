const Sequelize = require('sequelize');
var users=require("./models/users")
const sequelize = new Sequelize('hrm', 'root', '123456', {
    host: 'localhost',
    port:3306,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
var _users=users(sequelize, Sequelize);
_users.sync({force:true}).then(r=>{
 var x=1;
}).catch(ex=>{
    console.log(e);
})
// _users.build({
//     Username:"admin",
//     HashPassword:"admin"
// }).save().then(ret=>{
//     console.log(ret);
// }).catch(e=>{
//     console.log(e);
// })

// var x=_users;