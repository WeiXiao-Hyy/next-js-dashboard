import '@/app/ui/global.css'
import {inter} from './ui/fonts';
import React from "react";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={`${inter.className} antialiasing`}>{children}</body>
    </html>
  );
}
