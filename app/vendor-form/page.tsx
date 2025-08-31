'use client';

import { motion } from 'framer-motion';
import NewVendorPartnerForm from "../components/NewVendorPartnerForm";

export default function VendorApply() {
    return (
        <motion.div 
            className="bg-white font-sans m-20"
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
    )
}