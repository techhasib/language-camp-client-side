import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payement_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <h1 className="text-3xl font-bold">Payment Area</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
