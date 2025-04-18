export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video Banner */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/ts.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome Message */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Last updated: March 2025
            </p>

            <p className="mb-8">
              Welcome to the Trustmore Group website ("Website"). By accessing
              or using this Website, you agree to comply with and be bound by
              the following terms and conditions ("Terms of Service"). These
              Terms of Service ("Terms") govern your access to and use of the
              services, including our website, APIs, email notifications,
              applications, buttons, and widgets ("Services"), and any
              information, text, links, graphics, photos, audio, videos, or
              other materials uploaded, downloaded or appearing on the Services,
              collectively referred to as "Content".
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Use of the Website
            </h3>

            <p className="mb-8">
              This Website is intended for informational purposes only and does
              not constitute an offer, solicitation, or recommendation to buy or
              sell any financial product or service, or to engage in any
              specific investment activity. Use of the Website is at your own
              risk. Trustmore Group reserves the right to withdraw or amend
              access to any part of the Website, or any service we provide,
              without notice.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              No Financial Advice
            </h3>

            <p className="mb-8">
              The content on this Website is provided for general information
              purposes only. It does not constitute financial, investment, tax,
              legal, or any other form of professional advice. Please consult
              with your financial advisor or other qualified professional before
              making any financial decisions.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Privacy</h3>

            <p className="mb-8">
              Our Privacy Policy describes how we handle the information you
              provide to us when you use our Services. You understand that
              through your use of the Services you consent to the collection and
              use of this information, including the transfer of this
              information to India and/or other countries for storage,
              processing and use by our company in accordance with applicable
              data protection laws.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Intellectual Property
            </h3>

            <p className="mb-8">
              All content on this Website, including but not limited to logos,
              images, graphics, text, and downloadable materials, is the
              exclusive property of Trustmore Group and is protected by
              applicable intellectual property laws. You may not reproduce,
              distribute, or use this content without prior written consent.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Content on the Services
            </h3>

            <p className="mb-6">
              You are responsible for your use of the Services and for any
              Content you provide, including compliance with applicable laws,
              rules, and regulations. You should only provide Content that you
              are comfortable sharing with others.
            </p>

            <p className="mb-8">
              Any use or reliance on any Content or materials posted via the
              Services or obtained by you through the Services is at your own
              risk. We do not endorse, support, represent or guarantee the
              completeness, truthfulness, accuracy, or reliability of any
              Content or communications posted via the Services or endorse any
              opinions expressed via the Services.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Limitation of Liability
            </h3>

            <p className="mb-8">
              Trustmore Group and its affiliates, directors, officers, and
              employees are not liable for any direct, indirect, incidental, or
              consequential damages resulting from the use of, or inability to
              use, this Website, including any errors or omissions in the
              content.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Using the Services
            </h3>

            <p className="mb-8">
              You may use the Services only in compliance with these Terms and
              all applicable laws, rules and regulations. Our Services evolve
              constantly. As such, the Services may change from time to time, at
              our discretion. We may stop (permanently or temporarily) providing
              the Services or any features within the Services to you or to
              users generally. We also retain the right to create limits on use
              and storage at our sole discretion at any time. We may also remove
              or refuse to distribute any Content on the Services, limit
              distribution or visibility of any Content on the service, suspend
              or terminate users, and reclaim usernames without liability to
              you.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Your Account</h3>

            <p className="mb-8">
              You may need to create an account to use some of our Services. You
              are responsible for safeguarding your account, so use a strong
              password and limit its use to this account. We cannot and will not
              be liable for any loss or damage arising from your failure to
              comply with the above.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Third-Party Links
            </h3>

            <p className="mb-8">
              This Website may contain links to third-party websites for your
              convenience. Trustmore Group does not control, endorse, or take
              responsibility for the content, availability, or practices of such
              external sites.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Limitations of Liability
            </h3>

            <p className="mb-8">
              By using the Services you agree that Trustmore Technologies (P)
              Limited, its parents, affiliates, related companies, officers,
              directors, employees, agents representatives, partners and
              licensors, liability is limited to the maximum extent permissible
              in your country of residence.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">General</h3>

            <p className="mb-8">
              We may revise these Terms from time to time. The changes will not
              be retroactive, and the most current version of the Terms, which
              will always be at www.escrowpayindia.com/terms, will govern our
              relationship with you. We will try to notify you of material
              revisions, for example via a service notification or an email to
              the email associated with your account. By continuing to access or
              use the Services after those revisions become effective, you agree
              to be bound by the revised Terms.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Changes to These Terms
            </h3>

            <p className="mb-8">
              Trustmore Group may revise these Terms of Service at any time
              without prior notice. Continued use of the Website following any
              changes constitutes your acceptance of the updated Terms.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h3>

            <p className="mb-8">
              These Terms and any action related thereto will be governed by the
              laws of India without regard to or application of its conflict of
              law provisions or your state or country of residence. All claims,
              legal proceedings or litigation arising in connection with the
              Services will be brought solely in the courts located in New
              Delhi, India, and you consent to the jurisdiction of and venue in
              such courts and waive any objection as to inconvenient forum.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Contact Information
            </h3>

            <div className="address-block mb-8">
              <p className="font-semibold mb-2">Trustmore Group</p>
              <p className="mb-2">Corporate Office:</p>
              <address className="not-italic mb-4">
                Ground Floor, 7A, Standard Chartered Tower,
                <br />
                DLF Cyber City, DLF Phase 2,
                <br />
                Sector 24, Gurugram,
                <br />
                Haryana 122001, India
              </address>
              <p>
                Email:{" "}
                <a
                  href="mailto:care@itrustmore.com"
                  className="text-blue-600 hover:underline"
                >
                  care@itrustmore.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
