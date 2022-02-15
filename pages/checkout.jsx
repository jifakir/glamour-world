import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from '../components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(`${process.env.PUBLISH_KEY}`);

const Checkout = () => {
  // const options = {
  //   // passing the client secret obtained from the server
  //   clientSecret: `sk_test_51KSxxsLPva6t8Wj1op7BsHgqCCN3RN7d4hIJSL87QzMjwbYclR9mvqwGqRYFcRZHkFBbV9PVo4jcJ1N5A1N0fG8Q00xEYffkXg`,
  // };
  // console.log("Client Secret: ", process.env.PUBLISH_KEY);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};


export default Checkout;