const express = require('express');
const app = express();
const port = 3000;

const {MongoClient} = require("mongodb");

const url = 'mongodb://localhost:27017/';
const databasename = "SSDI-Sprint2";

app.get('/agents', async(req,res) => {
    MongoClient.connect(url ,{ useNewUrlParser: true })
        .then((client) => {
            const connect = client.db(databasename);
            // Connect to collection
            const collection = connect.collection("DemoDB");
        
            collection.find({}).toArray().then((ans) => {
            res.send(ans);
            });
    }).catch((err) => {
        // Printing the error message
        res.send(err.Message);
    })
});

app.listen(port, () => {
    console.log('The server is running on port', port);
});