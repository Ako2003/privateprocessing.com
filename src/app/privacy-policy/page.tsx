"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('privacy');

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
                    <Image src={"/img/img_6.png"} width={1440} height={393} alt={"Background Image"}
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
                        <p className="text-gray-300 mb-10 leading-relaxed">
                            This Privacy Policy explains how Private Processing LLC, operating as PrivateProcessing.com
                            (&quot;Platform&quot;, &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;), collects, uses,
                            shares, and protects personal and business data. By using the Platform, You
                            (&quot;User&quot;, &quot;Merchant&quot;, &quot;You&quot;) agree to this Policy. If you do
                            not agree, do not use the Platform.
                        </p>

                        {/* Section 1 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">1. Information We Collect</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                We collect information provided by You directly through the Platform, including:
                            </p>

                            <h3 className="!text-xl text-white font-medium mb-3">1.1 KYC/KYB Identity and Business Information</h3>
                            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 ml-4">
                                <li>Company documents (formation, ownership, compliance)</li>
                                <li>Beneficial ownership and shareholder information</li>
                                <li>Personal identification (passport, ID, driving license)</li>
                                <li>Personal details (name, date of birth, nationality, address)</li>
                                <li>Proof of address and documents required for onboarding</li>
                                <li>Bank account and business verification documents</li>
                                <li>Merchant processing history and business model details</li>
                            </ul>

                            <h3 className="!text-lg text-white font-medium mb-3">1.2 Account & Platform Usage Information</h3>
                            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 ml-4">
                                <li>Email address, login credentials, and profile settings</li>
                                <li>Uploaded documents and application selections</li>
                                <li>Information about processors applied to through our Platform</li>
                                <li>IP address, device information, and usage logs</li>
                            </ul>

                            <h3 className="!text-xl text-white font-medium mb-3">1.3 Cookies & Analytics</h3>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                We use cookies, including analytics (such as Google Analytics), to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>improve performance</li>
                                <li>analyze Platform usage</li>
                                <li>enhance user experience</li>
                            </ul>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Users may manage cookie settings via their browser. For EU users, cookie consent banners may be shown where required.
                            </p>

                            <h3 className="!text-xl text-white font-medium mb-3">1.4 Marketing Communication Information</h3>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                If you provide an email address, we may send:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1 ml-4">
                                <li>platform updates</li>
                                <li>processor opportunities</li>
                                <li>relevant informational or promotional content</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                You may opt out at any time using unsubscribe links or by contacting us.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">We use collected data to:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>facilitate payment processor comparison and referrals</li>
                                <li>transmit and share documents with payment processors</li>
                                <li>verify business legitimacy and ownership</li>
                                <li>detect fraud, illegal activities, and abuse</li>
                                <li>provide customer support</li>
                                <li>send service or marketing communication</li>
                                <li>comply with legal and regulatory requirements</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">3. Sharing of Information</h2>

                            <h3 className="!text-xl text-white font-medium mb-3">3.1 Sharing With Payment Processors</h3>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                By uploading documents or applying through the Platform, You authorize us to share your data with any third-party payment processor for:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 ml-4">
                                <li>eligibility pre-checks</li>
                                <li>underwriting review</li>
                                <li>onboarding assistance</li>
                                <li>compliance or risk evaluation</li>
                            </ul>

                            <h3 className="!text-xl text-white font-medium mb-3">3.2 Accidental or Incorrect Transmission</h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                You acknowledge and consent that data may be shared manually or automatically, including via email, API integrations, or third-party services, and that:
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Accidental, incorrect, or unauthorized sharing does not create liability for PrivateProcessing.com or Private Processing LLC.
                            </p>

                            <h3 className="!text-xl text-white font-medium mb-3">3.3 Sharing With Legal Authorities</h3>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                We may share information with government agencies, regulatory bodies, or law enforcement when:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-6 space-y-1 ml-4">
                                <li>required by law</li>
                                <li>fraud, money laundering, terrorism financing, or illegal activity is suspected</li>
                                <li>processors request risk validation</li>
                            </ul>

                            <h3 className="!text-xl text-white font-medium mb-3">3.4 Service Providers</h3>
                            <p className="text-gray-300 leading-relaxed">
                                We may share limited information with service providers who support our operations (e.g., hosting, analytics, email providers), bound under confidentiality obligations.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">4. Legal Basis for Processing (GDPR Statement)</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">For EU/EEA users, our processing is based on:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>Consent (data upload & sharing)</li>
                                <li>Legitimate Interest (fraud prevention, referrals, eligibility assessment)</li>
                                <li>Legal Obligation (compliance & reporting)</li>
                            </ul>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">5. Data Retention</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                We retain data until You delete Your account, unless retention is:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>legally required (e.g., anti-fraud, audits, tax, AML compliance)</li>
                                <li>necessary to prevent fraud or abuse</li>
                                <li>required by a processor contract</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                Documents may remain in secure backups even after account deletion, for the minimum legally required period.
                            </p>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">6. Your Rights (for GDPR & Global Users)</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                Depending on your jurisdiction, You may have rights to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>access your data</li>
                                <li>correct inaccuracies</li>
                                <li>request deletion</li>
                                <li>restrict processing</li>
                                <li>withdraw consent (without affecting previous lawful processing)</li>
                            </ul>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                Requests may be denied if deletion affects legal compliance or fraud regulations.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                You may submit a rights request via:{' '}
                                <a className="font-bold" href="mailto:support@privateprocessing.com">
                                    support@privateprocessing.com
                                </a>
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">7. Security</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We implement industry-standard security to protect data, but:
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                No storage or transmission system is guaranteed to be 100% secure, and we are not liable for unauthorized access, breaches, or data misuse once information is transmitted to a third party (e.g., processors).
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">8. International Transfers</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Data may be stored or processed in the United States or other countries. By using the Platform, Users consent to international data transfers.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">9. Children&apos;s Privacy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                The Platform is not intended for individuals under 18 years old. We do not knowingly collect data from minors.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">10. Third-Party Links</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                The Platform may link to processors or other websites. We are not responsible for:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>their content</li>
                                <li>their privacy practices</li>
                                <li>their terms, compliance, or data usage</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                Users should review third-party policies before engaging with them.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">11. Changes to This Privacy Policy</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may update this Policy at any time. Continued use of the Platform constitutes acceptance of updated terms.
                            </p>
                        </section>

                        {/* Section 12 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">12. Contact Information</h2>
                            <p className="text-gray-300 leading-relaxed">
                                For privacy questions or requests:<br />
                                <a href="mailto:support@privateprocessing.com" className="font-bold">
                                    support@privateprocessing.com
                                </a>
                                <br /><br />
                                Private Processing LLC — Wyoming, USA<br />
                                <span className="font-bold">PrivateProcessing.com</span>
                            </p>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;