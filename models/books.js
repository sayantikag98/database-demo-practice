const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Schema is not a method but a property 


// creation of a new schema
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {timestamps: true});

// creation of a model 
// model method first argument will be the collection name in singular form (collection name is in plural)
// and then the schema name
const Book = mongoose.model("book", bookSchema);

module.exports = Book;
