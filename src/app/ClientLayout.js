"use client";
import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Contact from '../Components/Contact';

export default function ClientLayout({ children }) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    return (
        <>
            <Navbar onContactClick={openContactModal} />
            {children}
            <Contact
                isOpen={isContactModalOpen}
                onClose={closeContactModal}
            />
        </>
    );
}
