"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Contact from '../Components/Contact';
import { ThemeProvider } from 'next-themes';

export default function ClientLayout({ children }) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const openContactModal = () => setIsContactModalOpen(true);
    const closeContactModal = () => setIsContactModalOpen(false);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
            <Navbar onContactClick={openContactModal} />
            {children}
            <Contact
                isOpen={isContactModalOpen}
                onClose={closeContactModal}
            />
        </ThemeProvider>
    );
}
