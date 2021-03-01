import React from "react";

function Pizza({pizza, handleClickEdit}) {
  const {topping, size, vegetarian} = pizza
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian? "Yes": "No"}</td>
      <td>
        <button onClick={()=>handleClickEdit(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
