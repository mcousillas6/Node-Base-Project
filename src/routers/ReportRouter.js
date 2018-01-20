var express = require('express');
var router = express.Router();
var ReportController = require('../controllers/ReportController');

router.get('/', (req, res) => {
  ReportController.fetchAll().then(reports =>
    res.json({
      reports,
    })
  );
});

router.post('/', (req, res) =>{
  ReportController.create(req.body.report)
    .then((report) => {
      res
        .status(201)
        .json(report);
    })
    .catch((error) =>{
      res
        .status(422)
        .json(error);
    });

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
});

module.exports = router;
