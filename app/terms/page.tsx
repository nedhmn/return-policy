import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-rp-black">
      <Navbar />

      <main className="container mx-auto max-w-4xl px-6 py-24 md:py-32 lg:px-12">
        {/* Page Title - Title style: 65 Medium, 82% leading, -5% tracking */}
        <h1 className="mb-16 font-medium font-sans text-5xl text-rp-ivory leading-[0.82] tracking-[-0.05em] md:mb-24 md:text-7xl lg:text-8xl">
          TERMS
          <br />& CONDI
          <br />
          -TIONS
        </h1>

        {/* Body content - Body style: 55 Roman, 115% leading, -2% tracking */}
        <div className="space-y-12 font-normal font-sans text-rp-ivory leading-[1.15] tracking-[-0.02em]">
          <p className="text-base md:text-lg">
            Welcome to our booking platform! Please read these terms and
            conditions carefully before using Our service.
          </p>

          {/* Definitions Section */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Definitions
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                <strong>Affiliate</strong> means an entity that controls, is
                controlled by or is under common control with a party, where
                "control" means ownership of 50% or more of the shares, equity
                interest or other securities entitled to vote for the election
                of directors or other managing authority.
              </p>
              <p>
                The company is referred to as either "the Company", "We", "Us"
                or "Our" in this Agreement.
              </p>
              <p>
                <strong>Device</strong> means any device that can access the
                Service such as a computer, a cellphone or a digital tablet.
              </p>
              <p>
                <strong>Service</strong> refers to the Website.
              </p>
              <p>
                <strong>Terms and Conditions</strong> (also referred as "Terms")
                mean these Terms and Conditions that form the entire agreement
                between the parties regarding the use of the Service.
              </p>
              <p>
                <strong>Third-party Social Media Service</strong> means any
                services or content (including data, information, products or
                services) provided by a third-party that may be displayed,
                included or made available by the Service.
              </p>
              <p>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </p>
            </div>
          </section>

          {/* Acknowledgment Section */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Acknowledgment
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                These are the Terms and Conditions governing the use of this
                Service and the agreement that operates between the parties.
                These Terms and Conditions set out the rights and obligations of
                all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on your
                acceptance of and compliance with these Terms and Conditions.
                These Terms and Conditions apply to all visitors, users and
                others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service you agree to be bound by these
                Terms and Conditions. If You disagree with any part of these
                Terms and Conditions then You may not access the Service.
              </p>
              <p>
                You represent that you are over the age of 18. The Company does
                not permit those under 18 to use the Service.
              </p>
              <p>
                Your access to and use of the Service is also conditioned on
                your acceptance of and compliance with the Privacy Policy of the
                company. Our Privacy Policy describes our policies and
                procedures on the collection, use and disclosure of Your
                personal information when You use the Application or the Website
                and tells You about Your privacy rights and how the law protects
                You. Please read Our Privacy Policy carefully before using Our
                Service.
              </p>
            </div>
          </section>

          {/* Links to Other Websites */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Links to Other Websites
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by the Company.
              </p>
              <p>
                The Company has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any third
                party web sites or services. You further acknowledge and agree
                that the Company shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with the use of or reliance on any
                such content, goods or services available on or through any such
                web sites or services.
              </p>
              <p>
                We strongly advise You to read the terms and conditions and
                privacy policies of any third-party web sites or services that
                You visit.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Termination
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                We may terminate or suspend Your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if You breach these Terms and Conditions.
              </p>
              <p>
                Upon termination, Your right to use the Service will cease
                immediately.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                Notwithstanding any damages that You might incur, the entire
                liability of the Company and any of its suppliers under any
                provision of this Terms and Your exclusive remedy for all of the
                foregoing shall be limited to the amount actually paid by You
                through the Service or 100 USD if You haven't purchased anything
                through the Service.
              </p>
              <p>
                To the maximum extent permitted by applicable law, in no event
                shall the Company or its suppliers be liable for any special,
                incidental, indirect, or consequential damages whatsoever
                (including, but not limited to, damages for loss of profits,
                loss of data or other information, for business interruption,
                for personal injury, loss of privacy arising out of or in any
                way related to the use of or inability to use the Service,
                third-party software and/or third-party hardware used with the
                Service, or otherwise in connection with any provision of this
                Terms), even if the Company or any supplier has been advised of
                the possibility of such damages and even if the remedy fails of
                its essential purpose.
              </p>
              <p>
                Some states do not allow the exclusion of implied warranties or
                limitation of liability for incidental or consequential damages,
                which means that some of the above limitations may not apply. In
                these states, each party's liability will be limited to the
                greatest extent permitted by law.
              </p>
            </div>
          </section>

          {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              "AS IS" and "AS AVAILABLE" Disclaimer
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                The Service is provided to You "AS IS" and "AS AVAILABLE" and
                with all faults and defects without warranty of any kind. To the
                maximum extent permitted under applicable law, the Company, on
                its own behalf and on behalf of its Affiliates and its and their
                respective licensors and service providers, expressly disclaims
                all warranties, whether express, implied, statutory or
                otherwise, with respect to the Service, including all implied
                warranties of merchantability, fitness for a particular purpose,
                title and non-infringement, and warranties that may arise out of
                course of dealing, course of performance, usage or trade
                practice.
              </p>
              <p>
                Without limiting the foregoing, neither the Company nor any of
                the company's provider makes any representation or warranty of
                any kind, express or implied: (i) as to the operation or
                availability of the Service, or the information, content, and
                materials or products included thereon; (ii) that the Service
                will be uninterrupted or error-free; (iii) as to the accuracy,
                reliability, or currency of any information or content provided
                through the Service; or (iv) that the Service, its servers, the
                content, or e-mails sent from or on behalf of the Company are
                free of viruses, scripts, trojan horses, worms, malware,
                timebombs or other harmful components.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion of certain types
                of warranties or limitations on applicable statutory rights of a
                consumer, so some or all of the above exclusions and limitations
                may not apply to You. But in such a case the exclusions and
                limitations set forth in this section shall be applied to the
                greatest extent enforceable under applicable law.
              </p>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Governing Law
            </h2>
            <p className="text-base md:text-lg">
              The laws of the Company's incorporation place, excluding its
              conflicts of law rules, shall govern these Terms and Your use of
              the Service. Your use of the Application may also be subject to
              other local, state, national, or international laws.
            </p>
          </section>

          {/* Disputes Resolution */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Disputes Resolution
            </h2>
            <p className="text-base md:text-lg">
              If You have any concern or dispute about the Service, You agree to
              first try to resolve the dispute informally by contacting the
              Company.
            </p>
          </section>

          {/* United States Legal Compliance */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              United States Legal Compliance
            </h2>
            <p className="text-base md:text-lg">
              You represent and warrant that (i) You are not located in a
              country that is subject to the United States government embargo,
              or that has been designated by the United States government as a
              "terrorist supporting" country, and (ii) You are not listed on any
              United States government list of prohibited or restricted parties.
            </p>
          </section>

          {/* Severability and Waiver */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Severability and Waiver
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                If any provision of these Terms is held to be unenforceable or
                invalid, such provision will be changed and interpreted to
                accomplish the objectives of such provision to the greatest
                extent possible under applicable law and the remaining
                provisions will continue in full force and effect.
              </p>
              <h3 className="mt-6 mb-4 font-medium font-sans text-rp-ivory text-xl leading-[0.96] tracking-[-0.04em] md:text-2xl">
                Waiver
              </h3>
              <p>
                Except as provided herein, the failure to exercise a right or to
                require the performance of an obligation under these Terms shall
                not affect a party's ability to exercise such right or require
                such performance at any time thereafter nor shall the waiver of
                a breach constitute a waiver of any subsequent breach.
              </p>
            </div>
          </section>

          {/* Changes to These Terms and Conditions */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Changes to These Terms and Conditions
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                We reserve the right, at Our sole discretion, to modify or
                replace these Terms at any time. If a revision is material We
                will make reasonable efforts to provide at least 30 days' notice
                prior to any new terms taking effect. What constitutes a
                material change will be determined at Our sole discretion.
              </p>
              <p>
                By continuing to access or use Our Service after those revisions
                become effective, You agree to be bound by the revised terms. If
                You do not agree to the new terms, in whole or in part, please
                stop using the website and the Service.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="mb-6 font-medium font-sans text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] md:text-4xl">
              Contact Us
            </h2>
            <p className="text-base md:text-lg">
              If you have any questions about these Terms and Conditions, You
              can contact us:
            </p>
            <p className="mt-4 text-base md:text-lg">
              By email:{" "}
              <a
                className="text-rp-yellow hover:underline"
                href="mailto:help@returnpolicystays.com"
              >
                help@returnpolicystays.com
              </a>
            </p>
          </section>

          {/* Back to Home Link */}
          <div className="border-rp-ivory/20 border-t pt-12">
            <Link
              className="inline-block font-medium text-rp-yellow transition-colors hover:text-rp-ivory"
              href="/"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
