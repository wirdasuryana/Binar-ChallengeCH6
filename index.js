const express =require('express');
const app = express()
const post = require ('./db/posts.jason')

app.set('view engine','ejs')
app.set(express.urlencoded({extended:false}))


app.get('/login', (req, res) => {
  res.render('index')
})

app.get('/login', (req, res) =>{
  res.status(200).send(post)
  console.log('data is taken');
})

app.listen(3000, () => {
  console.log('server is running');
})