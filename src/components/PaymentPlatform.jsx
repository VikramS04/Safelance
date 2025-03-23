import React from "react";
import axios from "axios";
import { createOrder } from "../api";

export const PaymentPlatform = () => {
  const handlePayment = async () => {
    try {
      const amount = 500; // Amount in INR (you can make this dynamic)
      const { data } = await axios.post("http://localhost:5000/api/payment/create-order", { amount });

      const options = {
        key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
        amount: data.amount,
        currency: "INR",
        name: "Freelance Finance",
        description: "Secure Transaction",
        order_id: data.id,
        handler: function (response) {
          alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
        },
        theme: {
          color: "#0d3b66",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      alert("Razorpay ID Required;");
    }
  };

  return (
    <div className="text-center py-20">
      <h2 className="text-4xl font-bold">Secure Payment Platform</h2>
      <p className="text-gray-400 mt-4">
        Ensuring fair and transparent transactions for freelancers.
      </p>
      <button
        onClick={handlePayment}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPlatform;
