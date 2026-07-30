"use client";
import Link from "next/link";

const addresses = [
  {
    id: "btc-val",
    glyph: "₿",
    name: "Bitcoin",
    sub: "BTC · Native SegWit",
    value: "bc1q26pywz5lfeype9dmc605epc57ehwcxqmvfrevw",
  },
  {
    id: "eth-val",
    glyph: "Ξ",
    name: "Ethereum",
    sub: "ETH · ERC-20",
    value: "0x898238Db447f7ADd2a213223C6bF41f0C71C4C4f",
  },
  {
    id: "sol-val",
    glyph: "◎",
    name: "Solana",
    sub: "SOL · SPL",
    value: "4TX8VBDNSerHeThJFa52TSQ38hpXmK6PFD5BpPPgp8Xj",
  },
  {
    id: "upi-val",
    glyph: "₹",
    name: "UPI",
    sub: "Any UPI app",
    value: "moayaan.eth@axl",
  },
];

export default function SupportPage() {
  const copyAddress = async (id: string) => {
    const value = addresses.find((address) => address.id === id)?.value;
    if (!value) return;
    await navigator.clipboard.writeText(value);

    const button = document.querySelector<HTMLButtonElement>(
      `[data-target="${id}"]`,
    );
    if (!button) return;

    const original = button.textContent || "Copy";
    button.textContent = "Copied ✓";
    button.classList.add("copied");

    window.setTimeout(() => {
      button.textContent = original;
      button.classList.remove("copied");
    }, 1600);
  };

  return (
    <div className="support-page">
      <main className="support-wrap">
        <nav className="support-topnav">
          <Link className="support-back" href="/">
            <span className="arr">←</span> BACK TO PORTFOLIO
          </Link>
          <span className="crumb">SUPPORT</span>
        </nav>

        <section className="support-page-head" data-screen-label="01 Header">
          <h1>
            Support <span className="accent">my work</span>.
          </h1>
        </section>

        <section
          className="support-palestine"
          data-screen-label="02 Donate to Palestine"
        >
          <div className="support-pal-flag" aria-label="Palestine flag"></div>
          <div className="support-pal-content">
            <span className="support-pal-eyebrow">
              <span className="dot"></span>A Request, First
            </span>
            <h2>
              Please donate to Palestine <em>instead.</em>
            </h2>
            <p>
              If you came here to support me - thank you, sincerely. But the
              people of Palestine need it more than I ever will. Even a small
              amount goes toward food, medical aid, and shelter for families
              living through what no family should.
            </p>
            <div className="support-pal-cta-row">
              <a
                className="support-pal-btn"
                href="https://donate.unrwa.org/gaza/~my-donation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate via UNRWA <span className="arrow">↗</span>
              </a>
              <a
                className="support-pal-btn ghost"
                href="https://www.pcrf.net/donate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate via PCRF <span className="arrow">↗</span>
              </a>
            </div>
            <span className="support-pal-source">
              VERIFIED AID ORGANIZATIONS · 100% OPTIONAL · NOT AFFILIATED WITH
              ME
            </span>
          </div>
        </section>

        <div className="support-or-divider" data-screen-label="03 Divider">
          <span className="line"></span>
          <span className="label">Or - if you insist</span>
          <span className="line"></span>
        </div>

        <section data-screen-label="04 Personal addresses">
          <div className="support-alt-intro">
            <h3>Send directly</h3>
            <p>Crypto or UPI. No login, no platform fees. Click any row to copy.</p>
          </div>

          <div className="support-addr-list">
            {addresses.map((address) => (
              <div className="support-addr" key={address.id}>
                <div className="net">
                  <span className="glyph">{address.glyph}</span>
                  <div>
                    <div className="net-name">
                      {address.name}
                      {address.name === "UPI" && (
                        <span className="for-india"> - for India</span>
                      )}
                    </div>
                    <div className="net-sub">{address.sub}</div>
                  </div>
                </div>
                <div className="val" id={address.id}>
                  {address.value}
                </div>
                <button
                  className="copy"
                  data-target={address.id}
                  onClick={() => copyAddress(address.id)}
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
