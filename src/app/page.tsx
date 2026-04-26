import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CurrentYear } from "@/components/current-year";
import { EthBackground } from "@/components/eth-background";
import { SalaamShuffle } from "@/components/salaam-shuffle";
import { homeJsonLd, serializeJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(homeJsonLd),
        }}
      />
      <EthBackground />
      <main className="wrap">
        <section className="hero" data-screen-label="01 Hero">
          <div className="hero-grid">
            <div className="hero-main">
              <div className="hero-greet">
                <span className="avatar">
                  <img src="/profile.png" alt="Mohammad Ayaan" />
                </span>
                <SalaamShuffle />
              </div>

              <h1>
                Mohammad <span className="accent">Ayaan</span>.
              </h1>

              <p className="credibility">
                MBA in Blockchain Management <span className="sep">·</span>{" "}
                Blockchain Developer
              </p>

              <div className="btn-row">
                <a
                  className="btn primary"
                  href="https://cal.com/moayaan1911/meet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-stack">
                    <span className="btn-title">
                      Hire Me <span className="arrow">→</span>
                    </span>
                    <span className="btn-sub">Available for work</span>
                  </span>
                </a>
                <a className="btn" href="/resume">
                  View Resume
                </a>
              </div>

              <div className="small-links">
                <a href="mailto:moayaan.eth@gmail.com">
                  <Mail aria-hidden="true" />
                  Email
                </a>
                <a
                  href="https://github.com/moayaan1911"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/ayaaneth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>

            <aside className="hero-aside">
              <div className="aside-block">
                <span className="label">Currently</span>
                <span className="value">
                  <span className="live"></span>Open to new opportunities.
                </span>
                <span className="value value-spaced">
                  <span className="live"></span>Exploring further studies{" "}
                  <span className="muted">&amp; advanced research routes.</span>
                </span>
                <span className="value value-spaced">
                  <span className="live"></span>Vibe coding personal projects.
                </span>
              </div>
            </aside>
          </div>
        </section>

        <section
          className="section"
          id="projects"
          data-screen-label="02 Featured Projects"
        >
          <div className="section-head">
            <h2>Featured Projects</h2>
            <span className="meta">Smart Contracts / Mac / Android / Web / Chrome</span>
          </div>

          <div className="projects-row">
            <article className="project">
              <span className="num">01</span>
              <a
                className="pthumb"
                href="https://github.com/moayaan1911/stablecoin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="StableCoin preview"
              >
                <img
                  src="https://opengraph.githubassets.com/1/moayaan1911/stablecoin"
                  alt="StableCoin GitHub Open Graph preview"
                />
              </a>
              <h3 className="ptitle">StableCoin</h3>
              <p className="pdesc">
                A USD-pegged, overcollateralized stablecoin engine built with
                Solidity, Foundry, WETH/WBTC collateral, and Chainlink feeds.
              </p>
              <div className="plinks">
                <a
                  href="https://github.com/moayaan1911/stablecoin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="project">
              <span className="num">02</span>
              <a
                className="pthumb"
                href="https://chromewebstore.google.com/detail/loomless/hpblkhdjmbiokmnemdmccpppjeoddecj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LoomLess preview"
              >
                <img
                  src="https://loomless.fun/opengraph-image?dbb0f49812edef3c"
                  alt="LoomLess homepage Open Graph preview"
                />
              </a>
              <h3 className="ptitle">LoomLess</h3>
              <p className="pdesc">
                A local-first screen recorder for Mac and Chrome, built for
                private, lightweight, distraction-free capture.
              </p>
              <div className="plinks">
                <a
                  href="https://loomless.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/loomless/hpblkhdjmbiokmnemdmccpppjeoddecj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Extension
                </a>
                <a
                  href="https://github.com/moayaan1911/loomless"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="project">
              <span className="num">03</span>
              <a
                className="pthumb"
                href="https://imanvibes.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ImanVibes preview"
              >
                <img
                  src="https://imanvibes.vercel.app/opengraph-image"
                  alt="ImanVibes homepage Open Graph preview"
                />
              </a>
              <h3 className="ptitle">ImanVibes</h3>
              <p className="pdesc">
                A calm, mobile-first Islamic PWA for Quran by mood, Hadith,
                Duas, 99 Names, daily reflection, sharing, and TTS.
              </p>
              <div className="plinks">
                <a
                  href="https://imanvibes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/mdgclabcabbbikdgmihabnaeplkfnnkb?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Extension
                </a>
                <a
                  href="https://github.com/moayaan1911/imanvibes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section" data-screen-label="03 Experience">
          <div className="section-head">
            <h2>Experience</h2>
            <span className="meta">Bitcoin DeFi / Crypto Wallet / Data Economy</span>
          </div>

          <div className="exp-row">
            <div className="exp">
              <p className="role">Blockchain Developer</p>
              <p className="company">Digichain Global Holdings LLC</p>
              <p className="dates">July 2024 - October 2025</p>
              <p className="impact">
                Contributed to a Bitcoin DeFi stablecoin ecosystem across
                yield, lending, borrowing, and PSM product modules.
              </p>
            </div>

            <div className="exp">
              <p className="role">Full Stack Web3 Developer Intern</p>
              <p className="company">Cypherock</p>
              <p className="dates">April 2024 - July 2024</p>
              <p className="impact">
                Built and improved software flows for a crypto hardware wallet,
                focusing on user experience, reliability, and bug fixes.
              </p>
            </div>

            <div className="exp">
              <p className="role">Founding Engineer</p>
              <p className="company">D Frame Foundation</p>
              <p className="dates">December 2022 - March 2024</p>
              <p className="impact">
                Led Chrome extension and client dashboard development with data
                pipelines, AI APIs, and blockchain payout integrations.
              </p>
            </div>
          </div>
        </section>

        <section className="section" data-screen-label="04 Skills">
          <div className="skills-line">
            <h2>Skills:</h2>
            <div className="skills-row">
              <span className="skill">Web3</span>
              <span className="skill">Next.js</span>
              <span className="skill">Smart Contracts</span>
              <span className="skill">Vibe Coding</span>
              <span className="skill">AI Tools</span>
              <span className="skill">Solidity</span>
              <span className="skill">Foundry</span>
              <span className="skill">Project Management</span>
              <span className="skill">Solana</span>
            </div>
          </div>
        </section>
      </main>

      <footer data-screen-label="05 Footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="display">
                MD Ayaan Siddiqui <span className="footer-year">© <CurrentYear /></span>
              </div>
              <p>
                Available for PhD discussions, remote blockchain work, crypto
                research, and Web3 technical consulting.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-col">
                <ul>
                  <li>
                    <a href="mailto:moayaan.eth@gmail.com">Email</a>
                  </li>
                  <li>
                    <a href="/resume">
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/moayaan1911"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/ayaaneth"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/moayaan1911"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/moayaan1911"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <ul>
                  <li>
                    <a
                      href="https://blog.moayaan.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hashnode
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.ens.domains/moayaan.eth"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ENS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.reddit.com/user/moayaan1911/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reddit
                    </a>
                  </li>
                </ul>
              </div>

              <a href="/support" className="footer-support-link">
                Support my work
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
