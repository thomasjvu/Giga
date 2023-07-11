import Order from "../models/orderModel.js";
import Gig from "../models/gigModel.js";
// import createError from "../utils/createError.js";
import Stripe from "stripe";

// ROUTE    /orders/create-payment-intent/:id
// DESC.    @POST (create) Stripe create payment intent
export const intent = async (req, res, next) => {
    const stripe = new Stripe(process.env.STRIPE);

    // Get Gig Price
    const gig = await Gig.findById(req.params.id);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: gig.price * 100,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
        },
    });

    const newOrder = new Order({
        gigId: gig._id,
        img: gig.cover,
        title: gig.title,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        payment_intent: paymentIntent.id,
    });

    await newOrder.save();

    res.status(200).send({
        clientSecret: paymentIntent.client_secret,
    });
};

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

// ROUTE    /orders/
// DESC.    @PUT (update) confirm an order
export const confirm = async (req, res, next) => {
    try {
        const orders = await Order.findOneAndUpdate(
            {
                payment_intent: req.body.payment_intent,
            },
            {
                $set: {
                    isCompleted: true,
                },
            }
        );

        res.status(200).send("Order has been confirmed!");
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

// ROUTE    /orders/:id
// DESC.    @GET (read) single completed order
// export const getOrder = async (req, res, next) => {
//     try {
//     } catch (err) {
//         next(err);
//     }
// };

// ROUTE    /orders/:gigId
// DESC.    @POST (create) an order for a gig
// export const createOrder = async (req, res, next) => {
//     try {
//         const gig = await Gig.findById(req.params.gigId);

//         const newOrder = new Order({
//             gigId: gig._id,
//             img: gig.cover,
//             title: gig.title,
//             buyerId: req.userId,
//             sellerId: gig.userId,
//             price: gig.price,
//             payment_intent: "temp",
//         });

//         await newOrder.save();

//         res.status(200).send("success!");
//     } catch (err) {
//         next(err);
//     }
// };
