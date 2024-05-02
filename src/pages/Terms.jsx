import { motion } from 'framer-motion';
import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
import "./Terms.css"
const Terms = () => {
  return (
    <div class="terms-page">
      <header class="mt-5">
        <div class="container h-100 d-flex align-items-center justify-content-start">
          <motion.div
            initial={{ opacity: 0, x: "150px" }}
            animate={{ opacity: 1, x: "0" }}
            transition={{ duration: 1.5 }}
          >
            <h1 class="text-light ms-5 fs-1 mt-5">Terms</h1>
          </motion.div>
        </div>
      </header>
      <div className="container m-5 text-start">
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Terms & Conditions:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Terms &
            Conditions for the Chai Max Franchise The franchise agreement
            between Chai Max and the franchisee (the "franchisee") is governed
            by these terms and conditions (the "Terms"). <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> The Franchisee
            acknowledges that by signing a franchise agreement with Chai Max,
            they will comply with these Terms. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Franchise
            Agreement: The Franchisee agrees to operate a Chai Max franchise
            business ("Franchise Business") in compliance with the terms and
            conditions stated herein, having entered into a legally binding
            agreement with Chai Max. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Franchise Fee:
            As specified in the franchise agreement, the franchisee promises to
            pay the first franchise fee. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> The right to
            run a Chai Max franchise is granted to the Franchisee by this price.
            <br /> <BsPatchCheckFill id="FontYellow" className="me-2" />
            Fees and Royalties: As stated in the franchise agreement, the
            franchisee commits to paying royalties and other costs.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Return & Refund Policy:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> The processes
            for returns and refunds between the franchisor ("Chai Max") and the
            franchisee ("Franchisee") are governed by this return and refund
            policy. <br /> <BsPatchCheckFill id="FontYellow" className="me-2" />
            The Franchisee consents to follow this guideline by signing a
            franchising agreement with Chai Max. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Returns of
            Products: If a product is found to be defective or damaged upon
            receipt, the Franchisee may return it to Chai Max directly. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Within
            [number] days of receipt, the Franchisee is required to inform Chai
            Max of any defective or damaged products. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Return
            Authorization: The Franchisee needs to get permission from Chai Max
            before returning any merchandise. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Returns
            without authorization won't be accepted. Return Procedure: The
            Franchisee must get in touch with Chai Max to start the return
            process and receive instructions and a return authorization number.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Ordering:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Authorized
            Ordering: Only individuals who have been granted permission by the
            franchisee to make orders with Chai Max for raw ingredients may do
            so. <br /> <BsPatchCheckFill id="FontYellow" className="me-2" /> For
            ordering purposes, the Franchisee is required to give Chai Max a
            list of authorized personnel. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Order
            placement: To place an order for raw materials, the franchisee must
            email or use the special ordering mechanism that Chai Max has
            supplied to send a purchase order to Chai Max. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Purchase
            orders for raw materials must include the quantity, description, and
            any other pertinent information. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Lead Time: In
            order to guarantee prompt delivery of raw materials, the franchisee
            must place orders with Chai Max with enough lead time. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            The lead time needed for order processing and fulfillment will be
            specified by Chai Max. Chai Max has the right to enforce minimum
            order conditions.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Cancellation:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Notice of
            Intent to Cancel: Either party wishing to cancel the franchise
            agreement must provide written notice to the other party. The notice
            period for cancellation shall be [insert number] days unless
            otherwise specified in the franchise agreement. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Reason for Cancellation: The party initiating the cancellation must
            provide a valid reason for termination of the franchise agreement.
            Valid reasons may include but are not limited to breach of contract,
            financial insolvency, or mutual agreement. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Termination
            Procedure: Upon receipt of the cancellation notice, both parties
            shall cooperate to ensure a smooth termination process. This may
            include transferring ownership of assets, settling outstanding
            financial obligations, and discontinuing the use of Chai Max
            branding and intellectual property. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Franchisee Obligations: In the event of cancellation, the franchisee
            agrees to cease all operations of the franchised business and return
            any proprietary materials, equipment, or signage provided by Chai
            Max. The franchisee shall also settle any outstanding financial
            obligations owed to Chai Max, including unpaid royalties or fees.
            <br /> <BsPatchCheckFill id="FontYellow" className="me-2" />
            Franchisor Obligations: Chai Max agrees to provide reasonable
            assistance to the franchisee during the transition period following
            cancellation. This may include facilitating the sale of assets,
            providing guidance on winding down operations, and assisting with
            the removal of branding materials. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Financial Settlement: Any financial settlement or reimbursement owed
            to either party as a result of the cancellation shall be determined
            based on the terms outlined in the franchise agreement. This may
            include refunding franchise fees, reimbursing expenses incurred by
            the franchisee, or compensating Chai Max for damages resulting from
            the cancellation. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Confidentiality: Both parties agree to maintain the confidentiality
            of any proprietary information shared during the course of the
            franchise agreement, including trade secrets, customer lists, and
            business strategies, even after the cancellation of the agreement.
            <br /> <BsPatchCheckFill id="FontYellow" className="me-2" />
            Dispute Resolution: In the event of disputes arising from the
            cancellation, both parties agree to engage in good faith
            negotiations to resolve the issues amicably. If resolution cannot be
            reached through negotiations, the parties may resort to mediation or
            arbitration as specified in the franchise agreement. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Final Agreement: Both parties acknowledge that the terms outlined in
            this cancellation policy represent the final agreement regarding the
            termination of the franchise agreement and supersede any prior
            agreements or understandings.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Customer Cancellation:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Notice of
            Intent to Cancel: If one party wants to end the franchise agreement,
            they have to give the other party written notice of their intention
            to do so.
            <br /> <BsPatchCheckFill id="FontYellow" className="me-2" /> Unless
            the franchise agreement specifies otherwise, [insert number] days
            notice of cancellation is required. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> cause for
            Cancellation: The person who is canceling the franchise agreement
            must give a good cause for doing so. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Reasons such
            as mutual agreement, financial insolvency, or contract violations
            are all acceptable. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Termination
            Procedure: In order to guarantee a seamless termination process,
            both parties must collaborate after receiving the cancellation
            notification. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> This can
            entail giving up ownership of the assets, paying off debt, and
            ceasing to use the Chai Max trademark and intellectual property.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Ownership of Intellectual Property:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Trademarks and
            Logos: Chai Max is the only owner of any trademarks, service marks,
            logos, and trade names connected to it, including but not limited to
            the Chai Max name and logo. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> It is totally
            forbidden to use or reproduce these trademarks and logos without
            authorization. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> All
            formulations, methods, and techniques that are used exclusively by
            Chai Max to prepare its products are owned by the company. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> It is
            prohibited to reveal or use these formulas and recipes for any
            reason other than running a Chai Max franchise. They are proprietary
            and confidential information.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Payment Policy:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Payment Plan:
            As specified in the franchise agreement, Chai Max will pay the
            franchisee on the prearranged dates. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Payment plans
            may change based on things like marketing contributions, royalties,
            and sales performance. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Royalties: As
            stipulated in the franchise agreement, franchisees must pay
            royalties to Chai Max as a percentage of gross sales. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Franchisees
            will receive royalty payments from Chai Max on a regular basis.
            <br /> <BsPatchCheckFill id="FontYellow" className="me-2" />
            Marketing Contributions: As specified in the franchise agreement,
            franchisees may be obliged to make financial contributions for
            marketing and advertising. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> In order to
            promote marketing campaigns on behalf of all franchisees, Chai Max
            will allocate and use these monies.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Personal Information & Privacy:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> At Chai Max,
            we only gather personal data from franchisees and their employees
            for business needs like correspondence, money transfers, and legal
            compliance. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> We take
            security precautions to preserve sensitive information, and we only
            reveal it when required—for example, to comply with legal
            requirements or obtain consent. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Franchisees
            have the right to view and update their information, as does their
            staff. They acknowledge having read the franchise agreement and
            agree to our privacy policies.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Privacy Policy:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Information Collection: We collect necessary personal information to
            provide our services. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Use of Information: We use your information for service delivery,
            communication, and improvement. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Data Security: We employ security measures to safeguard your
            information. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Disclosure: We may share your information with trusted partners for
            service delivery. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Cookies: We use cookies for website functionality, but you can opt
            out. <br /> <BsPatchCheckFill id="FontYellow" className="me-2" />
            Updates: We may update our policy; check our website for changes.
          </p>
        </div>
        <div className="container-fluid mx-md-5 mx-0 px-5">
          <h2 className="mb-3 fw-bold">Disclaimer:</h2>
          <p>
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Informational
            Goal: This is not a franchise offer; the information is for general
            understanding only. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Financial Estimates: All projected earnings and amounts are
            approximations and could change. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Examine the
            following documents: Before making an investment, go over the
            franchise agreement and disclosure document (FDD). <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Seek Advice:
            Prior to making a choice, obtain independent legal and financial
            counsel. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> No Promises:
            Chai Max does not promise the profitability or success of its
            franchises. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Updates to the
            Terms: Chai Max may alter the terms of the agreement by giving
            notification. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Independent
            Operation: Franchisees run their businesses on their own and are in
            charge of them. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" /> Liability
            Limitation: Chai Max is not responsible for the commercial success
            of its franchisees. <br />
            <BsPatchCheckFill id="FontYellow" className="me-2" />
            Legal Jurisdiction: The courts and laws of [Jurisdiction] have
            jurisdiction over disputes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms
