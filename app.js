const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/books");

const app = express();

const DBConnectionString = `mongodb+srv://Sayantikag:Sayantika98@database-practice.3cjpm.mongodb.net/dbPractice?retryWrites=true&w=majority`;
// Username = Sayantikag
// Password = Sayantika98
// Database_name = dbPractice
// change these three fields in the connection string that was copied from mongoDB site

mongoose.connect(DBConnectionString) // returns promise
.then(result => {
    console.log("Database connected");
    app.listen(3000); // Server should start listening to requests only when the database has connected
})
.catch(error => {
    console.log(error);
});

app.get("/add-book", (req, res) => {
    // Adding a new document in the collection
    const book = new Book({
        title: "Adventures of Sherlock Holmes",
        author: "Sir Authur Conan Dayle",
        category: "Mystery thriller"
    });
    book.save()  // returns promise
    .then(result => {
        console.log(result);
        res.send(result);
    })
    .catch(error => {
        console.log(error);
    });
});

app.get("/book-list", (req, res) => {
    Book.find()  // displays all the documents in the collection
    .then(result => {
        res.send(result);
    })
    .catch(error => {
        console.log(error);
    })
});


