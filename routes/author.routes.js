const { Router } = require('express');
const router = Router();
const authors = require('../author.json');
const _ = require('underscore');




// 1- Get all authors
router.get('/all', (req, res) => {
    res.json(authors);
});


// 3- Add an author
router.post('/add', (req, res) => {
    const { name, lastname } = req.body;
    if(name && lastname){
        const id = authors.length + 1;
        const newAuthor = { ...req.body, id};
        authors.push(newAuthor);
        console.log('New author added successfully!');
    }else{
        res.send('Something was wrong')
    }
});

// 5- Modify an author
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { name, lastname} = req.body;
    if( name && lastname){
        _.each(authors, (author, i) => {
            if(author.id == id){
                author.name = name;
                author.lastname = lastname;
            }
        });
    }else{
        res.status(500).json({error: 'Something went wrong trying to update author'})
    }
});

// 7- Delete an author
router.delete('/:id', (req, res) => {  // usamos underscore
    const {id} = req.params;
    _.each(authors, (author, i) => {
        if (author.id == id){
            authors.splice(i, 1)
        }else{
            res.send('This author does not exist')
        }
    });
    res.send(authors);
});

module.exports = router;