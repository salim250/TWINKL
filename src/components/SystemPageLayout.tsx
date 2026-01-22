import { motion } from 'framer-motion';
import React from 'react';

type SystemPageLayoutProps = {
    title: string;
    subtitle: string;
    heroImage: string;
    content: React.ReactNode;
    sideImage?: string;
};

export const SystemPageLayout: React.FC<SystemPageLayoutProps> = ({
    title,
    subtitle,
    heroImage,
    content,
    sideImage,
}) => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    return (
        <div className="pt-20">
            {/* HERO */}
            <section
                className="relative h-[400px] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-primary/80"></div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 tracking-heading">
                        {title}
                    </h1>
                    <p className="text-xl font-body leading-relaxed">{subtitle}</p>
                </motion.div>
            </section>

            {/* CONTENT */}
            <motion.section
                className="py-20 bg-white"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* TEXT */}
                        <motion.div variants={fadeUp}>{content}</motion.div>

                        {/* IMAGE */}
                        {sideImage && (
                            <motion.div
                                variants={fadeUp}
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                                className="flex justify-center"
                            >
                                <img
                                    src={sideImage}
                                    alt={`${title} illustration`}
                                    className="w-full max-w-md rounded-xl shadow-lg object-cover"
                                />
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};
