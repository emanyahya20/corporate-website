export default function PGCompliancePage() {
  return (
    <div className="flex flex-col min-h-screen pt-24">
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
                PG Compliance
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                Payment Gateway compliance information
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PG Compliance Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">
                    Sr. No.
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">
                    Particulars
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-sm font-semibold text-gray-700">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">1.</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">About us</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    <a href="https://itrustmore.com/our-story" className="text-blue-600 hover:underline">
                      https://itrustmore.com/our-story
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">2.</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    Contact Us (Business Name, Address, Contact numbers, Email Ids)
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    <a href="https://itrustmore.com/contact/" className="text-blue-600 hover:underline">
                      https://itrustmore.com/contact/
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">3.</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    Product / Services Catalog which you are selling online to your customers along with Pricing
                    Information
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    Escrowpayindia.com provides Escrow Facilitation Services for purchase/sale of Assets, Goods and
                    Services. Escrowpay charges an escrow fee as per the agreement with the client which is normally
                    0.1% to 2.5% of the gross transaction value.
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">4.</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    Product/Services Purchase Flow for your customers
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm"></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">5.</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">Privacy Policy</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    <a href="https://itrustmore.com/privacy-policy/" className="text-blue-600 hover:underline">
                      https://itrustmore.com/privacy-policy/
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">6.</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">Terms of Use</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    <a href="https://itrustmore.com/terms-conditions/" className="text-blue-600 hover:underline">
                      https://itrustmore.com/terms-conditions/
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">7.</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">Disclaimer</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    <a href="https://itrustmore.com/disclaimer/" className="text-blue-600 hover:underline">
                      https://itrustmore.com/disclaimer/
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">8.</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">Return, Refund, & Cancellation Policy</td>
                  <td className="px-6 py-4 border-b border-gray-200 text-sm">
                    <p className="font-semibold mb-2">RETURN:</p>
                    <p className="mb-4">
                      Returns are as per the return policy of Seller(s) as mentioned in the Agreement entered into
                      between the Buyers and Sellers.
                    </p>
                    <p className="font-semibold mb-2">REFUND:</p>
                    <p className="mb-4">
                      Since the money is lying in a digital Escrow Account which can move to the Seller only on
                      instructions of the Buyer, there is no need to have a Refund policy. However, Escrowpay fee is
                      non-refundable, non-transferable, non-adjustable and is agnostic of the outcome of the
                      transaction.
                    </p>
                    <p className="font-semibold mb-2">CANCELLATION:</p>
                    <p>
                      Cancellations are as per the cancellation policy of Seller(s) as mentioned in the Agreement
                      entered into between the Buyers and Sellers.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
