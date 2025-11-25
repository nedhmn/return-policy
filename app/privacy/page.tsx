import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-rp-black">
      <Navbar />

      <main className="container max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32">
        <h1 className="font-sans font-medium text-5xl md:text-7xl lg:text-8xl text-rp-ivory leading-[0.82] tracking-[-0.05em] mb-16 md:mb-24">
          PRIVACY
          <br />& COOKIE
          <br />
          USE POLICY
        </h1>

        {/* Body content - Body style: 55 Roman, 115% leading, -2% tracking */}
        <div className="space-y-12 text-rp-ivory font-sans font-normal tracking-[-0.02em] leading-[1.15]">
          <div className="space-y-4 text-base md:text-lg">
            <p>
              Welcome to our booking platform (the "Platform" or "We"). The Platform allows guests or tenants to perform
              online booking or reservations of properties and rooms (the "Service").
            </p>
            <p>
              This privacy policy (the "Policy") outlines our privacy practices with respect to the Service, including
              the ways your personal information and data are collected, stored, used and shared. Providing us with your
              personal information is a choice you make. We appreciate that and thank you for making this choice. You
              are not legally obligated to provide us with this information, but We do need it to allow you to use the
              Service.
            </p>
            <p>
              We act as data controllers and are responsible for the collection and use of any data that you submit or
              provide through the Service.
            </p>
            <p>
              In addition to this privacy statement, we may have additional policies or codes of conduct which will
              apply in relation to your use of the Service. If you have any questions about your use of the Service,
              please contact us.
            </p>
          </div>

          {/* Information Collection */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              What kind of personal information is collected?
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                When you submit an inquiry, make a customer service request or register an account, you provide contact
                information such as your name, address, mobile phone number and email address.
              </p>
              <p>
                We may collect your credit card or debit card information when you pay for the Service. This information
                is collected on our behalf by a payment processor. We may use cookies and similar tracking technologies
                to collect information on our website, and via email. Additionally, We may collect your IP address from
                your internet service provider and may collect your bank details upon property owners' need.
              </p>
            </div>
          </section>

          {/* Use & Disclosure */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              Use & Disclosure of collected information
            </h2>
            <p className="text-base md:text-lg mb-4">
              We may share the information you shared with us with third party service providers in order to provide and
              support the Service:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
              <li>communicating with you regarding the use of the Service and respond to your requests;</li>
              <li>
                enhancing the security and safety of the Service, such as by investigating suspicious activity or
                violations of applicable terms or policies;
              </li>
              <li>developing new tools, products or services within the Service;</li>
              <li>
                associating activity on the Service across different devices operated by the same individual to improve
                the overall operation of the Service;
              </li>
              <li>to identify and fix bugs that may be present;</li>
              <li>conducting data and system analytics, including research to improve the Service.</li>
              <li>
                comply with any applicable law and assisting law enforcement agencies and competent authorities, if We
                believe it is necessary or justified.
              </li>
            </ul>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              Accessing, modifying, exporting or deleting your information
            </h2>
            <p className="text-base md:text-lg mb-4">
              You have the following rights with respect to your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg ml-4">
              <li>The right to request a copy of your personal data.</li>
              <li>The right to request to correct your personal data if inaccurate or out of date.</li>
              <li>
                The right to request that your personal data be deleted when it is no longer necessary to retain such
                data.
              </li>
              <li>
                The right to withdraw any consent to personal data processing at any time. For example, your consent to
                receive e-marketing communications.
              </li>
              <li>
                The right to request to provide you with your personal data and, if possible, to pass on this
                information directly (in a portable format) to another data controller when the processing is based on
                consent or contract.
              </li>
              <li>
                The right to request a restriction on further data processing, in case there is a dispute in relation to
                the accuracy or processing of your personal data.
              </li>
              <li>
                The right to object to the processing of personal data, in case data processing has been based on
                legitimate interest and/or direct marketing.
              </li>
            </ul>
            <p className="text-base md:text-lg mt-4">
              If you want to withdraw your consent to e-marketing, please make use of the link to manage your
              subscriptions included in our communication. Please note that you may still receive system messages and
              administrative communications, such as order confirmation, system messages and notifications about your
              account activities.
            </p>
            <p className="text-base md:text-lg mt-4">
              If you are not able to do so using the tools provided in the Service, you should contact us directly for
              access, modification, export or deletion of your personal information.
            </p>
          </section>

          {/* GDPR Notice */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              GDPR Notice
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                The following disclosure is made pursuant to the European General Data Protection Regulation (GDPR):
              </p>
              <p>
                As a data controller of our clients' personal data, we are committed to protecting and respecting your
                privacy in compliance with EU- General Data Protection Regulation (GDPR) 2016/679, dated April 27th
                2016.
              </p>
              <h3 className="font-sans font-medium text-xl md:text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mt-6 mb-4">
                Our legal basis for collecting personal data
              </h3>
              <p>
                <strong>Collecting personal data based on consents:</strong>
                <br />
                The collection of personal data based on consent from the data subject will be done by using consent
                forms that will store documentation related to the consent given by the individual.
              </p>
              <p>
                We use personal information for fulfilling our obligations related to contracts and agreements with
                customers, partners and suppliers.
              </p>
              <p>
                <strong>Collecting personal data based on legitimate interest:</strong>
                <br />
                We may use personal data if it is considered to be of legitimate interest, and if the privacy interests
                of the data subject do not override this interest. Normally, to establish the legal basis for data
                collection, an assessment has been made during which a mutual interest has been identified.
              </p>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              Data Retention
            </h2>
            <p className="text-base md:text-lg">
              We retain personally identifiable information for as long as we deem necessary for the purposes set forth
              above. We may delete information from our systems, without notice to you, once we deem it is no longer
              necessary for the purposes set forth above.
            </p>
          </section>

          {/* CCPA Notice */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              CCPA Notice
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                You may exercise certain consumer rights under the California Consumer Privacy Act (CCPA). Your CCPA
                rights are described below.
              </p>
              <h3 className="font-sans font-medium text-xl md:text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mt-6 mb-4">
                Right to Know
              </h3>
              <p>
                You have the right to request information regarding the categories and specific pieces of personal
                information we have collected about you, as well as the sources of that information, the business
                purpose for collecting it, and what types of third parties we share or sell it with.
              </p>
              <h3 className="font-sans font-medium text-xl md:text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mt-6 mb-4">
                Right to Deletion
              </h3>
              <p>
                You have the right to request that we delete any of your personal information. We will delete any
                personal information that is not critical to the normal business operation from our records and direct
                all of our service providers to do the same.
              </p>
              <p>We consider data to be critical to our business operation if they are used to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide goods or services to you</li>
                <li>Detect and resolve issues related to security or functionality</li>
                <li>Comply with legal obligations</li>
              </ul>
              <h3 className="font-sans font-medium text-xl md:text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mt-6 mb-4">
                Right to Non-Discrimination
              </h3>
              <p>If you exercise your consumer rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We will not deny goods or services to you</li>
                <li>
                  We will not charge different prices or rates for goods or services, including through the use of
                  discounts or other benefits or imposing penalties
                </li>
                <li>We will not provide a different level or quality of goods or services to you</li>
              </ul>
              <h3 className="font-sans font-medium text-xl md:text-2xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mt-6 mb-4">
                Do Not Sell My Personal Information
              </h3>
              <p>
                We do not sell any information that identifies you, such as your name or contact information. However,
                we do allow Ad Networks such as Facebook and Google to collect your electronic activity while on our
                website
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              Children's privacy
            </h2>
            <p className="text-base md:text-lg">
              This service is for people 16 years of age or older. We do not knowingly or intentionally collect
              information about children who are under 16 years of age.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              Cookies
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                We may use cookies on the Service. Cookies are packets of information sent by our servers to your web
                browser and then sent back by the browser each time it accesses our servers. The cookies may contain a
                variety of information, such as the web pages you have accessed, session durations and IP addresses.
                Cookies are used for various purposes, such as to collect statistical information about your use of the
                Service and save you the need to re-login with your username and password when you use the Service.
              </p>
              <p>
                This information is used to make websites work more efficiently, as well as to provide business and
                marketing information, and to gather such personal data as browser type and operating system, referring
                page, path through site, domain of ISP, etc. for the purposes of understanding how visitors use a
                website. Cookies and similar technologies help us tailor our website to your personal needs, as well as
                to detect and prevent security threats and abuse.
              </p>
              <p>
                If you wish to block cookies, you may do so through your browser's settings or using the option in the
                service website for blocking marketing cookies. You can delete cookies that are already on your computer
                and you can set your browser to prevent them from being placed going forward. Please refer to the
                browser's help menu for further information. However, please bear in mind that disabling cookies may
                adversely affect your user experience on the Service. You can delete advertising cookies in your browser
                by using this form: https://optout.aboutads.info/.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              Changes to the privacy policy
            </h2>
            <div className="space-y-4 text-base md:text-lg">
              <p>
                We may change this Policy from time to time. We will provide you notice of such changes through the
                Services' interface. Your continued use of the Service constitutes your consent to the amended Policy.
                If you do not consent to the amended Policy, We may terminate the Terms and your account on the Service
                and block your access to, and use of, the Service, upon the elapse of 30 days after you decline to
                accept the revised Policy.
              </p>
              <p>
                In the case of legal requirement or necessity, we may also introduce immediate changes to this Policy.
                The latest version of the Terms and its effective date will always be accessible on the Service.
              </p>
            </div>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="font-sans font-medium text-2xl md:text-4xl text-rp-ivory leading-[0.96] tracking-[-0.04em] mb-6">
              Contact Us
            </h2>
            <p className="text-base md:text-lg">
              If you have any questions about this Privacy Policy or Cookies Use Policy, please contact us:{" "}
              <a href="mailto:help@returnpolicystays.com" className="text-rp-yellow hover:underline">
                help@returnpolicystays.com
              </a>
            </p>
          </section>

          {/* Back to Home Link */}
          <div className="pt-12 border-t border-rp-ivory/20">
            <Link href="/" className="inline-block text-rp-yellow hover:text-rp-ivory transition-colors font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
