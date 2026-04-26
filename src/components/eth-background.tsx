import type { CSSProperties } from "react";
import { SiEthereum } from "react-icons/si";

type EthIconStyle = CSSProperties & {
  "--left": string;
  "--top": string;
  "--size": string;
  "--opacity": string;
  "--blur": string;
  "--rz": string;
  "--scale": string;
  "--float-x": string;
  "--float-y": string;
  "--duration": string;
  "--delay": string;
};

const icons: EthIconStyle[] = [
  {
    "--left": "6%",
    "--top": "12%",
    "--size": "78px",
    "--opacity": "0.08",
    "--blur": "0.2px",
    "--rz": "-14deg",
    "--scale": "1",
    "--float-x": "14px",
    "--float-y": "-18px",
    "--duration": "14s",
    "--delay": "-2s",
  },
  {
    "--left": "62%",
    "--top": "8%",
    "--size": "96px",
    "--opacity": "0.065",
    "--blur": "0.4px",
    "--rz": "18deg",
    "--scale": "1",
    "--float-x": "-16px",
    "--float-y": "20px",
    "--duration": "18s",
    "--delay": "-8s",
  },
  {
    "--left": "84%",
    "--top": "34%",
    "--size": "64px",
    "--opacity": "0.07",
    "--blur": "0px",
    "--rz": "26deg",
    "--scale": "1",
    "--float-x": "10px",
    "--float-y": "16px",
    "--duration": "16s",
    "--delay": "-5s",
  },
  {
    "--left": "35%",
    "--top": "66%",
    "--size": "70px",
    "--opacity": "0.06",
    "--blur": "0.6px",
    "--rz": "-28deg",
    "--scale": "1",
    "--float-x": "-12px",
    "--float-y": "-14px",
    "--duration": "20s",
    "--delay": "-12s",
  },
  {
    "--left": "74%",
    "--top": "76%",
    "--size": "110px",
    "--opacity": "0.05",
    "--blur": "0.8px",
    "--rz": "10deg",
    "--scale": "1",
    "--float-x": "18px",
    "--float-y": "-12px",
    "--duration": "22s",
    "--delay": "-15s",
  },
  {
    "--left": "14%",
    "--top": "78%",
    "--size": "52px",
    "--opacity": "0.065",
    "--blur": "0.2px",
    "--rz": "32deg",
    "--scale": "1",
    "--float-x": "-10px",
    "--float-y": "14px",
    "--duration": "17s",
    "--delay": "-6s",
  },
  {
    "--left": "53%",
    "--top": "46%",
    "--size": "46px",
    "--opacity": "0.045",
    "--blur": "0.4px",
    "--rz": "-8deg",
    "--scale": "1",
    "--float-x": "8px",
    "--float-y": "12px",
    "--duration": "19s",
    "--delay": "-9s",
  },
  {
    "--left": "91%",
    "--top": "88%",
    "--size": "82px",
    "--opacity": "0.05",
    "--blur": "0.6px",
    "--rz": "-20deg",
    "--scale": "1",
    "--float-x": "-14px",
    "--float-y": "-10px",
    "--duration": "21s",
    "--delay": "-14s",
  },
];

export function EthBackground() {
  return (
    <div className="eth-background" aria-hidden="true">
      {icons.map((style, index) => (
        <SiEthereum
          className="eth-bg-icon"
          focusable="false"
          key={index}
          style={style}
        />
      ))}
    </div>
  );
}
