var express = require('express');
var router = express.Router();

router.get('/', (req, res) =>{
  res.json({
    reports: ['A', 'B', 'C', 'D'],
  });
});

router.post('/', (req, res) =>{
  res
    .status(201)
    .json(req.body);
});

router.put('/:id', (req, res) =>{
  res
    .status(201)
    .json(req.body);
});

router.delete('/:id', (req, res) => {
  res
    .status(204)
    .json('');
})

module.exports = router;
