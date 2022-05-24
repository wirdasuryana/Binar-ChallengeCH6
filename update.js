const { Usergame } = require('./models')

Usergame.update({
  id_level: "Beginner"
}, {
  where: {id: 3}
}).then(Usergame => {
  console.log();
})