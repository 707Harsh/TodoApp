const mongoose = require('mongoose');

//connection url below
mongoose.connect('connectionURL/nameOfDB');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const Todos = mongoose.model('todos',todoSchema);
module.exports = {
    Todos
}
