import React from "react";

function Stock(props) {

  function handleSANDP() {
    if (props.purchased) {
      console.log(props.purchased)
      props.handleSale(props.stock);
    } else {
      console.log(props.purchased)
      props.handlePurchase(props.stock);
    }
  };

  return (
    <div onClick={handleSANDP}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
