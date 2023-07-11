import "./Pay.scss";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51NRmqrAcUIL08iGJhVi5u8pYhrNWxWBT5bRdM43eZpmBTDUam1Spqy1sRgOQMcv3rH6nIjQLw0hVq9fLpe4vHu2z00Z2dlw9le"
);

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
                setClientSecret(res.data.clientSecret);
            } catch (err) {
                console.log(err);
            }
        };

        makeRequest();
    }, []);

    const appearance = {
        theme: 'stripe',
    }
    const options = {
        clientSecret,
        appearance,
    }

    return (
        <div className="pay">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    )
};

export default Pay;
