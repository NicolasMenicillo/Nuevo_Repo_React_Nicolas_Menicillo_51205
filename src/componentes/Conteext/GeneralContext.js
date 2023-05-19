import { useEffect, useState, createContext } from "react";

export const GeneralContext = createContext({ car: [] });

export const GeneralProvider = ({ children }) => {
    const [car, setCar] = useState([]);
    const [cars, setCars] = useState(0);
    const [upd, setUpd] = useState(false);

    const addToCar = (item, amount) => {
        if (!isInCar(item.id)) {
            item.amount = amount
            setCar((producto) => [...producto, { ...item, amount }]);
        } else {
            car.forEach((_item) => {
                if (_item.id === item.id) {
                    _item.amount += amount;
                }
            })
        }

        upd ? setUpd(false) : setUpd(true);
    };

    useEffect(() => {
        const addQtyCart = () => {
          const qty = car.reduce((acc, act) => acc + act.amount, 0);
          setCars(qty);
        };
      
        addQtyCart();
      }, [upd, car]);

    const removeToCar = (item) => {
        const newArray = car.filter(_item => item.id !== _item.id);
        setCar(newArray)
        upd ? setUpd(false) : setUpd(true);
    };

    const cleanCar = () => {
        setCar([]);
        upd ? setUpd(false) : setUpd(true);
    };

    const isInCar = (id) => {
        return car.some((item) => item.id === id);
    };

    return (
        <GeneralContext.Provider value={{ car, addToCar, removeToCar, cleanCar, cars }}>
            {children}
        </GeneralContext.Provider>
    )
}
