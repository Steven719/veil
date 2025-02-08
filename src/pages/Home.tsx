import * as React from "react";
import media_back from "../assets/herobackground.webm";
import privacy from "../assets/images/home/types/privacy-driven.webp";
import nolimitswallet from "../assets/images/home/types/no-limits-wallet.webp";
import seamlessprocess from "../assets/images/home/types/seamless-process.webp";
import btc from "../assets/images/home/cryptos/btc.svg";
import eth from "../assets/images/home/cryptos/eth.svg";
import btt from "../assets/images/home/cryptos/btt.svg";
import cake from "../assets/images/home/cryptos/cake.svg";
import celo from "../assets/images/home/cryptos/celo.svg";
import comp from "../assets/images/home/cryptos/comp.svg";
import core from "../assets/images/home/cryptos/core.webp";
import erg from "../assets/images/home/cryptos/erg.svg";
import farm from "../assets/images/home/cryptos/farm.webp";

import pnut1 from "../assets/images/home/updates/pnut.webp";
// import dai1 from "../assets/images/home/updates/dai1.svg";
// import goat1 from "../assets/images/home/updates/goat1.svg";

export default function App() {
  return (
    <div>
      <div className="c-hero px-4 px-lg-5 mb-4 mb-md-5 d-flex flex-column justify-content-center align-items-center position-relative z-3 overflow-hidden">
        <div className="c-hero__container d-flex flex-column justify-content-center align-items-center position-relative z-3 container">
          <h1 className="c-hero__title fw-bold text-center mb-3 mb-lg-4">
            <span className="text-primary">Privacy Driven</span>
            <br></br>
            <span className="text-gradient">Crypto Exchange</span>
          </h1>
          <p className="fs-5 text-muted text-center lh-lg mb-0">
            Trade BTC, ETH, MATIC, and 100+ other cryptocurrencies with seamless
            security and privacy. No sign-up or limits.
          </p>
          <a className="fs-5 text-muted text-center lh-lg mb-0" href="/token">
            Powered by our Veil utility token.
          </a>
          <a className="h5 mt-3 mt-lg-4 text-white" href="/#exchange">
            <span className="text-decoration-underline link-offset-3">
              Try the Exchange Now
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linecap="square"
                stroke-linejoin="miter"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
              >
                <line x1="2" y1="12" x2="15" y2="12"></line>
                <polygon points="15 17 15 7 22 12 15 17"></polygon>
              </g>
            </svg>
          </a>
          <div className="g-3 w-100 mt-4 mt-lg-5 row row-cols-sm-2 row-cols-1">
            <div className="col">
              <div className="border rounded-3 bg-medium p-3 text-center">
                <p className="mb-2 text-uppercase small">
                  Lifetime Volume Swapped
                </p>
                <p className="mb-0 h4 fw-bolder text-primary">$45,210,920</p>
              </div>
            </div>
            <div className="col">
              <div className="border rounded-3 bg-medium p-3 text-center">
                <p className="mb-2 text-uppercase small">Past 24-Hour Volume</p>
                <p className="mb-0 h4 fw-bolder text-primary">$3,027</p>
              </div>
            </div>
          </div>
        </div>
        <video
          className="videoTag position-absolute w-100 top-0 start-0 end-0 bottom-0 z-n1 object-fit-cover h-100"
          autoPlay loop
          poster="/assets/home/hero-bg.webp"
        >
          <source src={media_back} type="video/webm"></source>
        </video>
      </div>
      <div>
        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h2 className="h1 text-gradient text-center position-relative z-3 d-inline">
              We are all about privacy and security
            </h2>
          </div>
          <div className="row-cols-1 row-cols-md-1 row-cols-lg-3 gy-3 gy-lg-0 gx-0 gx-lg-4 position-relative z-3 row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div>
                    <img
                      alt="Privacy Driven"
                      loading="lazy"
                      width="184"
                      height="276"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      src={privacy}
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <h3>Privacy-Driven</h3>
                  <p className="text-muted mb-0">
                    Anonymized exchange with no sign-ups or limits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div>
                    <img
                      alt="Seamless Process"
                      loading="lazy"
                      width="260"
                      height="287"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      src={seamlessprocess}
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <h3>Seamless Exchange</h3>
                  <p className="text-muted mb-0">
                    Fast and effective exchange between wallets and
                    cryptocurrencies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div>
                    <img
                      alt="No Limits Wallet"
                      loading="lazy"
                      width="272"
                      height="222"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      src={nolimitswallet}
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <h3>Zero Wallet Limits</h3>
                  <p className="text-muted mb-0">
                    No wallet or amount limitations on all exchanges through us!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="c-glow position-absolute top-50 start-50 translate-middle z-1"></div>
        </section>
        <section
          className="c-exchange__section my-4 my-lg-5 py-4 py-lg-5"
          id="exchange"
        >
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h3 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Exchange Crypto
            </h3>
          </div>
          <form
            id="exchangeForm"
            className="position-relative m-auto container-md mb-4 mb-lg-5"
          >
            <div className="row position-relative z-2 gy-4 mb-3 mb-md-4">
              <button
                className="c-exchange__swap position-absolute top-50 start-50 translate-middle bg-light rounded-circle z-3 d-flex align-items-center justify-content-center mt-3 mt-md-5"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  style={{ color: "white" }}
                >
                  <g fill="currentColor">
                    <path d="M10.787,8.09A.5.5,0,0,0,10,8.5V11H3a1,1,0,0,0,0,2h7v2.5a.5.5,0,0,0,.787.41l5-3.5a.5.5,0,0,0,0-.82Z"></path>
                    <path d="M5.5,8A.5.5,0,0,0,6,7.5V5h7a1,1,0,0,0,0-2H6V.5A.5.5,0,0,0,5.213.09l-5,3.5a.5.5,0,0,0,0,.82l5,3.5A.5.5,0,0,0,5.5,8Z"></path>
                  </g>
                </svg>
              </button>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="d-flex flex-row align-items-center justify-content-between p-3 card-header">
                    <p className="h5 mb-0">You Send</p>
                  </div>
                  <div className="p-3 p-lg-4 card-body">
                    <button
                      type="button"
                      className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
                    >
                      <div className="d-flex flex-row justify-content-start align-items-center">
                        <div className="c-exchange__icon">
                          <img
                            alt=""
                            loading="lazy"
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            src={btc}
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                          <p className="mb-1 h5">Bitcoin</p>
                          <p className="mb-1 opacity-50">BTC</p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g fill="currentColor">
                          <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"></path>
                        </g>
                      </svg>
                    </button>
                    <div
                      className="c-exchange__input bg-light rounded-3 p-3 w-100"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-title="Send Amount"
                    >
                      <div className="mb-0 flex-grow-1 w-100">
                        <input
                          name="send"
                          placeholder="0.0000"
                          required=""
                          type="text"
                          id="exchangeForm.SendAmount"
                          className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                          value=""
                        ></input>
                        <div className="invalid-feedback"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="d-flex flex-row align-items-center justify-content-between p-3 card-header">
                    <p className="h5 mb-0">You Receive</p>
                  </div>
                  <div className="p-3 p-lg-4 card-body">
                    <button
                      type="button"
                      className="text-white bg-light border-1 border w-100 rounded-3 px-3 py-2 d-flex flex-row justify-content-between align-items-center mb-2 btn btn-light"
                    >
                      <div className="d-flex flex-row justify-content-start align-items-center">
                        <div className="c-exchange__icon">
                          <img
                            alt=""
                            loading="lazy"
                            width="50"
                            height="50"
                            decoding="async"
                            data-nimg="1"
                            src={eth}
                          />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start ms-3">
                          <p className="mb-1 h5">Ethereum</p>
                          <p className="mb-1 opacity-50">ETH</p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g fill="currentColor">
                          <path d="M21.293,12.293,16,17.586l-5.293-5.293a1,1,0,0,0-1.414,1.414l6,6a1,1,0,0,0,1.414,0l6-6a1,1,0,0,0-1.414-1.414Z"></path>
                        </g>
                      </svg>
                    </button>
                    <div
                      className="c-exchange__input border-1 border bg-light rounded-3 p-3 d-flex flex-row justify-content-start align-items-center"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-title="Approx. Receive Amount"
                    >
                      <div className="mb-0 flex-grow-1">
                        <input
                          name="receive"
                          placeholder="0.0000"
                          required
                          type="text"
                          id="exchangeForm.ReceiveAmount"
                          className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                          value=""
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card">
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-between p-3 card-header">
                  <p className="h5 mb-2 mb-sm-0">Receiving Wallet Address</p>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="c-exchange__input bg-light rounded-3 p-3">
                    <div className="gy-3 gy-sm-0 row">
                      <div className="col-sm-12">
                        <div className="mb-0 flex-grow-1">
                          <input
                            placeholder="Enter Wallet Address"
                            required
                            type="text"
                            id="exchangeForm.WalletAddress"
                            className="bg-transparent border-0 h4 fs-4 text-white mb-0 form-control"
                            value=""
                          ></input>
                          <div className="invalid-feedback"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-start my-3 my-lg-4">
              <div className="mb-0">
                <div className="">
                  <input
                    required=""
                    type="checkbox"
                    className="form-check-input"
                  ></input>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <p className="opacity-75 mb-0 ms-2">
                By using the site and creating an exchange, you agree to our{" "}
                <a className="text-primary" href="/tos">
                  Terms of Services
                </a>
              </p>
            </div>
            <div tabindex="0">
              <button
                type="submit"
                value="Submit"
                className="btn btn-primary w-100 py-3 fs-5 fw-bold btn btn-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="me-2"
                >
                  <g
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    stroke-miterlimit="10"
                  >
                    <polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline>
                    <path
                      d="M23,12A11,11,0,0,1,2.237,17.073"
                      stroke-linecap="butt"
                    ></path>
                    <polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline>
                    <path
                      d="M1,12A11,11,0,0,1,21.763,6.927"
                      stroke-linecap="butt"
                    ></path>
                  </g>
                </svg>
                Exchange
              </button>
            </div>
            <p className="opacity-75 text-center mt-3 mt-lg-4">
              Already have an order number?
              <a
                className="ms-2 text-muted text-decoration-underline"
                href="/#track"
              >
                Track your order
              </a>
            </p>
          </form>
        </section>
        {/* <section className="container-md my-4 my-lg-5 py-4 py-lg-5 position-relative m-auto container"><div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5"><h4 className="h1 text-gradient text-center position-relative z-3 d-inline">Recent Transaction</h4></div><div className="list-group"><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">07/02/2025 - 19:55</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/eth.svg"  /></div><p className="mb-0 fw-bold ms-2">0.15</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/sui.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">07/02/2025 - 13:52</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/usdc.svg"  /></div><p className="mb-0 fw-bold ms-2">1600</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/eth.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">07/02/2025 - 12:48</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/eth.svg"  /></div><p className="mb-0 fw-bold ms-2">0.1</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/sui.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">07/02/2025 - 12:39</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/xmr.svg"  /></div><p className="mb-0 fw-bold ms-2">1.1683029</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/sol.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">07/02/2025 - 05:09</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/btc.svg"  /></div><p className="mb-0 fw-bold ms-2">0.0005</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/xmr.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">06/02/2025 - 21:20</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/btc.svg"  /></div><p className="mb-0 fw-bold ms-2">0.007</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/sol.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">06/02/2025 - 20:49</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/ltc.svg"  / /></div><p className="mb-0 fw-bold ms-2">1.6</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/btc.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">06/02/2025 - 16:52</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/eth.svg"  /></div><p className="mb-0 fw-bold ms-2">0.47</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/usdt.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">06/02/2025 - 14:09</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/sol.svg"  /></div><p className="mb-0 fw-bold ms-2">0.331</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/eth.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div><div className="mb-2 p-0 border-0 list-group-item"><div className="card"><div className="card-body"><div className="d-flex flex-column flex-sm-row align-items-center justify-content-between"><div className="d-flex flex-row align-items-center justify-content-start"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="7.5"></circle><polyline points="8 3 8 8 13 8"></polyline></g></svg><p className="mb-0 ms-2">06/02/2025 - 08:03</p></div><div className="d-flex flex-row align-items-center justify-content-end"><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/usdc.svg"  /></div><p className="mb-0 fw-bold ms-2">1000</p></div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="mx-3"><g stroke-width="1" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="0.5" y1="8" x2="15.5" y2="8"></line><polyline points="10.5 3 15.5 8 10.5 13"></polyline></g></svg><div className="d-flex flex-row align-items-center"><div className="c-recent-transaction__icon"><img alt="" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src="../assets/images/home/cryptos/eth.svg"  /></div><p className="mb-0 fw-bold ms-2"></p></div></div></div></div></div></div></div></section> */}
        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Supported Crypto
            </h4>
          </div>
          <div className="c-supportedLogos d-flex align-items-center overflow-hidden position-relative">
            <div className="c-supportedLogos__logos d-flex">
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
              <img
                alt="Bitcoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btc}
              />
              <img
                alt="Ethereum"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={btt}
              />
              <img
                alt="BNB Smart Chain"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={cake}
              />
              <img
                alt="Solana"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={celo}
              />
              <img
                alt="Uniswap"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={comp}
              />
              <img
                alt="Cardano"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={core}
              />
              <img
                alt="BinanceUSD(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={erg}
              />
              <img
                alt="Dai(ERC20)"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={eth}
              />
              <img
                alt="Dogecoin"
                loading="lazy"
                width="80"
                height="80"
                decoding="async"
                data-nimg="1"
                src={farm}
              />
            </div>
          </div>
        </section>
        <section className="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
          <div className="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Latest Updates
            </h4>
          </div>
          <div className="gy-4 gy-md-0 row row-cols-md-3 row-cols-1">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div>
                    <img
                      alt="Pepe"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      src={celo}
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                    <span className="text-uppercase badge bg-primary">
                      New Release
                    </span>
                    <p className="h3 mb-0 text-center">New Token Supported:</p>
                    <p className="text-primary text-center h3">
                      Goatseus Maximus(SOL)
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white-50 text-center mb-0">
                    Released: 07/01/25
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div>
                    <img
                      alt="Pepe"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      src={pnut1}
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                    <span className="text-uppercase badge bg-primary">
                      New Release
                    </span>
                    <p className="h3 mb-0 text-center">New Token Supported:</p>
                    <p className="text-primary text-center h3">
                      Peanut the Squirrel(SOL)
                    </p>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white-50 text-center mb-0">
                    Released: 07/01/25
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <div>
                    <img
                      alt="Pepe"
                      loading="lazy"
                      width="100"
                      height="100"
                      decoding="async"
                      data-nimg="1"
                      className="c-features__image m-auto d-block my-3 my-lg-4"
                      src={btc}
                    />
                  </div>
                </div>
                <div className="p-3 p-lg-4 card-body">
                  <div className="d-flex flex-column align-items-center justify-content-start gap-3 mb-0 card-title h5">
                    <span className="text-uppercase badge bg-primary">
                      New Release
                    </span>
                    <p className="h3 mb-0 text-center">New Token Supported:</p>
                    <p className="text-primary text-center h3">Dai(MATIC)</p>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white-50 text-center mb-0">
                    Released: 07/01/25
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="track"
          className="container-md my-4 my-lg-5 py-4 py-lg-5 position-relative m-auto container"
        >
          <div className="d-flex flex-column justify-content-center align-items-center mb-4 mb-lg-5">
            <h4 className="h1 text-gradient text-center position-relative z-3 d-inline">
              Track your Order
            </h4>
            <p className="text-center text-primary mb-0">
              Already have an order number? Check the status of your order
            </p>
          </div>
          <div className="m-auto container-sm">
            <div className="card">
              <div className="card-body">
                <form className="d-flex flex-column flex-sm-row align-items-start">
                  <div className="mb-0 flex-grow-1">
                    <input
                      placeholder="#6PCF012721"
                      required=""
                      type="text"
                      id="exchangeForm.WalletAddress"
                      className="bg-dark h4 fs-4 text-white mb-0 py-3 px-3 form-control"
                      value=""
                    ></input>
                    <div className="invalid-feedback">
                      Error. Invalid order number.
                    </div>
                  </div>
                  <button
                    type="submit"
                    value="Submit"
                    className="mt-3 mt-sm-0 ms-0 ms-sm-3 py-3 px-4 px-md-5 fw-bold btn btn-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      className="me-2"
                    >
                      <g fill="currentColor">
                        <path d="M15.707,13.293L13,10.586c0.63-1.05,1-2.275,1-3.586c0-3.86-3.141-7-7-7S0,3.14,0,7s3.141,7,7,7 c1.312,0,2.536-0.369,3.586-1l2.707,2.707C13.488,15.902,13.744,16,14,16s0.512-0.098,0.707-0.293l1-1 C16.098,14.316,16.098,13.684,15.707,13.293z M7,12c-2.761,0-5-2.239-5-5s2.239-5,5-5s5,2.239,5,5S9.761,12,7,12z"></path>
                      </g>
                    </svg>
                    Track Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
