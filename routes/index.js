const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    res.send('Hello!');
})

router.use('/contacts', require('./contacts.js'))

module.exports = router;