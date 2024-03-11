const express = require("express");
const { schema1, schema2 } = require("./types");
const { Todos } = require("./db");
const app = express();
const cors = require('cors');
app.use(cors());                                // to prevent CORS error.
app.use(express.json());

app.post("/addTodo",async (req,res)=>
{
    const todo = req.body;
    const parsedTodo = schema1.safeParse(todo);
    if(!parsedTodo.success)
    res.status(411).json({
        msg:"invalid inputs"
    })
    else
    {
        await Todos.create({
            title: todo.title,
            description: todo.description,
            completed: false
        })
        const newtodos = await Todos.find();
        res.json({newtodos});
    }
})

app.get("/todos",async (req,res)=>
{
    const todos = await Todos.find();
    res.json({todos});
})

app.put("/updateTodo",async (req,res)=>
{
    const todo = req.body;
    const parsedTodo = schema2.safeParse(todo);
    if(!parsedTodo.success)
    res.status(411).json({
        msg:"invalid inputs"
    })
    else
    {
        await Todos.updateOne({
            title: todo.title
        },{
            completed: true
        })
        res.json({
            msg: "Todo marked as completed"
        })
    }
})

app.put("/deleteAllTodo",async (req,res)=>
{
    const newtodos = await Todos.deleteMany();
    res.json({
        newtodos:[],
        msg: `${newtodos.deletedCount} todos were deleted`
    })
})

app.use((err,req,res,next)=>
{
	res.status(500).send("  Something went wrong :(  ")
})

app.listen(3000);
