var express = require('express');
var router = express.Router();

//Aqui van las rutas y metodos

router.get('/', (req, res, next) => {
  res.send('Bienvenido invocador');
});

router.get('/garen', (req, res, next) => {
  res.render('campeongaren',{nombre:'garen', pasiva:'perseverancia'});
});

module.exports = router;
