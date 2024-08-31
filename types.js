const zod = require('zod');
const craeteTodo  =zod.object(
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
    craeteTodo : craeteTodo,
    updateToDo : updateToDo,
}