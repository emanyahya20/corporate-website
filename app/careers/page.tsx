export default function CareersPage() {
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
          <source src="/videos/care.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Welcome Message */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              Welcome to Trustmore Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10">
              Connecting the World’s Money Flows with Trust, Transparency, and
              Technology. Trustmore. Do More.
            </p>
          </div>
        </div>
      </section>

      {/* Careers Content */}
      <section className="bg-white text-gray-900 py-16 px-6 lg:px-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Introduction */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">
              Careers at Trustmore Group: Build More, Be More
            </h2>
            <p className="text-lg">
              At Trustmore, careers aren’t found — they’re made. We are a global
              financial and wealth management group driven by trust, innovation,
              and purpose. For over 25 years, we’ve helped people, businesses,
              and nations unlock value, manage wealth, and reimagine the flow of
              money and opportunities.
            </p>
            <p className="text-lg font-medium">
              Join us, and be part of something meaningful.
            </p>
          </div>

          {/* Why Join Us */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Why Join Us</h3>
            <ul className="space-y-4 text-lg list-disc list-inside">
              <li>
                <strong>Legacy of Leadership:</strong> Be part of a trusted name
                with 25+ years of global financial expertise
              </li>
              <li>
                <strong>Work With Visionaries:</strong> Collaborate with
                thought-leaders and forward-thinking teams in India, Dubai, and
                global markets
              </li>
              <li>
                <strong>Grow Beyond Boundaries:</strong> Learn, lead, and shape
                new frontiers in fintech, private wealth, and luxury experiences
              </li>
              <li>
                <strong>Purpose-Driven Culture:</strong> Work in an environment
                that values integrity, trust, and people over everything else
              </li>
              <li>
                <strong>Do More, Achieve More:</strong> Build a career that
                grows with you — with real impact, opportunity, and global
                recognition
              </li>
            </ul>
          </div>

          {/* Life at Trustmore */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Life at Trustmore</h3>
            <ul className="space-y-4 text-lg list-disc list-inside">
              <li>Dynamic, meritocratic, and inclusive work environment</li>
              <li>
                Exposure to cross-border projects and global collaborations
              </li>
              <li>
                Access to leadership mentoring and career acceleration programs
              </li>
              <li>
                Annual leadership summits and networking events in India, Dubai,
                and international destinations
              </li>
              <li>A company that celebrates life as much as business</li>
            </ul>
          </div>

          {/* Leadership Voices */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Leadership Voices</h3>
            <blockquote className="italic border-l-4 border-gray-400 pl-4 text-lg">
              “At Trustmore, we don’t just build businesses — we build futures.”
              <br />
              <span className="font-medium">
                – Ashwin Chawwla, Chairman & Managing Director
              </span>
            </blockquote>
            <blockquote className="italic border-l-4 border-gray-400 pl-4 mt-6 text-lg">
              “Your ideas, your voice, your ambition — all matter here.”
              <br />
              <span className="font-medium">
                – Trustmore Group Executive Council
              </span>
            </blockquote>
          </div>

          {/* Open Positions */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Open Positions</h3>
            <ul className="space-y-3 text-lg list-disc list-inside">
              <li>Head of Digital Escrow Operations (Dubai & Mumbai)</li>
              <li>Private Wealth Relationship Manager (UAE, Singapore)</li>
              <li>Luxury Concierge Specialist – LuxeJoys (Dubai)</li>
              <li>Global Payments Sales Manager – Escrowpay (India, GCC)</li>
              <li>Investment Structuring Advisor – IPRIVE (Global)</li>
            </ul>
            <p className="mt-4 text-blue-600 font-medium underline">
              [See all openings]
            </p>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-lg">
              Follow our job updates on{" "}
              <a
                href="https://www.linkedin.com/company/trustmoregroup/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-medium"
              >
                LinkedIn
              </a>{" "}
              to stay updated on Trustmore Group’s global team expansion and
              exciting new opportunities.
            </p>
          </div>

          {/* Join the Family */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">
              Join the Trustmore Family
            </h3>
            <p className="text-lg mb-2">
              Your future starts here. We’re looking for people who dream big,
              think bold, and care deeply.
            </p>
            <p className="text-lg font-medium">
              If you’re ready to build a legacy with us — let’s connect.
            </p>
            <p className="text-lg mt-4">
              <strong>Submit your CVs:</strong>{" "}
              <a
                href="mailto:care@itrustmore.com"
                className="text-blue-600 underline"
              >
                care@itrustmore.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
