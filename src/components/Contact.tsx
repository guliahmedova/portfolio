"use client";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-700 py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.h2
            className="text-3xl font-bold text-white mb-4"
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
            I’d love to hear from you! Whether you have a question, feedback, or
            just want to say hello, feel free to drop me a message. I’ll get
            back to you as soon as possible.
          </motion.p>
          <motion.div
            className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form
              action="https://formspree.io/f/your-form-id" // Replace with your Formspree form ID
              method="POST"
              className="flex flex-col space-y-4"
            >
              <label className="flex flex-col">
                <span className="text-gray-700">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Subject</span>
                <input
                  type="text"
                  name="subject"
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-700">Message</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                ></textarea>
              </label>
              <motion.button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
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
