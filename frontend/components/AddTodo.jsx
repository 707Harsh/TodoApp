import { useRef } from 'react';
import axios from 'axios';
export const AddTodo = function({onAdd})  
{                                    

    const titleref = useRef(null);
    const descref = useRef(null);

    function handleSubmit(event)
    {
        event.preventDefault();
        const title = titleref.current.value.trim();
        const desc = descref.current.value.trim();
        if(title && desc)
        {
            let data = ({
              "title": `${title}`,
              "description": `${desc}`,
              "completed": false
            });
    
            let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'http://localhost:3000/addTodo',
              headers: {},
              data : data
            }; 
    
            axios.request(config)
            .then((response) => {
              onAdd(response.data.newtodos);
              titleref.current.value = "";
              descref.current.value = "";
            })
            .catch((error) => {
              console.log(error);
            });
        }
    }


    return(                               
        <div>
            <h2>Add a Todo:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" ref={titleref}/>
                </div>
                <br />
                <div>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" id="description" ref={descref}/>
                </div>
                <br />
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}
