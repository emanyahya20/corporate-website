export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen md:h-[110vh] min-h-[500px] md:min-h-[700px] overflow-hidden">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="#" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="w-full max-w-4xl mx-auto lg:mx-0">
            <div className="text-center lg:text-left px-4 sm:px-0">
              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-3 sm:mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                Terms of Service
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                Please read these terms carefully before using our services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Terms of Service</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of the services, including our website,
              APIs, email notifications, applications, buttons, and widgets (the "Services"), and any information, text,
              links, graphics, photos, audio, videos, or other materials uploaded, downloaded or appearing on the
              Services (collectively referred to as "Content").
            </p>

            <h3>1. Who May Use the Services</h3>
            <p>
              You may use the Services only if you agree to form a binding contract with Trustmore Technologies (P)
              Limited and are not a person barred from receiving services under the laws of the applicable jurisdiction.
              In any case, you must be at least 18 years old to use the Services.
            </p>

            <h3>2. Privacy</h3>
            <p>
              Our Privacy Policy describes how we handle the information you provide to us when you use our Services.
              You understand that through your use of the Services you consent to the collection and use of this
              information, including the transfer of this information to India and/or other countries for storage,
              processing and use by our company.
            </p>

            <h3>3. Content on the Services</h3>
            <p>
              You are responsible for your use of the Services and for any Content you provide, including compliance
              with applicable laws, rules, and regulations. You should only provide Content that you are comfortable
              sharing with others.
            </p>
            <p>
              Any use or reliance on any Content or materials posted via the Services or obtained by you through the
              Services is at your own risk. We do not endorse, support, represent or guarantee the completeness,
              truthfulness, accuracy, or reliability of any Content or communications posted via the Services or endorse
              any opinions expressed via the Services.
            </p>

            <h3>4. Using the Services</h3>
            <p>
              You may use the Services only in compliance with these Terms and all applicable laws, rules and
              regulations.
            </p>
            <p>
              Our Services evolve constantly. As such, the Services may change from time to time, at our discretion. We
              may stop (permanently or temporarily) providing the Services or any features within the Services to you or
              to users generally. We also retain the right to create limits on use and storage at our sole discretion at
              any time. We may also remove or refuse to distribute any Content on the Services, limit distribution or
              visibility of any Content on the service, suspend or terminate users, and reclaim usernames without
              liability to you.
            </p>

            <h3>5. Your Account</h3>
            <p>
              You may need to create an account to use some of our Services. You are responsible for safeguarding your
              account, so use a strong password and limit its use to this account. We cannot and will not be liable for
              any loss or damage arising from your failure to comply with the above.
            </p>

            <h3>6. Limitations of Liability</h3>
            <p>
              By using the Services you agree that Trustmore Technologies (P) Limited, its parents, affiliates, related
              companies, officers, directors, employees, agents representatives, partners and licensors, liability is
              limited to the maximum extent permissible in your country of residence.
            </p>

            <h3>7. General</h3>
            <p>
              We may revise these Terms from time to time. The changes will not be retroactive, and the most current
              version of the Terms, which will always be at www.escrowpayindia.com/terms, will govern our relationship
              with you. We will try to notify you of material revisions, for example via a service notification or an
              email to the email associated with your account. By continuing to access or use the Services after those
              revisions become effective, you agree to be bound by the revised Terms.
            </p>

            <h3>8. Governing Law</h3>
            <p>
              These Terms and any action related thereto will be governed by the laws of India without regard to or
              application of its conflict of law provisions or your state or country of residence. All claims, legal
              proceedings or litigation arising in connection with the Services will be brought solely in the courts
              located in India, and you consent to the jurisdiction of and venue in such courts and waive any objection
              as to inconvenient forum.
            </p>

            <p>If you have any questions about these Terms, please contact us at care@escrowpayindia.com.</p>

            <p>Effective: January 1, 2023</p>
          </div>
        </div>
      </section>
    </div>
  )
}
