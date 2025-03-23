import axios from "axios";

export const sendContactForm = async (formData) => {
  try {
    const res = await axios.post("http://localhost:5000/api/contact", formData);
    alert(res.data.message);
  } catch (error) {
    console.error("Contact Form Error:", error);
  }
};

export const createOrder = async (amount) => {
  try {
    const { data } = await axios.post("http://localhost:5000/api/payment/create-order", { amount });
    return data;
  } catch (error) {
    console.error("Payment Error:", error);
    throw error;
  }
};
