import axios from 'axios';
export const DeleteAllTodos = function({onDeleteAll})  
{
    function handleDeleteAll(event)
    {
        event.preventDefault();
        let data = '';

        let config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: 'http://localhost:3000/deleteAllTodo',
          headers: {},
          data : data
        }; 

        axios.request(config)
        .then((response) => {
          onDeleteAll(response.data.newtodos);
        })
        .catch((error) => {
          console.log(error);
        });
    }


    return(                               
        <div>
            <h2>Add a Todo:</h2>
            <form onSubmit={handleDeleteAll}>
                <button type="submit">Delete all todos!</button>
            </form>
        </div>
    )
}
