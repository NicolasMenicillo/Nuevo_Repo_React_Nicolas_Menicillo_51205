import React, { Fragment, useContext } from "react";
import { GeneralContext } from "../componentes/Conteext/GeneralContext";
import BuyComponent from "../componentes/ItemListContainer/BuyComponent";
import ItemButtonsComponent from "../componentes/ItemListContainer/itemButtonsComponent";

const DetailCar = (props) => {
    const { showInfo, showDelete } = props;
    const { car, removeToCar } = useContext(GeneralContext);

    const showShortValue = (value = "", lengthMax = 45) => {
        return value.length > lengthMax
            ? value.substring(0, lengthMax).concat("...")
            : value;
    };

    return (
        <Fragment>

            <div className="container">
                <BuyComponent />
                {car.map((item, index) => (
                    <div key={index}>
                        <div className="tarjetas">
                            <div className="tarjetas-info-titulo">
                                <h5 className="tarjetas-info">
                                    {showShortValue(item.title, 25)}
                                    <ItemButtonsComponent
                                        showInfo={showInfo}
                                        showDelete={showDelete}
                                        idProduct={item.id}
                                        removeThisItem={() => { removeToCar(item) }} />
                                </h5>
                            </div>
                            <div>
                                <p>{showShortValue(item.description, 30)}</p>
                                <img className="tarjetas-imagen" src={item.image} alt="" />
                                <div className="tarjeta-precio-agregar">
                                    <p className="tarjeta-precio">${item.price * item.amount}</p>
                                    <h4>Cantidad: {item.amount} </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </Fragment>
    );

};

export default DetailCar;
