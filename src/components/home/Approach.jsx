import { motion } from 'framer-motion';

const approachPoints = [
    {
        title: "Beyond Traditional Therapy",
        content: [
            "This isn't traditional therapy.",
            "We won't analyze your past endlessly.",
            "We won't try to fix your thoughts.",
            "We won't give you techniques to control your feelings."
        ]
    },
    {
        title: "What We'll Explore",
        points: [
            "Who you are beyond your thoughts",
            "What's genuinely important to you",
            "What's holding you back from living fully",
            "How to move through life with your heart open"
        ],
        footer: "Through direct experience, not theory. Through feeling, not thinking. Through being, not doing."
    }
];

const forYou = {
    positive: [
        "You're tired of living in your head",
        "You sense there's more to life than this",
        "You're ready to stop fighting yourself",
        "You want to live authentically, not perfectly",
        "You're willing to explore beyond conventional approaches"
    ],
    negative: [
        "You're looking for quick fixes",
        "You want to control your thoughts and feelings",
        "You're seeking traditional talk therapy",
        "You want someone to tell you who you are"
    ]
};

const Approach = () => {
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
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-20"
                >
                    {/* Our Approach Section */}
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-medium font-bold text-neutral-900 mb-8">
                            Our Approach
                        </h2>
                    </motion.div>

                    {/* Beyond Traditional Therapy */}
                    <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-12">
                            {approachPoints.map((section, index) => (
                                <div key={index} className="space-y-6">
                                    <h3 className="text-2xl font-medium text-neutral-900">
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {(section.content || section.points)?.map((point, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="mr-3 text-brand-500">•</span>
                                                <span className="text-neutral-600">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {/* Footer now outside the grid, spanning full width */}
                        <p className="text-neutral-600 italic mt-8 text-center">
                            Through direct experience, not theory. Through feeling, not thinking. Through being, not doing.
                        </p>
                    </motion.div>

                    {/* This is for you section */}
                    <motion.div variants={itemVariants} className="bg-neutral-50 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl font-medium font-bold text-neutral-900 mb-8 text-center">
                            This is for you if:
                        </h3>
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Positive points */}
                            <div className="space-y-4">
                                {forYou.positive.map((point, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="mr-3 text-brand-500">✓</span>
                                        <span className="text-neutral-600">{point}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Negative points */}
                            <div className="space-y-4">
                                <p className="font-medium text-neutral-900 mb-4">This isn't for you if:</p>
                                {forYou.negative.map((point, index) => (
                                    <div key={index} className="flex items-start">
                                        <span className="mr-3 text-neutral-400">×</span>
                                        <span className="text-neutral-500">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center space-y-6 max-w-3xl mx-auto"
                    >
                        <p className="text-xl text-neutral-600">
                            Ready to explore a different approach to healing and growth?
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-brand-500 border border-transparent rounded-md shadow-lg hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-200 hover:shadow-xl"
                        >
                            Begin Your Journey
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Approach;