const { Router } = require('express');
const router = Router();
const book = require('../routes/book.routes');
const author = require('../routes/author.routes')

//routes
router.use('/api/authors', author);
router.use('/api/books', book);


module.exports = router;