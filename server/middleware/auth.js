const models = require('../models');
const Promise = require('bluebird');
// Promise.promisifyAll(models.Sessions);

module.exports.createSession = (req, res, next) => {
  req.session = {};
  req.session.hash = 0;
  res.cookies = {};
  res.cookies.shortlyid = {value: 0};

  console.log(req.cookies, 'cookie')
  if(Object.keys(req.cookies).length === 0){
    models.Sessions.create()
      .then((data) => data.insertId)
      // .then((id) => console.log(id, 'id'))
      .then((id) => models.Sessions.get({id: id}))
      .then((results) => {
        res.cookies['shortlyid'] = results.hash;
        // console.log(res.cookies, 'cookies!!!!!')
        // req.session = {};
        // req.session.hash = results.hash;
      })
    } else {
      console.log(req.cookies, 'req cookie')
      models.Sessions.get({id: req.cookies.shortlyid})
        .then((data) => { console.log(data) })
    }
    next()
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

