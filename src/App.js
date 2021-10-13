import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useState } from 'react';
import About from './MyComponents/About';
import AddTodo from './MyComponents/AddTodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
 /* let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  */

  const onDelete = (item) => {
    console.log("I am deleted!",item);

    setItems(items.filter((i) => {
      return i!==item;
    }));
  }
  const addTodo = (title, desc) => {
    console.log("I am added",title,desc);
    const newItem = {
      srno : items.length===0 ? 1 : items[items.length-1].srno+1,
      title : title,
      desc : desc,

    };

    setItems([...items,newItem]);
    console.log(newItem);
  }

  const [items, setItems] = useState([]);
  /*useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
     }, [items])*/

  return (
    <Router>
      <Header title="My Todos List" searchBar={false}/>

      <Switch>
          <Route exact path="/">
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={items} onDelete={onDelete}/>
            </>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          
         
        </Switch>

    


      <Footer/>
      </Router>
  );
}

export default App;
