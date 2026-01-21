import type { Metadata } from 'next';
import { Open_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import ModalProvider from '@/app/context/ModalProvider';
import { ReactNode } from 'react';
import WebcamProvider from '@/app/context/WebcamProvider';

const geistSans = Open_Sans({
    variable: '--font-open-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-open-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Prova QA',
    description: 'Prova QA 2026 Batida de ponto',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <WebcamProvider>
                    <ModalProvider>{children}</ModalProvider>
                </WebcamProvider>
            </body>
        </html>
    );
}
