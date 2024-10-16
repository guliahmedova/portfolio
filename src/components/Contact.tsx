"use client";
import { motion } from "framer-motion";
import { FormEvent } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Contact = () => {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "29fe983a-ec37-417b-81fc-52a0b5879e4b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      form.reset();
      MySwal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  }

  return (
    <section className="py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.h2
            className="text-2xl md:text-4xl text-center tracking-wide select-none font-medium mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            className="text-lg text-white mb-8 text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I am excited to connect with you! Whether you have a question,
            feedback, or just want to chat, do not hesitate to reach out. I will
            respond as soon as I can.
          </motion.p>
          <motion.div
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex flex-col space-y-4"
            >
              <label className="flex flex-col">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none text-gray-950 focus:ring-2 focus:ring-gray-500 transition duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none text-gray-950 focus:ring-2 focus:ring-gray-500 transition duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Subject</span>
                <input
                  type="text"
                  name="subject"
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none text-gray-950 focus:ring-2 focus:ring-gray-500 transition duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none text-gray-950 focus:ring-2 focus:ring-gray-500 transition duration-300"
                ></textarea>
              </label>
              <motion.button
                type="submit"
                className="bg-gray-800 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
