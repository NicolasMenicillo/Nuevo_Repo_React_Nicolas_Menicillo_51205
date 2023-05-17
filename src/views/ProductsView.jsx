import React, { Fragment, useMemo, memo} from "react";

import ItemComponents from "../componentes/ItemListContainer/ItemComponents";
import { useParams } from "react-router-dom";
import useFirestore from "../utils/useFirestore";
const nameCollection = "productos";





const ProductsView = (props) => {
  const { category } = useParams();
  
  const options = useMemo(() => {
    const _optionwithFilter = {nameCollection, filters: { where: ["category", "==", category]} };
    const _optionwithOutFilter = {nameCollection};
    return category ?_optionwithFilter : _optionwithOutFilter;

  }, [category]);

  const [data, load] = useFirestore(options);


  return (
    <Fragment>

      <div className="container">
        {load ? (
          <h1>Cargando Productos...</h1>
        ) : (
          data.map((product, index) => {
            return (
              <div key={index}>
                <ItemComponents showInfo data={product} />
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
};

export default memo(ProductsView);