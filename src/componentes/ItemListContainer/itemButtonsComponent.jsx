import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";


const ItemButtonsComponent = ({ showDelete, showInfo, removeThisItem, idProduct }) => {

  
  const confirmDelete = () => {
    Swal.fire({
      title: "¿Deseas eliminar este producto del carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "¡El producto ha sido eliminado!",
          "",
          "success"
        );
        removeThisItem();
      }
    });
  };

  return (
    <Fragment>
      {showDelete ? (
        <button className="btn-danger" onClick={confirmDelete}>
          x
        </button>
      ) : (
        ""
      )}
      {showInfo ? (
        <NavLink to={`/products/${idProduct}`}>
          <button className="tarjetas-mas-info">Mas info</button>
        </NavLink>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ItemButtonsComponent;