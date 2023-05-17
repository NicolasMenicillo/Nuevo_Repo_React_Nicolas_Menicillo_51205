import React, { Fragment, useContext } from "react";
import GeneralContext from "../componentes/Conteext/GeneralContext";
import ItemComponents from "../componentes/ItemListContainer/ItemComponents";
import BuyComponent from "../componentes/ItemListContainer/BuyComponent";

const DetailCar = () => {
    const { car } = useContext(GeneralContext);
    return (
        <Fragment>
            
            <div className="container">
                <BuyComponent />
            {car.map((item, index) => (
               <div key={index}>
                <ItemComponents showDelete data = {item} />
               </div>
            ))}
            </div>
            
        </Fragment>
    );

};

export default DetailCar;
