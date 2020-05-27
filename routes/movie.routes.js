const { Router } = require('express');
const router = Router();
const movies = require('../sample.json');

//route
router.get('/movies', (req, res) => {
    res.json(movies);
});


// router.post('/movies', (req, res) => {
//     const movie = req.body;
//     console.log(movie);
//     res.json();
// });

// router.post('/movies', (req, res) => {
//     console.log(req.body);
//     res.send('received');
// });


router.post('/movies', (req, res) => {
    const { id, nombre, fecha } = req.body;
    if( id && nombre && fecha){

        res.json('saved');
    }else{
        res.send('Error');
    }
});

module.exports = router;