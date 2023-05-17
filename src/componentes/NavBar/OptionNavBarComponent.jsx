import React from "react";
import { NavLink } from "react-router-dom";

const OptionNavBarComponent = (props) =>{
    const {category} = props;
    return(
        <NavLink className="hola" to={`/category/${category}`}>
            <span >{category}</span>
        </NavLink>
    )
}
    

export default OptionNavBarComponent;