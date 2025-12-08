import { Baloo_Bhai_2 } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientLayout from './ClientLayout';
import './globals.css';

const baloo = Baloo_Bhai_2({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800'],
    variable: '--font-baloo',
});

export const metadata = {
    title: "Manav's Portfolio",
    description: "Manav Bansal's Portfolio Website",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={baloo.variable}>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
