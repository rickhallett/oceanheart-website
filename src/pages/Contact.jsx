import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tel: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for your form submission logic
        console.log('Form data submitted:', formData);

        // Replace the form with a thank you message
        setSubmitted(true);
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center bg-white overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white" />

            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
                {/* Contact Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1"
                >
                    <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Details</h2>
                    <p className="text-base text-neutral-600 mb-3">
                        <strong>Email:</strong> <a href="mailto:kai@oceanheart.ai" className="text-brand-500 underline">kai@oceanheart.ai</a>
                    </p>
                    <p className="text-base text-neutral-600 mb-3">
                        <strong>Tel:</strong> <a href="tel:07375862225" className="text-brand-500 underline">07375862225</a>
                    </p>
                    <p className="text-base text-neutral-600">
                        <strong>Schedule:</strong> <a href="https://calendar.app.google/RroUhPo1tz7RHhLo6" target="_blank" rel="noopener noreferrer" className="text-brand-500 underline">Book a slot on my calendar</a>
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-1"
                >
                    {!submitted ? (
                        <>
                            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Get in Touch</h2>
                            <form className="space-y-3">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="tel" className="block text-sm font-medium text-neutral-700">Tel</label>
                                    <input
                                        type="tel"
                                        id="tel"
                                        name="tel"
                                        value={formData.tel}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Optional Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="mt-1 block w-full border border-neutral-300 rounded-md shadow-sm p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
                                    ></textarea>
                                </div>
                                <button onClick={handleSubmit} className="w-full bg-brand-500 text-white font-medium py-2 rounded-md hover:bg-brand-600 transition-all duration-200 text-sm">
                                    Submit
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="text-center w-1/2 align-middle mx-auto text-brand-500">
                            <h2 className="text-lg font-semibold text-brand-800 mb-4">Thank You!</h2>
                            <p className="text-sm text-brand-500">Your message has been received. I will get back to you shortly.</p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        </section>
    );
};

export default ContactPage;