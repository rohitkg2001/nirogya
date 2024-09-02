const Order = require("../models/orders.model");

module.exports = {
  createOrder: async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      return res.status(201).json(savedOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getOrders: async (req, res) => {
    try {
      const ordersList = await Order.find().populate("customer");
      if (!ordersList.length) {
        return res.status(404).json({ message: "No orders found" });
      }
      return res.status(200).json(ordersList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getOrderByID: async (req, res) => {
    try {
      const { order_id } = req.params;
      const foundOrder = await Order.findById(order_id).populate("customer");
      if (!foundOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
      return res.status(200).json(foundOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  updateOrderByID: async (req, res) => {
    try {
      const { order_id } = req.params;
      const updatedOrder = await Order.findByIdAndUpdate(order_id, req.body, {
        new: true,
      }).populate("customer");
      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  deleteOrderByID: async (req, res) => {
    try {
      const { order_id } = req.params;
      const deletedOrder = await Order.findByIdAndDelete(order_id);
      return res.status(200).json(deletedOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
       dashboard: async ( req, res ) =>
  {
         try
         {
           const orders = await order.find().orders()
           res.status( 200 ).send( { orders } )
         }
         catch ( error )
         {
           return res.status( 500 ).json( { error: error.message } );
         }
},


};
