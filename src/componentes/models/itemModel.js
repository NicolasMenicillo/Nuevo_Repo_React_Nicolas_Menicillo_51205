const CarModel = {
    id: 0, //Number,
    title: "", //String,
    image: "", //String,
    description: "", //String,
    price: 0, //Number,
    category: "" //string
  };

  const ItemOrderModel = {
    card: CarModel, //Object
    amount: 0, //Number
  };
  
  const CollectionOrdersModel = {
    orders: [OrderModel],
  };