const express = require('express');
const app =  express();
const {createTodo, updateToDo} = require('./types')
app.use(exoress.json());


app.post('/todo',function(req,res){
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg: "You sent wrong inputs"
    })
    return;
   }
   else{
      // put it in mongodb

   }
})




app.get('/todos',function(req,res){
   
})

app.put('/completed',function(req,res){
  const updatePayload =  req.body;
  const parsedPayload = updateToDo.safeParse(updatePayload);
})

app.listen(3000);
