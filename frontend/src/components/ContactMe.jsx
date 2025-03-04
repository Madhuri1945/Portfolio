import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = ({ isTheme }) => {
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.from_name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.from_email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.from_email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // Clear errors if form is valid

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Email sent successfully!");
        e.target.reset(); // Clear the form
      } else {
        toast.error("Failed to send email. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center mb-15  "
      id="contact"
    >
      <h2 className="text-4xl text-center font-bold mb-8">Contact</h2>
      <div
        className={`w-full max-w-md p-8  shadow-lg shadow-pink-200 rounded-2xl ${
          isTheme ? "bg-[#eee]" : "bg-white"
        }`}
      >
        <form className="space-y-6 " onSubmit={sendEmail}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={`w-full px-4 py-2 border-b ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-purple-500 focus:border-b-[2px]`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={`w-full px-4 py-2 border-b ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-purple-500 focus:border-b-[2px]`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`w-full px-4 py-2 border-b ${
                errors.message ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:border-purple-500 focus:border-b-[2px]`}
              rows="3"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-500 via-pink-500 text-white font-bold rounded-lg shadow-md transition duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;
