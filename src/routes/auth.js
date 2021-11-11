const express = require('express');
const { signup, signin } = require('../controller/auth');
const router = express.Router();

router.post('/signup', signup);

router.post('/signin', signin);
// router.get('/', (req, res) => {
//     res.send('Hello from Ali');
// })

module.exports = router;