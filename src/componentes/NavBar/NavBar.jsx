import { NavLink } from "react-router-dom";
import Logo from './logo.png'
import { Fragment, memo, useContext, useMemo } from "react";
import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import useFirestore from "../../utils/useFirestore";
import { GeneralContext } from "../Conteext/GeneralContext";
const nameCollection = "categories";




const NavBar = () => {
    const { cars } = useContext(GeneralContext);
    const [data] = useFirestore({nameCollection});

    const dataProcess = useMemo(() => {
        const categoriesObject = data.length !== 0 ? data[0] : [];
        return "category" in categoriesObject ? categoriesObject.category : [];
      }, [data]);

    return (
        <Fragment>
            <div className="navbar">
                <div>
                    <NavLink to="/">
                        <img className="logo" src={Logo} alt="" />
                    </NavLink>
                </div>
                <ListOptionNavBarComponent categories={dataProcess} />

                <NavLink className= "carro" to="/products/car">
                    <h3 className="bi bi-cart">{cars}</h3> 
                </NavLink>
            </div>
        </Fragment>
    );
}

export default memo(NavBar);