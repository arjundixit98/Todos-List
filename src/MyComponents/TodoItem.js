import React from 'react'

export default function TodoItem(props) {
    let {item, onDelete} = props;
    let {title, desc} = item;
    return (
        <div>
            
            <h4>{title}</h4>
            <p>{desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => { onDelete(item)}}>Delete</button>
            <hr/>
        </div>
    )
}
