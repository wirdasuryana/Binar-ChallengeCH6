const { Usergamehistory} =require('./models')

Usergamehistory.create({
  playtime: "2 hours",
  score: "50",
  approved: false
}).then(Usergamehistory =>{
  console.log();
})

Usergamehistory.create({
  playtime: "5 hours",
  score: "150",
  approved: false
}).then(Usergamehistory =>{
  console.log();
})

Usergamehistory.create({
  playtime: "7 hours",
  score: "1000",
  approved: false
}).then(Usergamehistory =>{
  console.log();
})

Usergamehistory.create({
  playtime: "10 hours",
  score: "5000",
  approved: false
}).then(Usergamehistory =>{
  console.log();
})

Usergamehistory.create({
  playtime: "15 hours",
  score: "7000",
  approved: false
}).then(Usergamehistory =>{
  console.log();
})