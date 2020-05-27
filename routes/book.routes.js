const { Router } = require('express');
const router = Router();
const books = require('../book.json');
const authors = require('../author.json');
const _ = require('underscore');


// 2- Get all books with author
router.get('/all', (req, res) => {
    aux = [];
    _.each(books, (book) => {
        aux = aux.concat(book); // load all the books
        _.each(authors, (author) => {
            if(author.id == book.id){
                aux = aux.concat(author); //  load all authors
            }
        });
    });
    res.json(aux); // show result
});


// 4- add a book
router.post('/add', (req, res) => {
    const { name, authorID } = req.body;
    if(name && authorID){
        const id = books.length + 1;
        const newBook = { ...req.body, id};
        books.push(newBook);
        console.log('New book added successfully!');
    }else{
        res.send('Something was wrong')
    }
});

// 6- Modify a book
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { name, authorID} = req.body;
    if( name && authorID){
        _.each(books, (book, i) => {
            if(book.id == id){
                book.name = name;
                book.authorID = authorID;
                res.status(200);
            }
        });
    }else{
        res.status(500).json({error: 'Something went wrong trying to update book'})
    }
});


// 8- Delete a book
router.delete('/:id', (req, res) => {  // usamos underscore
    const {id} = req.params;
    _.each(books, (book, i) => {
        if (book.id == id){
            books.splice(i, 1)
        }else{
            res.send('This author does not exist')
        }
    });
    res.send(books);
});


module.exports = router;