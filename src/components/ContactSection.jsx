import { useState } from "react";
import axios from "axios";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendContactForm = async (formData) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      setSuccessMessage(res.data.message);
      setFormData({ name: "", email: "", message: "" }); // Reset form after submission
    } catch (error) {

      alert("Form Submitted.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }
    sendContactForm(formData);
  };

  return (
    <div className="text-center py-20 bg-blue-600">
      <h2 className="text-4xl font-bold">Connect With Us</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg w-full font-semibold"
          disabled={loading}
        >
          {loading ? "Sending..." : "Register Now"}
        </button>
      </form>
      {successMessage && <p className="mt-4 text-green-200">{successMessage}</p>}
    </div>
  );
};

export default ContactSection;
