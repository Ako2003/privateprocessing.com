"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const CookiePolicy = () => {
    const [activeSection, setActiveSection] = useState('cookie');

    const sidebarLinks = [
        { id: 'terms', label: 'Terms & Conditions', url: '/terms-conditions' },
        { id: 'privacy', label: 'Privacy Policy', url: '/privacy-policy' },
        { id: 'cookie', label: 'Cookie Policy', url: '/cookie-policy' },
    ];


    return (
        <div className="min-h-screen bg-[#0a0806] text-gray-300">
            {/* Hero Section with Decorative Arc */}
            <div className="relative py-16 overflow-hidden">
                {/* Decorative golden arc */}
                <div className="w-full object-center">
                    <Image src={"/img/img_11.png"} width={1440} height={393} alt={"Background Image"}
                           className="w-full"/>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-8 pb-20">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="md:w-64 flex-shrink-0">
                        <nav className="sticky top-32 space-y-1">
                            {sidebarLinks.map((link) => (
                                <Link
                                    href={link.url}
                                    key={link.id}
                                    className={`block w-full text-left px-4 py-3 text-base transition-colors font-manrope font-semibold ${
                                        activeSection === link.id
                                            ? 'text-gold'
                                            : 'text-[#9B9B9B] hover:text-gray-300 border-l-2 border-transparent'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </aside>

                    {/* Content */}
                    <main className="flex-1 max-w-3xl">
                        <div className="space-y-2 mb-10 text-sm text-gray-400">
                            <p><span className="text-gray-500">Applies to:</span></p>
                            <ul className="list-disc list-inside ml-4">
                                <li><span className="font-bold">privateprocessing.com</span></li>
                                <li><span className="font-bold">app.privateprocessing.com</span></li>
                            </ul>
                        </div>

                        {/* Section 1 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">1. Introduction</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                This Cookie Policy explains how Private Processing LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) uses cookies and similar technologies on privateprocessing.com and app.privateprocessing.com (&quot;the Platform&quot;).
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                By using the Platform, you agree to the use of cookies as described in this Policy, unless you choose to disable them through your browser or via our cookie banner settings.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Because we serve users globally — including the EU/EEA — we use strict GDPR cookie consent for EU visitors and soft mode for the rest of the world.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">2. What Are Cookies?</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Cookies are small text files stored on your device to enable functionality, security, analytics, personalization, or advertising.
                            </p>
                            <p className="text-gray-300 mb-2 leading-relaxed">We use several types of cookies:</p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>Strictly Necessary Cookies</li>
                                <li>Functional Cookies</li>
                                <li>Analytics Cookies</li>
                                <li>Advertising & Remarketing Cookies</li>
                                <li>Third-Party Embedded Content Cookies</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                You can control or delete cookies at any time through your browser settings or via our cookie banner.
                            </p>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">3. Cookies We Use</h2>

                            <h3 className="!text-xl text-white font-medium mb-3">3.1 Strictly Necessary Cookies (Always Active)</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                These cookies are essential for the Platform to function. They include:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1 ml-4">
                                <li>Login/authentication cookies</li>
                                <li>Session cookies</li>
                                <li>Security cookies</li>
                                <li>Load balancing and routing cookies</li>
                            </ul>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                These cookies do not store personal data for marketing purposes.
                            </p>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                <span className="text-gray-400">Used on:</span>
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 ml-4">
                                <li className="font-bold">privateprocessing.com</li>
                                <li className="font-bold">app.privateprocessing.com (dashboard login)</li>
                            </ul>

                            <h3 className="!text-xl text-white font-medium mb-3">3.2 Analytics Cookies</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We use analytics to improve performance and user experience.
                            </p>
                            <p className="text-white font-medium mb-2">Google Analytics (GA4)</p>
                            <p className="text-gray-300 mb-2 leading-relaxed">Used to analyze:</p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>page views</li>
                                <li>user flow</li>
                                <li>device/browser info</li>
                                <li>performance data</li>
                            </ul>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                <span className="text-gray-400">Provider:</span> Google LLC<br />
                                Data may be transferred outside the EU.<br />
                                <span className="font-bold">EU visitors: analytics cookies only activate after consent.</span>
                            </p>

                            <h3 className="!text-xl text-white font-medium mb-3">3.3 Advertising & Remarketing Cookies</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We use advertising and remarketing technologies to show relevant ads.
                            </p>
                            <p className="text-white font-medium mb-2">Meta Pixel (Facebook & Instagram)</p>
                            <p className="text-gray-300 mb-2 leading-relaxed">Used for:</p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>conversion tracking</li>
                                <li>remarketing</li>
                                <li>optimizing ad delivery</li>
                            </ul>
                            <p className="text-white font-medium mb-2">Google Ads / Google Tag</p>
                            <p className="text-gray-300 mb-2 leading-relaxed">Used for:</p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>retargeting</li>
                                <li>ad performance measurement</li>
                                <li>interest-based advertising</li>
                            </ul>
                            <p className="font-bold mb-6">
                                EU visitors: these cookies load only after consent.
                            </p>

                            <h3 className="!text-xl text-white font-medium mb-3">3.4 Third-Party Embedded Content Cookies</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                When you interact with third-party services embedded on our websites, they may set their own cookies.
                            </p>
                            <p className="text-gray-300 mb-2 leading-relaxed">We embed:</p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>YouTube videos</li>
                                <li>Vimeo videos</li>
                                <li>Wistia videos</li>
                                <li>Calendly scheduler</li>
                                <li>Chat widget (your provider&apos;s cookies apply)</li>
                            </ul>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We have no control over how third parties use their cookies. Users should review each provider&apos;s privacy policy.
                            </p>
                            <p className="font-bold">
                                EU visitors: embeds that set cookies will only load after consent, unless they are strictly necessary (e.g., the chat widget if needed for support).
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">4. Why We Use Cookies</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">We use cookies to:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>keep you logged in</li>
                                <li>secure the platform</li>
                                <li>analyze performance</li>
                                <li>improve usability</li>
                                <li>measure ad conversions</li>
                                <li>deliver relevant ads</li>
                                <li>load embedded videos and support tools</li>
                                <li>perform fraud detection</li>
                                <li>provide a seamless dashboard experience</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">5. Consent for EU/EEA Visitors</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                Because many of our users come from the EU, we follow strict GDPR consent rules:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>Analytics cookies → blocked until consent</li>
                                <li>Advertising cookies → blocked until consent</li>
                                <li>Embedded media cookies that track → blocked until consent</li>
                                <li>Necessary cookies → always active</li>
                            </ul>
                            <p className="text-gray-300 mb-2 leading-relaxed">Visitors can:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>Accept all</li>
                                <li>Reject all</li>
                                <li>Customize categories</li>
                                <li>Withdraw consent at any time via the banner</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">6. Consent for Non-EU Visitors</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">For users outside the EU/EEA:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>Cookies load immediately (&quot;soft mode&quot;)</li>
                                <li>Banner informs users</li>
                                <li>They can still disable cookies manually</li>
                            </ul>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">7. How to Control or Disable Cookies</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">You can manage cookies through:</p>

                            <p className="text-white font-medium mb-2">1. Our Cookie Banner</p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>Accept all</li>
                                <li>Reject all</li>
                                <li>Customize preferences</li>
                            </ul>

                            <p className="text-white font-medium mb-2">2. Browser Settings</p>
                            <p className="text-gray-300 mb-2 leading-relaxed">You can block or delete cookies using your browser:</p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>Chrome</li>
                                <li>Safari</li>
                                <li>Firefox</li>
                                <li>Edge</li>
                                <li>Opera</li>
                                <li>Brave</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                Disabling cookies may affect Platform functionality, especially the dashboard.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">8. Third-Party Cookies</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Third-party services (Google, Meta, Wistia, Vimeo, YouTube, Calendly, chat widget providers) may set their own cookies.
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We do not control these cookies.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                We recommend reviewing each third party&apos;s own cookie policies.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">9. Updates to This Cookie Policy</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We may update this Cookie Policy at any time.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Updates will be posted with a new &quot;Last Updated&quot; date. Continued use of the Platform means acceptance of any changes.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">10. Contact</h2>
                            <p className="text-gray-300 leading-relaxed">
                                For questions about this Cookie Policy:<br />
                                <a href="mailto:support@privateprocessing.com" className="font-bold transition-colors">
                                    support@privateprocessing.com
                                </a>
                                <br /><br />
                                Private Processing LLC<br />
                                Wyoming, United States<br />
                                <span className="font-bold">privateprocessing.com</span>
                            </p>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;