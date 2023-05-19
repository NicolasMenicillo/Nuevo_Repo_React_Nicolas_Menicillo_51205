import React, { useContext } from "react";

import { GeneralContext } from "../Conteext/GeneralContext";
import ItemButtonsComponent from "./itemButtonsComponent";


const ItemComponents = (props) => {
  const { data, showInfo, showDelete } = props;
  const { id: idProduct, title, image, description, price } = data;
  const { removeToCar } = useContext(GeneralContext);

  

  const showShortValue = (value = "", lengthMax = 45) => {
    return value.length > lengthMax
      ? value.substring(0, lengthMax).concat("...")
      : value;
  };

const removeThisItem = () =>{
  removeToCar(data);
};

  return (
    <div className="tarjetas">
      <div className="tarjetas-info-titulo">
      <h5 className="tarjetas-info">
        {showShortValue(title, 25)}
        <ItemButtonsComponent
        showInfo={showInfo} 
        showDelete={showDelete} 
        idProduct={idProduct}
        removeThisItem={removeThisItem} />
      </h5>
      </div>
      <div>
        <p>{showShortValue(description, 30)}</p>
        <img className="tarjetas-imagen" src={image} alt="" />
        <div className="tarjeta-precio-agregar">
          <p className="tarjeta-precio">${price}</p>
        </div>
      </div>
    </div>
  );
};


export default ItemComponents