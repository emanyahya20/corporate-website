export default function CookiesPage() {
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
          <source src="/videos/cook.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome Message */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              Cookies Policy
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Here is how we collect your personal information
            </p>
          </div>
        </div>
      </section>

      {/* Cookies Policy Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-6">Cookies Policy</h2>
          <p className="text-sm text-gray-600 mb-6">Last updated: March 2025</p>

          <div className="prose prose-lg max-w-none text-black">
            <p>
              This Cookies Policy explains how cookies are used on this website
              and other digital platforms operated by{" "}
              <strong>Trustmore Group</strong> and its global affiliates and
              subsidiaries ("Trustmore," "we," "our," or "us"). We may update
              this policy periodically to reflect changes in our practices,
              technologies, or applicable regulations. We encourage you to
              review this page regularly to stay informed. By using this
              website, you consent to the placement of cookies on your device in
              accordance with the terms outlined below. If you do not wish to
              accept cookies, please disable them via your browser settings or
              refrain from using our digital platforms.
            </p>

            <p className="font-bold">&nbsp;</p>

            <h3 className="text-xl font-semibold text-black mb-4">
              What Are Cookies?
            </h3>
            <p>
              Cookies are small text files that are placed on your device
              (computer, smartphone, or tablet) when you visit a website. They
              are widely used to enable websites to function efficiently,
              enhance user experience, and provide reporting information.
              Cookies help us recognize your device, remember your preferences,
              and understand how our website is being used.
            </p>

            <p className="font-bold">&nbsp;</p>

            <h3 className="text-xl font-semibold text-black mb-4">
              Types of Cookies We Use
            </h3>
            <p className="font-medium text-black">Strictly Necessary Cookies</p>
            <p>
              These cookies are essential for the technical operation of our
              websites and digital services. They enable navigation, access to
              secure areas, and support functionality such as session
              management. Disabling them may limit or block access to key
              features.
            </p>

            <p className="font-medium text-black mt-4">Performance Cookies</p>
            <p>
              These cookies collect data on how visitors use our site, such as
              which pages are visited most frequently or if certain pages return
              error messages. They help us improve the performance and usability
              of our platforms.
            </p>

            <p className="font-medium text-black mt-4">Analytics Cookies</p>
            <p>
              We use these cookies to gather insights into user behavior,
              helping us better understand our audience and deliver more
              relevant content and experiences.
            </p>

            <p className="font-medium text-black mt-4">Marketing Cookies</p>
            <p>
              These cookies support our digital marketing efforts by helping us
              measure the effectiveness of campaigns and deliver more targeted
              advertising. They may collect limited personal information, such
              as IP addresses or interaction history.
            </p>

            <p className="font-bold text-black mt-4">&nbsp;</p>

            <h3 className="text-xl font-semibold text-black mb-4">
              First-Party and Third-Party Cookies
            </h3>
            <p>
              First-party cookies are set directly by Trustmore to enhance
              website functionality and analytics. Third-party cookies may be
              set by partners like Google Analytics or Microsoft Advertising.
              These help us understand how users engage with our site and
              improve our marketing efforts. Links to external sites may lead to
              platforms that use their own cookies under separate policies. We
              do not control those cookies and encourage you to review the
              privacy practices of any linked sites
            </p>

            <p className="font-bold">&nbsp;</p>

            <h3 className="text-xl font-semibold text-black mb-4">
              Cookies and Personal Data
            </h3>
            <p>
              Some cookies may collect personal data such as IP addresses, email
              addresses, or names. Trustmore is committed to protecting your
              personal information in accordance with our Privacy Policy. We
              apply strict safeguards to ensure any personal data collected via
              cookies is handled securely and in compliance with data protection
              laws.
            </p>

            <p className="font-bold mt-4">&nbsp;</p>

            <h3 className="text-xl font-semibold text-black mb-4">
              Managing Cookies and Your Rights
            </h3>
            <p>
              You have the right to accept, reject, or manage cookies through
              your browser settings. Most browsers automatically accept cookies,
              but you can usually modify your settings to decline cookies or
              notify you when a cookie is being placed. You can also manage
              similar technologies, such as Flash cookies, through browser
              extensions or add-on settings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
