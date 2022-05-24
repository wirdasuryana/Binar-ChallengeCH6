const { Usergamebiodata } =require('./models')

Usergamebiodata.create({
  age: "18",
  gender: "Female",
  country: "Indonesia",
  approved: false
}).then(Usergamebiodata =>{
  console.log();
})

Usergamebiodata.create({
  age: "25",
  gender: "Male",
  country: "Dutch",
  approved: false
}).then(Usergamebiodata =>{
  console.log();
})

Usergamebiodata.create({
  age: "21",
  gender: "Female",
  country: "Australia",
  approved: false
}).then(Usergamebiodata =>{
  console.log();
})

Usergamebiodata.create({
  age: "23",
  gender: "Male",
  country: "Belgia",
  approved: false
}).then(Usergamebiodata =>{
  console.log();
})

Usergamebiodata.create({
  age: "20",
  gender: "Male",
  country: "Singapore",
  approved: false
}).then(Usergamebiodata =>{
  console.log();
})