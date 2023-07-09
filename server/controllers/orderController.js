import Order from "../models/orderModel.js";
import Gig from "../models/gigModel.js";
import createError from "../utils/createError.js";


// ROUTE    /orders/
// DESC.    @GET (read) all completed orders
export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
            isCompleted: true,
        });
        res.status(200).send(orders);
    } catch (err) {
        next(err);
    }
};

export const getOrder = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};

// ROUTE    /orders/:gigId
// DESC.    @POST (create) an order for a gig
export const createOrder = async (req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.gigId);

        const newOrder = new Order({
            gigId: gig._id,
            img: gig.cover,
            title: gig.title,
            buyerId: req.userId,
            sellerId: gig.userId,
            price: gig.price,
            payment_intent: "temp",
        });

        await newOrder.save();

        res.status(200).send("success!");
    } catch (err) {
        next(err);
    }
};

// ROUTE    /orders/:id
// DESC.    @DELETE (delete) an order
export const deleteOrder = async (req, res, next) => {
    try {
    } catch (err) {
        next(err);
    }
};
