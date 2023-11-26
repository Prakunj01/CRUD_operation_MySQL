const mysql = require('mysql2');
// const { Connection } = require('mysql2/typings/mysql/lib/Connection');

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'prakunj01',
    database:'crudapp'
})

 mysqlConnection.connect((err)=>{
    if(err){
        console.log('error while connection :' + JSON.stringify(err,undefined,2));
    }else{
        console.log('Connected to DB');
    }
})

module.exports=mysqlConnection