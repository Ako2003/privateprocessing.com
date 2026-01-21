import type { Metadata } from "next";
import { Manrope, Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manpore = Manrope({
    variable: "--font-manpore",
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    weight: ["100","200","300","400","500","600","700","800","900"],
    subsets: ["latin"],
});

const inter = Inter({
    variable: "--font-inter",
    weight: ["100","200","300","400","500","600","700","800","900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Private Processing - The Private Banking of Payment Processing",
    description: "Secure, scalable payment solutions from Private Processing. Streamline transactions, protect data, and grow your business with expert guidance and support.",
    openGraph: {
        url: "https://www.privateprocessing.com/",
        type: "website",
        title: "Private Processing - The Private Banking of Payment Processing",
        description: "Secure, scalable payment solutions from Private Processing. Streamline transactions, protect data, and grow your business with expert guidance and support.",
        images: [
            {
                url: "https://privateprocessing.com/newlogo.png",
            }
        ]
    },
    alternates: {
        canonical: `https://www.privateprocessing.com/`,
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${manpore.variable} ${montserrat.variable} ${inter.variable} antialiased`}>

        {/* Calendly SDK */}
        <Script
            id="calendly-sdk"
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
        />

        {/* Google Tag (gtag.js) */}
        <Script
            id="google-analytics"
            src="https://www.googletagmanager.com/gtag/js?id=G-6TT5NVE8DQ"
            strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
            {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6TT5NVE8DQ');
                    `}
        </Script>

        {/* Facebook/Meta Pixels */}
        <Script id="facebook-pixel" strategy="afterInteractive">
            {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '719123840945330');
                        fbq('init', '1829779314402336');
                        fbq('track', 'PageView');
                    `}
        </Script>
        <noscript>
            <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=719123840945330&ev=PageView&noscript=1"
            />
            <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src="https://www.facebook.com/tr?id=1829779314402336&ev=PageView&noscript=1"
            />
        </noscript>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
                        (function(c,l,a,r,i,t,y){
                            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                        })(window, document, "clarity", "script", "r7leh0nkbz");
                    `}
        </Script>

        {/* Site Content */}
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}