const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('about', {
    title: 'about',
    name: 'Takeda',
    age: 37
  });
});

router.get('/:id', (req, res) => {
  res.render('about', {
    title: 'about',
    name: 'Takeda',
    age: 37,
    id: req.query.id
  });
});

router.post('/', (req, res) => {
  res.send(`<h1>${req.params}</h1>`)
});
module.exports = router;