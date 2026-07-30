import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume | Mohammad Ayaan",
  description:
    "View the resume of Mohammad Ayaan, Full Stack Blockchain Developer and MBA in Blockchain Management.",
  alternates: {
    canonical: "/resume",
  },
  openGraph: {
    title: "Resume | Mohammad Ayaan",
    description:
      "View the resume of Mohammad Ayaan, Full Stack Blockchain Developer and MBA in Blockchain Management.",
    url: absoluteUrl("/resume"),
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammad Ayaan, Full Stack Blockchain Developer and MBA in Blockchain Management",
      },
    ],
    type: "profile",
    firstName: "Mohammad",
    lastName: "Ayaan",
    username: siteConfig.username,
  },
};

export default function ResumePage() {
  const resumePath = "/MD_Ayaan_Siddiqui_Resume.pdf";

  return (
    <main className="resume-page">
      <div className="resume-shell">
        <header className="resume-header">
          <Link className="resume-back" href="/">
            <span className="arr">←</span> BACK TO PORTFOLIO
          </Link>
          <a
            className="resume-action"
            href={siteConfig.links.cal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Interested? Hire Me
          </a>
        </header>

        <section className="resume-frame-wrap" aria-label="Resume PDF viewer">
          <iframe
            className="resume-frame"
            src={resumePath}
            title="MD Ayaan Siddiqui Resume"
          />
        </section>
      </div>
    </main>
  );
}
