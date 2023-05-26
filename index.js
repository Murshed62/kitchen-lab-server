//server
const express = require('express');
const cors = require('cors');
const app = express()

const port =process.env.PORT || 5000;

app.use(cors());

const recipe= require('./fakeData/recipe.json');
const category = require('./fakeData/category.json')

app.get('/',(req,res) =>{
    res.send('Cooking in running')
})
app.get('/recipe',(req,res) =>{
    res.send(recipe);
})
app.get('/category',(req, res)=>{
    res.send(category)
})
app.get('/recipe/:id',(req, res) =>{
    const id = parseInt(req.params.id);
    console.log(id);
    const selectedChef = recipe.filter(n => parseInt(n.category__id) === id);
    res.send(selectedChef);
})

app.listen(port , () =>{
    console.log(`Cookking is continue at port: ${port}`)
})