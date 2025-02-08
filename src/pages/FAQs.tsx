import React from "react";

export default function FAQs() {
  return (
    <div style={{paddingTop : 5}}>
      <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative m-auto container-md container">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <h1 className="h1 text-gradient text-center position-relative z-3 d-inline">
            FAQs
          </h1>
        </div>
        <h2 className="fs-5 text-muted text-center lh-lg mb-0 mb-4 mb-lg-5">
          Answering the most popular questions
        </h2>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                type="button"
                aria-expanded="false"
                className="accordion-button collapsed"
              >
                1. Is Veil a decentralized exchange (DEX)?
              </button>
            </h2>
            <div className="accordion-collapse collapse">
              <div className="accordion-body">
                No, Veil is not a decentralized exchange (DEX) platform.
                Instead, it functions as a protocol and bridge between different
                blockchain networks, enabling cryptocurrency swaps and
                transactions. While it's not a DEX, Veil emphasizes privacy,
                security, and community engagement.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                type="button"
                aria-expanded="false"
                className="accordion-button collapsed"
              >
                2. How can I participate in the Veil Revenue Share Program?
              </button>
            </h2>
            <div className="accordion-collapse collapse">
              <div className="accordion-body">
                To participate in the Veil Revenue Share Program, you need to
                hold a minimum amount of Veil tokens in your wallet. The
                specific amount required for eligibility is determined by the
                platform and is transparently communicated to the community. The
                program distributes a share of the exchange's revenue, including
                trading fees from both the Veil token and the exchange, to
                eligible token holders regularly.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                type="button"
                aria-expanded="false"
                className="accordion-button collapsed"
              >
                3. What percentage of the Trading fee and token fee is allocated
                towards the Veil Revenue Share Program?
              </button>
            </h2>
            <div className="accordion-collapse collapse">
              <div className="accordion-body">
                20% of the total trading fees generated by the Veil platform and
                the Veil Token are allocated to the Veil Revenue Share Program.
                This includes both the trading fee from the Veil token and the
                trading fee from the exchange. This revenue is distributed
                proportionally among eligible token holders as part of the
                program, allowing them to earn a share of the exchange's
                success.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
