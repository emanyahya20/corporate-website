export default function DisclaimerPage() {
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
                Disclaimer
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                Important information about our services and your use of our website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Trustmore Technologies (P) Limited (hereinafter referred to as the "Company" or "Escrowpay") owns and
              operates the website www.escrowpayindia.com including any sub-domains (hereinafter referred to as the
              "Website"). The Company acts as a facilitator for collections and payments for the transaction management
              and escrow facilitation services between the Buyer and Seller and Merchant/ Intermediary (hereinafter
              referred to as the User, You or Your) for transactions relating to Assets, Goods and Services. Buyer,
              Seller Merchant, ATS shall have the meaning and definition as contained in the Terms of Services available
              on the Website.
            </p>

            <p>
              The Company strictly acts on the basis of the terms of the Agreement to Sell ("ATS") and Release
              instructions received from the Buyer and/or Seller and/or Merchant and does not, in any way whatsoever,
              takes part in the negotiation or management of the transactions. It is solely Your responsibility to
              evaluate the accuracy, completeness and usefulness of all opinions, advice and other related information
              on the Assets, Goods and Services being transacted by You. Any information furnished or acted upon by the
              Buyer or Seller or Merchant, collectively or individually, is not the responsibility of the Company.
              Company does not endorse the same and shall not be responsible for them. No claim as to the accuracy and
              correctness of the information on the Website is made although every attempt is made to ensure that the
              content is not misleading/ offensive/ inappropriate or fraudulent. Any inaccuracy, error, mistakes or
              otherwise improper content found on the Website, must be reported to the the Grievance Officer of the
              Company on email – care@escrowpayindia.com.
            </p>

            <p>
              Nothing contained on the Website, should be construed as an endorsement by the Company of any transaction
              relating to sale/purchase of Assets or Goods and Services or a recommendation to buy/sell the same from
              other User(s)/Merchant(s) or the authenticity and genuinity of the User(s)/Merchant(s). Users transacting
              in sale/purchase of such Assets or Goods and Services shall be doing so entirely at their own risk and
              responsibility.
            </p>

            <p>
              The information, products and services included in or available on the Website may include inaccuracies or
              typographical errors. Changes will be added on a periodical basis from time to time to the information
              therein. Users are advised to visit the Website on a regular basis and view the necessary changes.
            </p>

            <p className="uppercase font-bold">
              THE CONTENT AND DOCUMENTS UPLOADED/PROVIDED, INCLUDING BUT NOT LIMITED TO, DOCUMENTS FOR KYC VERIFICATION
              AND OTHER TRANSACTION RELATED DOCUMENTS ARE MADE AVAILABLE ON THE WEBSITE ON "AS IS" BASIS. THE COMPANY OR
              ANY OF ITS AFFILIATES, PARTNERS, VENDORS, SERVICE PROVIDERS, AGENTS AND LICENSORS DO NOT WARRANT AND
              GUARANTEE ACCURACY, COMPLETENESS, REPRESENTATION, NON-INFRINGEMENT OR FITNESS FOR PARTICULAR INFORMATION
              OF ANY KIND, EITHER EXPRESS OR IMPLIED. THE COMPANY DOES NOT VERIFY THE DOCUMENTS IN ORIGINAL OR IN
              PERSON. ANY DOCUMENTS UPLOADED BY THE BUYER OR SELLER OR MERCHANT ARE MERELY SCANNED COPIES OF THE
              DOCUMENTS REQUIRED, INCLUDING BUT NOT LIMITED TO DOCUMENTS FOR ADDRESS PROOF, IDENTITY PROOF, CANCELLED
              CHEQUE, AGREEMENT TO SELL, RELEASE LETTER OR OTHER DEEDS AND DOCUMENTS, ETC. THE COMPANY SHALL NOT BE
              RESPONSIBLE OF ANY DUPLICACY, MISREPRESENTATION OR FORGERY OF SUCH DOCUMENTS.
            </p>

            <p className="uppercase font-bold">
              IF YOU RELY ON THE SERVICES OR INFORMATION PROVIDED ON THIS WEBSITE YOU DO SO AT YOUR SOLE RISK,
              RESPONSIBILITY AND PERIL. YOU UNDERSTAND AND ACCEPT THAT THERE MAY BE DELAYS, DISCREPANCIES, OMISSIONS,
              INTERRUPTIONS AND/OR ISSUES WITH THE INFORMATION'S, PRODUCTS AND SERVICES PUBLISHED OVER THE WEBSITE.
            </p>

            <p className="uppercase font-bold">
              THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES AND GUARANTEES, EXPRESSED OR IMPLIED, STATUTORY OR OTHERWISE
              INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR TRANSACTIONS RELATED TO
              ASSETS, GOODS AND SERVICES FOR ANY PURPOSES WHATSOEVER, NON-INFRINGEMENT OF THIRD PARTY RIGHTS,
              COMPLETENESS OR ACCURACY OF THE INFORMATION, UPDATION OR CORRECTNESS OF THE INFORMATION, ERROR FREE FROM
              COMPUTER VIRUSES, OR CONTINUOUSLY AVAILABLE INFORMATION AND OTHER VIOLATION OF RIGHTS REGARDING SERVICES,
              PRODUCTS AND CONTENTS UPLOADED ON THE WEBSITE.
            </p>

            <p>
              The Company shall be free to refuse any document uploaded by the User if it has reasons to believe that
              the document may be unauthorized or may violate any law, rule or regulation, or if it has reasonable cause
              not to honor it. The Company hereby disclaims all claims that may arise due to or in connection with the
              due diligence of the Assets, Goods or Services to be transacted on the Website.
            </p>

            <p>
              The services rendered by the Company on its Website are in association with various third parties like
              Partner Banks, Trustee Companies, Payment Gateway etc., which are independent service providers. Neither
              the Company nor the said third party make any representation or assurances towards the quality, timeliness
              or efficiency of their independent services rendered by them on or through the Website; and disclaim any
              service delays, omissions, non-performance, defaults caused in the facilitation services. The Company
              and/or the said third party make no guarantee, warranty or representation with regard to any services
              obtained by parties through the use of the Website or the facilitation services.
            </p>

            <p>
              Further, the Company and/or the said third party make no warranties that the underlying services will meet
              your requirements, or will be uninterrupted, timely, or error free.
            </p>

            <p>
              Company does not warrant that the access to website will be uninterrupted or error-free or that defects in
              Website will be corrected. Any payments made to the Company are solely for the purposes of collections and
              payment transactions in the Escrow Account provided by the Company subject to deduction of its Escrow Fee,
              which is agnostic of the outcome of the transaction.
            </p>

            <p>
              Under no circumstances the Company or any of its partners, vendors, service providers affiliates, agents,
              representative shall be liable to you or anyone else for any losses, claims and damages, including but not
              limited to, any liability for consequential, special, incidental, direct or indirect, punitive or
              exemplary, or other damages or any kind (including lost revenue or profits , loss of business or loss of
              dates) even we are informed or advised beforehand of the possibility of such damages.
            </p>

            <p>
              The material contained in the Website is general information and it is not intended to be construed as an
              advice on any particular matter. Users are advised to seek professional advice before acting on the
              information provided herein. The decision with respect to any product or services or opportunity or nature
              or suitability or choice or the viability of any Assets, Goods or Services shall be the sole
              responsibility of the user.
            </p>

            <p>
              Company is registered, controlled and operated from India and the Company makes no representation that the
              Assets, Goods and Services are appropriate or will be available for use in other parts of the world as
              well. If you use the Website from outside India, you are entirely responsible for compliance with all
              applicable laws of that country as well as international conventions and treaties.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
