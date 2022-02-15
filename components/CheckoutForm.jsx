import { useMemo } from 'react';
import {useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';


const useOptions = () => {

  const options = {
      style: {
        base: {
          fontSize: "1rem",
          color: "#424770",
          letterSpacing: "0.025em",
          padding: "5px 10px",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }

  return options;
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    console.log(event);
    event.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // const result = await stripe.confirmPayment({
    //   //`Elements` instance that was used to create the Payment Element
    //   elements,
    //   confirmParams: {
    //     return_url: "https://glamour-gql.herokuapp.com",
    //   },
    // });

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });


    if (payload.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(payload.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      console.log("Success");
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-2/5 bg-white p-5 shadow rounded-lg">
          <div className="">
            <h1 className="text-center pb-5 text-2xl font-bold">Stripe</h1>
          </div>
          <CardElement
              options={options}
              onReady={() => {
                console.log("CardElement [ready]");
              }}
              onChange={event => {
                console.log("CardElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardElement [blur]");
              }}
              onFocus={() => {
                console.log("CardElement [focus]");
              }}
            />
        <button disabled={!stripe} className="bg-sec w-full rounded py-2 text-pri font-bold mt-5">Pay</button>
      </form>
    </div>
  )
};

export default CheckoutForm;