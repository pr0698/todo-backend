const zod = require('zod');
const createTodo  =zod.object(
    {
        title: zod.string(),
        description:zod.string(),
        id:zod.number()
    }
)

const updateToDo = zod.object({
    id: zod.string(),
})

module.exports={
    createTodo : craeteTodo,
    updateToDo : updateToDo,
}