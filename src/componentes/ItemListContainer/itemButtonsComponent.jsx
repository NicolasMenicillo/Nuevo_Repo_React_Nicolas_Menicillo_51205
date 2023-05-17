import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ItemButtonsComponent = ({ showDelete, showInfo, removeThisItem, idProduct }) => {
  return (
    <Fragment>
      {showDelete ? (
        <button className="btn-danger" onClick={removeThisItem}>
          x
        </button>
      ) : (
        ""
      )}
      {showInfo ? (
        <NavLink to={`/products/${idProduct}`}>
          <button className="tarjetas-mas-info">+ info</button>
        </NavLink>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ItemButtonsComponent;