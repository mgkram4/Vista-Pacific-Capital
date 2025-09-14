'use client';

import { motion } from 'framer-motion';
import NewVendorPartnerForm from "../components/NewVendorPartnerForm";
import PageHeader from "../components/PageHeader";

export default function VendorApply() {
    return (
        <div className="bg-white font-sans">
            <PageHeader
                title="Vendor Partner Form"
                subtitle="The View is Better at the Top — Join Us on the Path to Success"
                buttonText="Get Started"
                buttonHref="/apply"
                backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2926&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                highlightWord="Partner"
            />
            
            <motion.div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: 0.1
                }}
            >
                <NewVendorPartnerForm />
            </motion.div>
        </div>
    )
}