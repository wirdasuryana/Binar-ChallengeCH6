const { Usergame } =require('./models')

Usergame.destroy({
  where: {id:6}
}).then(() =>{
  console.log("data berhasil dihapus");
})

Usergame.destroy({
  where: {id:7}
}).then(() =>{
  console.log("data berhasil dihapus");
})

Usergame.destroy({
  where: {id:8}
}).then(() =>{
  console.log("data berhasil dihapus");
})

Usergame.destroy({
  where: {id:9}
}).then(() =>{
  console.log("data berhasil dihapus");
})

Usergame.destroy({
  where: {id:10}
}).then(() =>{
  console.log("data berhasil dihapus");
})