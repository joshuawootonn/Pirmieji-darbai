import { Order } from "../models/Order.js";

const orders = [];

export const createOrder = ({
  id,
  name,
  orderedAt,
  completedAt,
  products,
  totalPrice,
}) => {
  try {
    const order = new Order({
      name,
      orderedAt,
      completedAt,
      products,
      totalPrice,
      id,
    });

    if (order) {
      orders.push(order); //insert into
      return order;
    }
  } catch (error) {
    console.error(error);
    return { error };
  }
};

export const getOrders = () => {
  return orders; //select from
  //su get funkcijom visada return!
};
