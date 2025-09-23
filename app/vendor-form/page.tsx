'use client';

import { motion } from 'framer-motion';
import PageHeader from "../components/PageHeader";
import VendorPartnershipForm from "../components/VendorPartnershipForm";

export default function VendorFormPage() {
    return (
        <div className="bg-white font-sans">
            <PageHeader
                title="Vendor Partner Application"
                subtitle="Join our network of trusted equipment vendors"
                buttonText="Learn More"
                buttonHref="/partner-program"
                backgroundImage="/Images/header4.png"
                highlightWord="Partner"
            />
            
            <motion.div 
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                }}
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Become a Vendor Partner
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Partner with Vista Pacific Capital to offer your customers flexible financing solutions. 
                        Complete the application below to get started.
                    </p>
                </div>

                <VendorPartnershipForm />
            </motion.div>
        </div>
    );
}
