import React, { Fragment, useContext, useMemo } from "react";
import GeneralContext from "../Conteext/GeneralContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const collectionOrders = "orders";

const BuyComponent = () => {
  const { car, cleanCar } = useContext(GeneralContext);
  const navigate = useNavigate();

  const _totalCompra = useMemo(() => {
    return car.reduce((partialSum, item) => partialSum + item.price, 0);
  }, [car]);

  const _order = useMemo(() => {
    const items = car.map((item) => ({ item, amount: 1 }));
    const date = new Date().toLocaleDateString("es-AR");
    return { items, date };
  }, [car]);

  const actionBuy = () => {
    const db = getFirestore();
    const orderCollection = collection(db, collectionOrders);
    addDoc(orderCollection, _order).then(({ id }) => {
      alert(`Orden de compra creada folio: ${id}`);
      cleanCar();
      navigate("/");
    });
  };

  return (
    <Fragment>
      <section className="resumenCompra">
        <div className="resumenCompraInfo">
          <div>
            <h3>Resumen De La Compra:</h3>
          </div>
          <div>
            <p> Productos Seleccionados: {" "+car.length+" "} </p>
          </div>
          <div>
            <p>Total De La Compra: ${_totalCompra}</p>
          </div>
          <div>
            <h4>Gracias Por Elegirnos!!</h4>
          </div>
          <div>
            <button disabled={car.lenght === 0} onClick={actionBuy} className="resumenCompraBoton">Comprar</button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BuyComponent;