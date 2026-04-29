import { FaGithub } from "react-icons/fa";
import { SiEthereum } from "react-icons/si";

export function GithubPreviewCard() {
  return (
    <div className="github-card">
      <div className="github-card-center">
        <FaGithub
          className="github-card-icon"
          aria-hidden="true"
          style={{ width: 52, height: 52 }}
        />
        <div className="github-card-path">
          <span className="github-card-owner">moayaan1911</span>
          <span className="github-card-slash">/</span>
          <span className="github-card-name">stablecoin</span>
        </div>
      </div>

      <div className="github-card-meta">
        <span className="github-card-lang">
          <SiEthereum
            className="github-card-eth"
            aria-hidden="true"
            style={{ width: 18, height: 18 }}
          />
          Solidity
        </span>
        <span className="github-card-label">Public</span>
      </div>
    </div>
  );
}
