import { motion } from 'framer-motion';
import Testimonials from '../../pages/Testimonials';
import Sandbox from '../../pages/Sandbox';

const WorkTogether = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="relative py-20 bg-gradient-to-br from-brand-50 to-white overflow-hidden">
            {/* Decorative top and bottom dividers */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-20"
                >
                    {/* Working Together Section */}
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-medium font-bold text-neutral-900 mb-8">
                            Working Together
                        </h2>
                    </motion.div>

                    {/* Individual Journey Section */}
                    <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8 md:p-12 shadow-md relative overflow-hidden">
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white opacity-30 pointer-events-none" />

                        <div className="flex flex-col md:flex-row justify-around gap-8 my-10">
                            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-80 text-center">
                                <h3 className="text-1xl font-semibold mb-4">OceanHeart Basic</h3>
                                <p className="text-md mb-4">£240/month</p>
                                <p className="text-gray-600 mb-6">Once a week hourly sessions</p>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                                    Book Now
                                </button>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-80 text-center">
                                <h3 className="text-1xl font-semibold mb-4">OceanHeart Enhanced</h3>
                                <p className="text-md mb-4">£480/month</p>
                                <p className="text-gray-600 mb-6">Twice a week hourly sessions</p>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                                    Book Now
                                </button>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-80 text-center">
                                <h3 className="text-1xl font-semibold mb-4">OceanHeart Unlimited</h3>
                                <p className="text-md mb-4">Custom Quote</p>
                                <p className="text-gray-600 mb-6">Go deeper into your journey with tailored sessions</p>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                                    Contact for Quote
                                </button>
                            </div>
                        </div>

                    </motion.div>

                    {/* Words From Fellow Travelers */}
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-medium bold text-brand-500 mb-6">
                            Words From Fellow Travelers
                        </h3>

                        <Testimonials />
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div variants={itemVariants} className="text-center space-y-8 max-w-3xl mx-auto">
                        <h3 className="text-3xl font-medium text-brand-500 mb-6">
                            Begin Your Journey
                        </h3>
                        <p className="text-xl text-neutral-600 leading-relaxed">
                            The first step is a conversation. Not about techniques or goals. But about what's real for you right now. About what you're longing for. About what might be possible.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brand-500 border border-transparent rounded-md shadow-lg hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-200 hover:shadow-xl"
                        >
                            Schedule a Conversation
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkTogether;