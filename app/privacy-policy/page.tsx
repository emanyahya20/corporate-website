export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/videos/privacypolicy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome Message */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Here is how we collect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Last updated: March 2025
            </p>

            <p className="mb-6">
              This is the official Privacy Policy ("Policy") of Trustmore
              Technologies (P) Limited ("Escrowpay") ("itrustmore") which forms
              a part of your legal agreement with us. The terms "WE", "OUR" and
              "US" (refer to "Escrowpay") and the terms "YOU", "YOUR" "I" and
              "USER" (refer to as "User"), as a User of Escrowpay. Please read
              this Policy carefully to be sure that you understand how we
              collect and use your information shared with us and under what
              circumstances we share your information, with any third parties.
            </p>

            <p className="mb-6">
              The information shared by the Users shall be processed in
              accordance with the terms and conditions agreed under this Privacy
              Policy and other related policies of the Company such as Terms of
              Services, Disclaimer etc. as mentioned on{" "}
              <a
                href="https://www.itrustmore.com"
                className="text-blue-600 hover:underline"
              >
                www.itrustmore.com
              </a>
              (hereinafter referred to as the "Website"). Personal information
              of the Users shall be processed subject to their consent, which
              shall be deemed when the Users upload/provide their documents for
              completing the transaction on the Website.
            </p>

            <p className="mb-6">
              The term "PERSONAL INFORMATION" means any information that you
              provide to us which personally identifies you to be contacted or
              identified, such as your name, address, phone number, email
              address, bank details etc. and any other data that is tied to such
              information. Our practices and procedures in relation to the
              collection and use of Personal Information have been set-out below
              in order to ensure safe usage of the Website for Users.
            </p>

            <p className="mb-6">
              We have implemented reasonable security practices and measures
              that are proportional with the information being protected and
              with the nature of our business. While we try our best to provide
              security that is best as per the industry standards, because of
              the inherent vulnerabilities of the internet, we cannot ensure,
              guarantee or warrant complete security of all information that is
              being transmitted to us by you.
            </p>

            <p className="mb-8">
              By visiting the Website, You agree and acknowledge to be bound by
              this Privacy Policy and hereby consent that we will collect, use,
              process and share your Personal Information in the manner set out
              herein below. If you do not agree with these terms, do not use the
              Website.
            </p>

            <h2 className="text-2xl font-semibold my-6">
              What Type Of Information Do We Collect And How We Use It
            </h2>

            <p className="mb-6">
              We respect the privacy of our Users and are committed to protect
              it in all respects from any unlawful or illegal disclosure. With a
              view to offer most enriching and holistic experience of
              facilitating the use of an escrow account for collection and
              payment related transactions to Users, we require certain
              information which is personal and varies from individual to
              individual.
            </p>

            <p className="mb-4">
              The information about the User as collected by us shall comprise
              of:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>Information supplied by the Users</li>
              <li>Escrow account opening and Identity related information</li>
              <li>Contact Information</li>
              <li>Usage Based and Technical information</li>
              <li>Financial Information</li>
              <li>Information automatically tracked while navigation</li>
              <li>Information of User(s)</li>
              <li>Any third party information supplied to us by the user</li>
            </ul>

            <h2 className="text-2xl font-semibold my-6">
              For What Purpose The Information Will Be Used
            </h2>

            <p className="mb-6">
              To avail the services on our Website, Users are required to
              provide information related to/for registration and transactions
              which may comprise of but not limited to names, addresses, email
              addresses, KYC details, credit / debit card details, bank details
              etc. The Information, as supplied by the Users, enables us to
              improve our website and provide you with the most user-friendly
              experience.
            </p>

            <p className="mb-6">
              All uploaded and required information is service dependent and the
              Escrowpay may use the above said User information to maintain,
              protect, and improve its services (including advertising services)
              and shall retain the data uploaded by the Users on the Website for
              its record keeping purposes.
            </p>

            <p className="mb-8">
              The information used may comprise of documents for KYC
              verification which shall include, but not limited to, Credit
              Bureau records, Aadhar data, PAN data, Bank Statements, Cancelled
              Cheque, copies of Agreements or Deeds executed in the past or to
              be executed in furtherance of the transactions facilitated by us
              through our Website, chat support messages, emails, contact
              numbers, SMS, etc.
            </p>

            <h3 className="text-xl font-semibold mb-4">For General Purpose</h3>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>Help us to provide personalized features for our Users</li>
              <li>To manage our day to day Business operations</li>
              <li>To improve our services and business strategies</li>
              <li>
                To comply with Laws and adhere to best Compliance and Management
                Practices
              </li>
              <li>
                For conducting credit and due diligence checks for minimization
                of risk and frauds
              </li>
              <li>
                For conducting Risk analysis, Anti Money Laundering analysis or
                any such checks or analysis as prescribed by the regulatory
                authorities from time to time
              </li>
              <li>
                To operate, maintain, and improve our websites, products and
                services – this may include contacting the Users to assist in
                enforcing our policies, resolving complaints, and ensuring the
                best possible service according to User's interest
              </li>
              <li>
                To get in touch in the case of password retrieval and policy
                changes
              </li>
              <li>
                To preserve social history as governed by existing laws or
                policy
              </li>
              <li>
                To respond to comments and questions and provide customer
                service
              </li>
              <li>
                To send information including confirmations, invoices, technical
                notices, updates, security alerts and support and administrative
                messages
              </li>
              <li>
                To communicate about promotions, upcoming events, and other news
                about products and services offered by Escrowpay or its Partners
                and Vendors
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">For Internal Purpose</h3>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>Direct our efforts for product and services improvement</li>
              <li>Contact Users as a survey respondent</li>
              <li>Any contest related information</li>
              <li>
                Sending promotional materials from our partners, vendors,
                sponsors or advertisers
              </li>
              <li>For password reminder and registration confirmation</li>
              <li>
                For regular updates regarding new services, newsletter, special
                offer and any other related information
              </li>
              <li>Changes in any Policies or Terms of Use</li>
              <li>
                Event based communications such as order information, renewal
                notices, invites, reminders etc.
              </li>
            </ul>

            <p className="italic mb-8">
              Note: We send Users login details, newsletters and updates upon
              registration. We also send regular newsletters and/or promotional
              emails for ourselves or on behalf of our partners, vendors and
              advertisers directly or through our third party vendors.
            </p>

            <h3 className="text-xl font-semibold mb-4">Other Usage</h3>

            <p className="mb-4">
              We may use User's information for our legal requirements, which
              are as follows:
            </p>

            <ul className="list-disc pl-8 mb-8 space-y-2">
              <li>To meet any applicable law, regulation or legal process</li>
              <li>
                In response to law enforcement authority or other governmental
                official request
              </li>
              <li>
                To enforce applicable Terms of Service, including investigation
                of potential violations
              </li>
              <li>
                For detection and prevention of frauds, errors, security or
                technical issues
              </li>
              <li>
                To protect rights against harmful acts, property or safety of
                company, our users or the public as required or permitted by law
              </li>
              <li>
                For disclosure relating to Merger, Acquisitions, Demerger and
                other corporate reconstructing methods, audits or to investigate
                a complaint or security threat
              </li>
            </ul>

            <p className="mb-6">
              Escrowpay hereby explicitly informs the User that any information
              uploaded, shared or put on the Website by the Users shall be
              viewable and accessible for the scrutiny, analysis and
              verification by us or any third party authorized by us to conduct
              such verifications. We, along with the appointed third party shall
              be under obligation to keep the information uploaded by the Users
              on the Website, confidential and private and ensure, to the best
              of our ability, that there is no unlawful or improper disclosure
              of the same.
            </p>

            <p className="mb-6">
              Any information shared by the Users shall be stored in our
              databases, servers and other record keeping portal for a minimum
              period of 2 years. The Users shall have the right to request for
              removal of any information uploaded, stored or entered on Website
              of the company by making a formal request on email at:
            </p>

            <p className="text-blue-600 font-medium mb-6">
              care@itrustmore.com
            </p>

            <p className="italic mb-8">
              Note: Such information will not be considered as sensitive, if it
              is freely available and accessible in the public domain or is
              furnished under the Right to Information Act, 2005 or any other
              law for the time being in force.
            </p>

            <h2 className="text-2xl font-semibold my-6">
              Transfer Of Information
            </h2>

            <p className="mb-6">
              We do not share your Personal Information with any third party
              apart from financial institutions such as banks, trustees, payment
              gateways or other regulatory agencies such as RBI, SEBI, KRA's
              etc. or with our service providers and Vendors, which may be
              necessary to provide You with services that we offer through our
              Website, conduct quality assurance testing, facilitate creation of
              accounts, provide technical and customer support, or provide
              specific services, in accordance with Your instructions. These
              third parties are required not to use your Personal Information
              other than to provide the services requested by you.
            </p>

            <p className="mb-6">
              We may share your Personal Information with our partners, joint
              ventures, or other companies under a common control (collectively,
              the "AFFILIATES") that we may have now or in the future, in which
              case we will require them to honor this Privacy Policy. We may
              disclose your Personal Information to third parties in a good
              faith belief that such disclosure is reasonably necessary to (a)
              take action regarding suspected illegal activities; (b) enforce or
              apply our terms and conditions and Privacy Policy; (c) comply with
              legal process, such as a search warrant, summons, statute, or
              court order; or (d) protect our rights, reputation, and property,
              or that of our Users, Partners, Vendors, Affiliates, or the
              public. Please note that we are not required to question or
              contest the validity of any search warrant, summons or other
              similar governmental request or orders that we receive.
            </p>

            <p className="mb-8">
              We may disclose information in the aggregate to third parties
              relating to User behavior in connection with actual or prospective
              business relationship with those third parties, such as
              advertisers and content distributors.
            </p>

            <h2 className="text-2xl font-semibold my-6">Activity</h2>

            <p className="mb-8">
              We record information relating to your use of our services, such
              as the searches you undertake, the pages you view, your browser
              type, IP address, location, requested URL, referring URL, and date
              and time stamp information. We use this type of information to
              administer our services and provide the highest possible level of
              security and service to you.
            </p>

            <h2 className="text-2xl font-semibold my-6">
              Intellectual Property Rights
            </h2>

            <p className="mb-6">
              We own all the intellectual property rights ("IP") associated with
              the Website and its content. No right, title or interest in any
              downloaded material is transferred to you as a result of any such
              downloading or copying. The Website is protected by copyright as a
              collective work and/ or compilation (meaning the collection,
              arrangement, and assembly) of all the content on this Website,
              pursuant to applicable law.
            </p>

            <p className="mb-8">
              Our logos, product and service marks and/ or names, trademarks,
              copyrights and other intellectual property, whether registered or
              not ("OUR IP") are exclusively owned by us. Without our prior
              written permission, you agree not to display and/ or use our IP in
              any manner. Nothing contained in this Website or the content,
              should be construed as granting, in any way to the User, any
              license or right or interest whatsoever, in and/ or to Our IP,
              without our express written permission.
            </p>

            <h2 className="text-2xl font-semibold my-6">
              Advertisers, Co-Sponsers And Links To Others
            </h2>

            <p className="mb-6">
              The Website may contain or display information from partners,
              vendors, sponsors, co-sponsors, advertisers, operational service
              providers, or others that offer information, products and/or
              services available, and/or that provides opportunities to
              participate in promotions or engage in activities or that link or
              redirect User's browser to other websites, web pages, materials,
              or organizations.
            </p>

            <p className="mb-6">
              We encourage the Users to be aware when to leave the Website or
              take advantage of advertised offers, links or other references,
              many of which may direct the Users to internet browser, websites
              or web pages of third parties. Users should read their (third
              party's) privacy statements and the terms and conditions that
              apply as we shall not be responsible for any of the terms and
              conditions, privacy practices, the content, functions, features,
              products, activities, and/or transactions you may engage with them
              when you are using / not using the Website.
            </p>

            <p className="mb-8">
              If we use operational service providers to serve advertisements
              when you visit the Website, the operational service provider, in
              connection with the Website, may use information about your visit
              to the Website in order to serve the advertisements about products
              and services that may be of interest to the Users. In the course
              of serving advertisements on the Website, our operational service
              providers may use cookies and other technologies.
            </p>

            <h2 className="text-2xl font-semibold my-6">
              Information Security
            </h2>

            <p className="mb-6">
              We take appropriate security measures to protect the user's
              information against any unauthorized or unlawful access or
              unauthorized alteration, modification, disclosure or destruction
              of data uploaded and stored by Users. These include internal
              reviews of our data collection, storage and processing practices
              and security measures, including appropriate encryption and
              physical security measures to guard against unauthorized access to
              systems where we store personal data.
            </p>

            <p className="mb-6">
              All information gathered on the Website is securely stored within
              the company's controlled database. The database is stored on
              servers well secured behind a firewall; access to these servers is
              password-protected and is strictly limited. However, as effective
              as our security measures are, no security system is impenetrable.
              We cannot guarantee, ensure or warrant the security of our
              database, nor can we guarantee that information Users supply will
              not be intercepted while being transmitted to us over the
              Internet. Furthermore, any information you post to the discussion
              areas is available in public domain with accessibility.
            </p>

            <p className="mb-8">
              The internet is an ever evolving medium. We may change our Privacy
              Policy from time to time without any notice to incorporate
              necessary future changes. The changes made will be from immediate
              effect. Further, to make sure you are aware of any changes, please
              review this Privacy Policy periodically. Moreover, our use of any
              information gathered will always be consistent with the policy
              under which the information was collected, regardless of what the
              new policy may be.
            </p>

            <p className="mb-8">
              We use third-party advertising companies to serve ads when Users
              visit our Website. These companies may use personal information
              and information about your visits to this and other Websites in
              order to provide advertisements about goods and services of
              interest to Users. Any complaints or concerns with regards to
              content or to report any abuse of laws or breach of these terms
              and conditions of the Privacy Policy may be taken up with the
              designated Grievance Officer as mentioned below.
            </p>

            <h2 className="text-2xl font-semibold my-6">
              Grievance RedressalL
            </h2>

            <p className="mb-6">
              Any complaints, questions, feedback, abuse or concerns with
              regards to content and or comment or breach of these terms shall
              be immediately informed to the designated Grievance Officer as
              mentioned below via in writing or through email signed with the
              electronic signature to the Grievance Officer at:
            </p>

            <p className="text-blue-600 font-medium mb-8">
              care@itrustmore.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
