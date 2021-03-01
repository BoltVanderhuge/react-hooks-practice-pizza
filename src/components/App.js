import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [editPizza, setEditPizza] = useState({})
  const [pizzas, setPizzas] = useState([])
  useEffect(()=> {
    fetch('http://localhost:3001/pizzas')
  .then(response => response.json())
  .then(setPizzas);

  }, [])
 
  function handleAddedPizza(freshza){
    const editedPizzas = pizzas.map((pizza)=>{
    if (pizza.id === freshza.id){
          return(freshza)
        }
        else {
          return(pizza)
        }
      
    })
    setPizzas(editedPizzas)
  }
  
  return (
    <>
      <Header />
      <PizzaForm editPizza={editPizza} setEditPizza={setEditPizza} handleAddedPizza={handleAddedPizza} />
      <PizzaList handleClickEdit={setEditPizza} pizzas={pizzas}/>
    </>
  );
}

export default App;
