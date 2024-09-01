const express = require('express');
const app =  express();
const {createTodo, updateToDo} = require('./types')
app.use(express.json());


app.post('/todo', async function(req,res){
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg: "You sent wrong inputs"
    })
    return;
   }
   await  todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed:false,
   })

   res.json({
    msg:"To do created"
   })
})




app.get('/todos',async function(req,res){
    const todos = await todo.find({});
    res.json({
        todos
    })
})

app.put('/completed',async function(req,res){
  const updatePayload =  req.body;
  const parsedPayload = updateToDo.safeParse(updatePayload);
  todo.update({
    _id:req.body.id
  },{
    complted:true,
  })
  res.json({
    msg:"to do marked as completed"
  })
  }
)

app.listen(3000);
