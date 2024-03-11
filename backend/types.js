const z = require('zod');
const schema1 = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    completed: z.boolean()
})
const schema2 = z.object({
    title: z.string()
});
module.exports = {
    schema1,
    schema2
}