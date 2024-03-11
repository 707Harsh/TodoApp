import { useState } from "react"
import axios from 'axios';


export function Todos ({title,description})
{
    const [mark,setMark] = useState("Mark as done?")

    function updateTodo()
    {
        let data = ({
          "title": `${title}`
        });
        let config = {
          method: 'put',
          maxBodyLength: Infinity,
          url: 'http://localhost:3000/updateTodo',
          headers: {},
          data : data
        };
        axios.request(config)
        .then((response) => {
            setMark("Done !!")
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return(
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={()=>{
                if(mark==="Mark as done?")
                updateTodo();
            }}>{mark}</button><br /><br />
        </div>
    )
}