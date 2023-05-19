import React, { Fragment, useContext, useState, } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";
import { GeneralContext } from "../componentes/Conteext/GeneralContext";
import useFirestore from "../utils/useFirestore";
import ItemCountComponent from "../componentes/ItemListContainer/itemCountComponent";
const nameCollection = "productos";



const InformationViews = () => {
    const { id: documentId } = useParams();
    const { addToCar } = useContext(GeneralContext);
    const [data] = useFirestore({ nameCollection, documentId });
    const [amount, setAmount] = useState(0);
    const { title, description, image, price, } = data;




    const botonAgregar = (amount) => {
        setAmount(amount);
        addToCar(data, amount);
        notify(amount);
    };

    const notify = (amount) =>
    toast.success("Se ha agregado " + title + " x" + amount + " al carrito!", {
      position: "bottom-right",
      theme: "dark",
    });

    return (

        <Fragment>
            <div className="producto-informacion">
                <div className="producto-titulo">
                    <div>

                        <div className="producto-titulo-desc">
                            <h3>{title}</h3>
                            <p className="producto-descripcion">{description}</p>
                        </div>
                        <div>
                            <img className="producto-img" width={400} height={300} src={image} alt="" />
                        </div>
                        <div className="producto-precio-comprar">
                            <p className="producto-precio">${price}</p>
                            <ItemCountComponent
                                initial={0}
                                stock={10}
                                add={botonAgregar}
                            ></ItemCountComponent>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default InformationViews;