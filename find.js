const {Usergame} = require ('./models')

Usergame.findAll().then(Usergame => {
  console.log(Usergame);
})