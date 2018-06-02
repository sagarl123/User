 //const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectId} = require('mongodb');
 var obj = new ObjectId();
 console.log(obj);
//creating a database
 MongoClient.connect('mongodb://localhost:27017/Users',(err, db)=>{
   if(err){
     return console.log('Unable to connect to MongoDB server');
   }
   console.log('Connected to MongoDB server');
   // db.collection('users').insertOne({
   //   text: 'do something',
   //   completed:false
   // },(err,result)=>{
   //   if(err){
   //     return console.log('unable to insert users',err);
   //   }
   //   console.log(JSON.stringify(result.ops,undefined,2));
   // });

   db.collection('Users').insertOne({
     username:'abc',
     password:'abc',
     email:'xyz@gmail.com',
     transaction:150,
     completed:true
   },(err,result)=>{
     if(err){
       return console.log('unable to insert Users',err);
     }
     console.log(JSON.stringify(result.ops,undefined,2));
   });
   db.close();
 });
