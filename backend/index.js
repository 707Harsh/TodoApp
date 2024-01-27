const express = require("express");
const { schema } = require("./types");
const { Todos } = require("./db");
const app = express();
app.use(express.json());

app.post("/addTodo",async (req,res)=>
{
    const todo = req.body;
    const parsedTodo = schema.safeParse(todo);
    if(!parsedTodo.success)
    res.status(411).json({
        msg:"invalid inputs"
    })
    await Todos.create({
        title: todo.title,
        description: todo.description,
        completed: false
    })
    res.json({
        msg: "Todo added successfully"
    })
})

app.get("/todos",async (req,res)=>
{
    const todos = await Todos.find();
    res.json({todos});
})

app.put("/updateTodo",async (req,res)=>
{
    const todo = req.body;
    const parsedTodo = schema.safeParse(todo);
    if(!parsedTodo.success)
    res.status(411).json({
        msg:"invalid inputs"
    })
    await Todos.update({
        _id: todo.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);
