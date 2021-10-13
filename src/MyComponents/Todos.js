import React from 'react'
import TodoItem from './TodoItem';
export default function Todos(props) {
    let todos_item_arr = props.todos;
    
    const myStyle = {
        minHeight : "100vh"
    };

    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {todos_item_arr.length === 0 ? "No todos to display" :   
            
                todos_item_arr.map((item)=> {
                return ( <TodoItem item={item} key={item.srno} onDelete={props.onDelete}/> );
                
                
            })
            
            }
          
           

        </div>
    )
}
