import { motion } from 'framer-motion';
import oceanheartImage from '/oceanheart-raw.jpeg';

const Journey = () => {
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
                    className="space-y-10"
                >
                    {/* My Journey Section */}
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-medium font-bold text-neutral-900 mb-8">
                            My Journey
                        </h2>
                        {/* Centered Image */}
                        <div className="flex justify-center mb-8">
                            <div className="relative">
                                <img
                                    src={oceanheartImage}
                                    alt="Ocean Heart"
                                    className="rounded-full border border-white shadow-lg"
                                    style={{
                                        width: '300px',
                                        height: '300px',
                                        objectFit: 'cover',
                                        boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
                                    }}
                                />
                            </div>
                        </div>
                        <p className="text-md text-neutral-600 leading-relaxed">
                            I've walked this path. Through addiction, through the endless loops of thinking, through the exhausting search for answers. What I found wasn't another technique or theory. It was a fundamental shift in how I meet life.
                        </p>
                        <p className="mt-6 text-md text-neutral-600 leading-relaxed">
                            This work is born from lived experience, from falling and rising, from discovering what lies beyond the mind's solutions. From finding freedom not in perfection, but in authenticity.
                        </p>
                    </motion.div>

                    {/* What's Possible Section */}
                    <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8 md:p-12 shadow-md relative overflow-hidden ">
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white opacity-30 pointer-events-none" />

                        <h3 className="text-3xl font-medium text-center text-brand-500 mb-8">
                            What's Possible
                        </h3>
                        <ul className="space-y-4 text-md text-neutral-600">
                            <li className="flex items-center justify-center text-center">
                                <span className="mr-3 text-brand-500">•</span>
                                Living from your heart instead of your head
                            </li>
                            <li className="flex items-center justify-center text-center">
                                <span className="mr-3 text-brand-500">•</span>
                                Feeling deeply connected to yourself and others
                            </li>
                            <li className="flex items-center justify-center text-center">
                                <span className="mr-3 text-brand-500">•</span>
                                Moving through life with natural wisdom
                            </li>
                            <li className="flex items-center justify-center text-center">
                                <span className="mr-3 text-brand-500">•</span>
                                Being authentic without apology
                            </li>
                            <li className="flex items-center justify-center text-center">
                                <span className="mr-3 text-brand-500">•</span>
                                Finding peace without having to fix yourself
                            </li>
                            <li className="flex items-center justify-center text-center">
                                <span className="mr-3 text-brand-500">•</span>
                                Experiencing life vividly, directly, fully
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Journey;