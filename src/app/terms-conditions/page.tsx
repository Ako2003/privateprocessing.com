"use client"
import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";

const TermsAndConditions = () => {
    const [activeSection, setActiveSection] = useState('terms');

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
                    <Image src={"/img/img_8.png"} width={1440} height={393} alt={"Background Image"} className="w-full" />
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
                        <p className="font-inter text-base mb-10 leading-relaxed">
                            By creating an account, uploading data, or applying to a payment processor through this Platform, you (&quot;User&quot;, &quot;Merchant&quot;, &quot;You&quot;) agree to these Terms. If you do not agree, do not use the Platform.
                        </p>

                        {/* Section 1 */}
                        <section className="mb-10">
                            <h2 className="!text-lg text-white font-manrope !font-semibold mb-4">1. About the Platform</h2>
                            <p className="text-[#CCCCCC] mb-2 leading-relaxed">
                                PrivateProcessing.com (&quot;Platform&quot;, &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;) provides tools to:
                            </p>
                            <ul className="text-[#CCCCCC] list-disc list-inside text-gray-300 mb-10 space-y-1 ml-4">
                                <li>compare payment processors</li>
                                <li>check potential eligibility</li>
                                <li>forward applications to processors</li>
                            </ul>
                            <p className="text-[#CCCCCC] mb-2 leading-relaxed">We are not:</p>
                            <ul className="text-[#CCCCCC] list-disc list-inside text-gray-300 mb-10 space-y-1 ml-4">
                                <li>a payment processor</li>
                                <li>a bank</li>
                                <li>a financial institution</li>
                                <li>a merchant account provider</li>
                            </ul>
                            <p className="text-[#CCCCCC] leading-relaxed">
                                We do not handle your transactions and do not become part of your business. All processor relationships are exclusively between You and the processor.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-10">
                            <h2 className="!text-lg text-white !font-semibold mb-4">2. Partnerships With Processors</h2>
                            <p className="text-[#CCCCCC] mb-2 leading-relaxed">We may receive compensation from processors through:</p>
                            <ul className="list-disc list-inside text-gray-300 mb-10 space-y-1 ml-4">
                                <li>revenue share or commissions</li>
                                <li>markup on fees (processing, subscription, or one-time fees)</li>
                                <li>referral payments</li>
                            </ul>
                            <p className="text-[#CCCCCC] mb-4 leading-relaxed">
                                This compensation may include revenue share, referral fees, or markup that may increase or influence the pricing offered to You by a processor. By using the Platform or applying through it, You acknowledge and accept that pricing may differ from publicly available rates and You agree that the Platform is not responsible for any pricing, fees, or costs charged by processors. All pricing and charges from processors are solely between You and the processor, and You assume full responsibility for reviewing and accepting such terms before onboarding.
                            </p>
                            <p className="text-[#CCCCCC] mb-2 leading-relaxed">We do not control, and are not responsible for:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>pricing, rates, fees, terms, or stability</li>
                                <li>underwriting decisions or rejections</li>
                                <li>reserves, holdbacks, freezes, or account closures</li>
                                <li>processor performance or compliance decisions</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-10">
                            <h2 className="!text-lg text-white font-semibold mb-4">3. No Guarantees</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                We provide comparison and referral tools only. We do not guarantee any of the following:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-10 space-y-1 ml-4">
                                <li>merchant account approval or eligibility</li>
                                <li>rates, fees, terms, or performance of any processor</li>
                                <li>onboarding timelines or support quality</li>
                                <li>account stability, freezes, chargebacks, or risk decisions</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                The Platform is provided &quot;as is&quot; and &quot;as available,&quot; with no warranties of any kind.
                            </p>

                            <h3 className="!text-lg text-white font-medium mt-6 mb-3">3.1 Applying to Any Processor</h3>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                By clicking &quot;Apply&quot; or otherwise transmitting information to a processor through the Platform, You agree that:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>You enter into a separate contract directly with the processor, not with Us.</li>
                                <li>The Platform has no responsibility for onboarding, pricing, compliance actions, reserves, chargebacks, terminations, or losses arising from any processor.</li>
                                <li>You release PrivateProcessing.com and Private Processing LLC from all liability connected to applying for or working with any processor.</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                If You do not agree, do not apply through the Platform.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-10">
                            <h2 className="!text-lg text-white font-semibold mb-4">4. Data Upload, Storage & Sharing</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                You may upload data, including KYC/KYB documents. By doing so, You give the Platform permission to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>store your documents and business information</li>
                                <li>share data with any payment processor</li>
                                <li>transmit data manually or automatically (via email, API, secure storage, or third-party tools)</li>
                            </ul>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                You understand and agree that deleting your account does not require the Platform to delete any data or documents you have submitted. The Platform may retain and continue to store, use, and share your information after account deletion for any of the following purposes:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>compliance with legal, regulatory, and financial record-keeping obligations</li>
                                <li>fraud prevention, risk assessment, and security</li>
                                <li>underwriting audits or processor disputes</li>
                                <li>contractual obligations with payment processors or third parties</li>
                                <li>internal business operations, logs, backups, and system integrity</li>
                                <li>protection of the Platform, its partners, or other users</li>
                            </ul>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                You explicitly waive any right to require deletion of data already submitted to the Platform, except where applicable law strictly requires deletion and such deletion does not conflict with legal, regulatory, or fraud-prevention obligations.
                            </p>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Data may remain stored indefinitely, including in backups or archives, even after account deletion.
                            </p>

                            <h3 className="!text-lg text-white font-medium mt-6 mb-3">4.1 Data Sharing Consent & Liability Release</h3>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                By uploading data or using the Platform, You expressly and irrevocably agree that:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1 ml-4">
                                <li>We may share, forward, or transmit Your information with any processor at our discretion.</li>
                                <li>Data may be shared even if You did not explicitly select that processor at that moment (e.g. for pre-validation or eligibility review).</li>
                                <li>Accidental or incorrect transmission does not create any liability for the Platform.</li>
                                <li>You waive all claims against the Platform arising from:</li>
                            </ul>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-8">
                                <li>data sharing</li>
                                <li>misdelivery</li>
                                <li>transmission errors</li>
                                <li>unauthorized access by third parties after transmission</li>
                                <li>processor misuse or mishandling of data</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                If You do not agree with this Section, do not upload data or use the Platform.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">5. Accuracy and Authorization</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">You agree that:</p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>All submitted information and documents are true, accurate, and complete</li>
                                <li>You are an authorized signatory for the business</li>
                                <li>You assume full legal responsibility for any false, fraudulent, or misleading data</li>
                            </ul>
                            <p className="text-gray-300 mb-2 leading-relaxed">False information may result in:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>termination of Your account</li>
                                <li>refusal of service</li>
                                <li>sharing details with processors or authorities</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">6. Merchant Responsibility</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                We do not participate in Your business activities. You are solely responsible for:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>what You sell or promote</li>
                                <li>compliance with laws and regulations</li>
                                <li>taxes, chargebacks, losses, damages, customer disputes, advertising claims, and product legality</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                We are not liable for Your products, services, customers, or business model, even if a processor was recommended through our Platform.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">7. Right to Suspend or Remove Users</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                We may suspend or terminate any account at any time, with or without notice, explanation, or reason, at our discretion.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Access to the Platform is a revocable privilege, not a guaranteed service.
                            </p>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">8. Total Liability Exclusion</h2>
                            <p className="text-gray-300 mb-2 leading-relaxed">
                                PrivateProcessing.com and Private Processing LLC have zero liability, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1 ml-4">
                                <li>processor actions, policies, or decisions</li>
                                <li>financial losses, chargebacks, reserves, holdbacks, freezes</li>
                                <li>data leaks, breaches, or misdelivery</li>
                                <li>lost revenue, damages, penalties, or indirect losses</li>
                            </ul>
                            <p className="text-gray-300 leading-relaxed">
                                This exclusion applies even if we were informed of the possibility of loss.
                            </p>
                        </section>

                        {/* Section 9 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">9. Forbidden Niches</h2>
                            <p className="text-gray-300 leading-relaxed">
                                We may refuse service to any user or business model, even if a processor supports it. We have the right to block any category at our discretion.
                            </p>
                        </section>

                        {/* Section 10 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">10. Intellectual Property</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                All graphics, data, text, code, tools, and branding on the Platform are the property of Private Processing LLC.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Copying, scraping, or using our content to build competing systems is prohibited without written permission.
                            </p>
                        </section>

                        {/* Section 11 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">11. Account Deletion & Retention</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">Upon deletion:</p>
                            <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                                <li>We will remove stored documents unless retention is required for fraud prevention or legal compliance</li>
                                <li>We may retain logs for internal and regulatory purposes</li>
                            </ul>
                        </section>

                        {/* Section 12 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">12. Dispute Resolution</h2>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                A) All disputes must first be submitted to private binding arbitration under Wyoming law.
                            </p>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                B) If unresolved, disputes shall be exclusively heard in Wyoming courts (USA).
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                You waive objections regarding jurisdiction or venue.
                            </p>
                        </section>

                        {/* Section 13 */}
                        <section className="mb-10">
                            <h2 className="!text-xl text-white font-semibold mb-4">13. Contact</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Private Processing LLC<br />
                                Wyoming, United States<br />
                                <a className="font-bold" href="mailto:support@privateprocessing.com">
                                    support@privateprocessing.com
                                </a>
                            </p>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;