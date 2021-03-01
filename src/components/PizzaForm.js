import React from "react";

function PizzaForm({editPizza,setEditPizza, handleAddedPizza}) {

  // const [formData, setFormData] = useState({
  //   topping: "",
  //   size: "",
  //   vegetarian: ""
  // })

  function handleOnStupidChange(e){
    const name= e.target.name
    let value = (e.target.value === "Vegetarian")
    setEditPizza({
      ...editPizza,
      [name]: value
    })
  }

  
  function handleOnChange(e){
    
    const name= e.target.name
    let value= e.target.value
    
  
    setEditPizza({
      ...editPizza,
      [name]: value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${editPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editPizza),
    })
    .then(response => response.json())
    .then(handleAddedPizza)
  ;}
  
  
  if (!editPizza) return null
  const {topping,size,vegetarian} = editPizza

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleOnChange}
          />
        </div>
        <div className="col">
          <select onChange={handleOnChange} value={size} className="form-control" name="size">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
            onChange={handleOnStupidChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value= "Vegetarian"
              checked={vegetarian}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
            onChange={handleOnStupidChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
