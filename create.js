const { Usergame } = require('./models')

Usergame.create({
  username: "Stefanie Angel",
  password: "Fanie123",
  id_level: "Beginner",
  approved: false
}).then(Usergame =>{
  console.log();
})

Usergame.create({
  username: "Jimmy Black",
  password: "Jimmy456",
  id_level: "Private",
  approved: false
}).then(Usergame =>{
  console.log();
})

Usergame.create({
  username: "Angela White",
  password: "Angel789",
  id_level: "VIP",
  approved: false
}).then(Usergame =>{
  console.log();
})

Usergame.create({
  username: "Jonathan Rich",
  password: "Jonath234",
  id_level: "VIP",
  approved: false
}).then(Usergame =>{
  console.log();
})

Usergame.create({
  username: "Michael Angelo",
  password: "Michael567",
  id_level: "Beginner",
  approved: false
}).then(Usergame =>{
  console.log();
})

