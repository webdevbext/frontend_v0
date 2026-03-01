import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | BEXT",
};

const page = () => {
  return (
    <>
      <HeroSub
        title="Disclaimer"
        description="Important legal information regarding the use of our website and services."
      />

      <section className="py-20 bg-white dark:bg-darklight">
        <div className="container mx-auto px-4 max-w-5xl">
          <div
            className="rounded-2xl border border-BorderLine dark:border-border bg-AliceBlue/40 dark:bg-darkmode/40 p-8 md:p-12 shadow-sm"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-secondary dark:text-white mb-10">
              Disclaimer or Terms and Conditions
            </h1>

            <div className="space-y-12 text-secondary dark:text-darktext text-base md:text-[17px] leading-relaxed">

              {/* Acceptance of Terms */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Acceptance of Terms
                </h2>
                <p>
                By accessing and using the BEXT Solutions website (
                <Link 
                    href="/" 
                    className="text-primary dark:text-lightPrimary underline hover:opacity-80 transition"
                >
                    www.bextsolutions.com
                </Link>
                ), you agree to comply with these Terms and Conditions. If you purchase any products or services through the Website, additional terms may apply and will be presented to you before purchase.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Definitions */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Definitions
                </h2>

                <p>
                  <span className="font-semibold">Services</span> refer to all information, materials, content, images, and resources available on or through the Website.
                </p>

                <p>
                  <span className="font-semibold">We / Us / Our</span> refers to BEXT Solutions Pty Ltd, including its affiliates, employees, officers, and agents.
                </p>

                <p>
                  <span className="font-semibold">Website</span> refers to the BEXT Solutions website and any associated subdomains.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Accuracy */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Accuracy of Information
                </h2>
                <p>
                  We make reasonable efforts to ensure the information on this Website is accurate and up to date. However, we do not guarantee its completeness, reliability, or accuracy. Content is provided for general informational purposes only and does not constitute professional, technical, environmental, financial, or legal advice.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Use */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Use of the Website
                </h2>
                <p>
                  You agree to use the Website in accordance with all applicable laws and regulations. You must not use the Website for any unlawful, misleading, abusive, defamatory, fraudulent, or harmful purpose. We reserve the right to restrict, suspend, or terminate access to the Website or Services at our discretion.
                </p>
                <p>
                  If the Website includes public interaction features (such as comments or forums), we may remove content that we consider inappropriate or unlawful.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Indemnity */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Indemnity
                </h2>
                <p>
                  You agree to indemnify and hold BEXT Solutions harmless from any claims, liabilities, damages, or expenses arising from your use of the Website or Services.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Intellectual Property */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Intellectual Property
                </h2>
                <p>
                  All content on this Website, including text, graphics, branding, layout, and media, is the property of BEXT Solutions Pty Ltd unless otherwise stated and is protected by intellectual property laws. You may not reproduce, distribute, or use our content for commercial purposes without prior written consent. We had also used public or non-copyright content, or from third party entity that enables us to regenerate or reproduce certain published content.
                </p>
                <p>
                  Requests for permission to use our content may be submitted via our Contact page.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Trademarks */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Trademarks
                </h2>
                <p>
                  All trademarks, logos, and branding displayed on this Website are the property of BEXT Solutions Pty Ltd or their respective owners. Unauthorised use is strictly prohibited.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* External Links */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  External Links
                </h2>
                <p>
                  This Website may contain links to third-party websites for your convenience. We do not endorse and are not responsible for the content, accuracy, or practices of external sites. Accessing third-party websites is at your own risk.
                </p>
                <p>
                  Direct or indirect links to purchase products and services on our website will come with additional terms and conditions, presented to you before purchases are made. Please proceed to read the terms prior to your purchase with us.
                </p>
                <p>
                  You may link to our homepage or published articles, provided that the link does not imply endorsement or partnership without our written consent. We reserve the right to withdraw linking permission at any time.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Limitation */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, BEXT Solutions is not liable for any direct, indirect, incidental, or consequential loss or damage arising from your use of the Website or Services. All Services are provided “as is,” except where warranties are required by law.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Confidentiality */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Confidentiality
                </h2>
                <p>
                  We handle personal information in accordance with our Privacy Policy. While we take reasonable steps to protect information submitted through the Website, we cannot guarantee absolute security due to risks inherent in internet communications.
                </p>
              </div>

                {/* Breathing space */}
                <div className="p-2"></div>

              {/* Governing Law */}
              <div className="space-y-4">
                <h2 className="text-xl md:text-2xl font-semibold text-primary dark:text-lightPrimary">
                  Governing Law
                </h2>
                <p>
                  These Terms are governed by the laws of South Australia, Australia. Any disputes relating to this Website will be subject to the jurisdiction of the courts of South Australia. We reserve the right to initiate proceedings in other jurisdictions where legally permitted.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page