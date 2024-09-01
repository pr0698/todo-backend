const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://srivastavapratham06:Aksri@1966@cluster0.b3w4i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Booleon
})

const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}


