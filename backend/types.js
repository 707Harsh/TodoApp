const z = require('zod');
const schema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    completed: z.boolean()
})
module.exports = {
    schema
}