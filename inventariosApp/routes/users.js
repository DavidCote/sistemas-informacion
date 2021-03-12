var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('frmLogin',{});
});

//esto solo realiza el proceso de autenticacion
//pero aun no tiene elementos de seguridad
router.post('/login', (req,res,next)=>{
  //console.log(req.body.email, req.body.passwd);
  usuario.login(req.body.email, req.body.passwd, (e, d)=>{ //req.body.passwd SHA256
    if (d) {
      //res.send('Login correcto');
      ses=req.session;
      console.log(ses.id);
      ses.userdata = d;
      console.log(ses);
      res.redirect('/');
      //crear la session
      /*
      1 resuar sesion de chrome
      2 hacer nueva sesion. desechando la de chrome
      */
    }else {
      res.json(e);
    }

  });
});

router.get('/logout',(req, res, next)=>{
  req.session.destroy((falla)=>{
    if (falla) {
      res.send(501,"Error");
    }else {
      res.redirect('/');
    }
  });
});

module.exports = router;
