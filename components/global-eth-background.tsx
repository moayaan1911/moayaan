"use client"

import { motion } from "framer-motion"
import { SiEthereum } from "react-icons/si"

const EthIcon = ({ size = 16 }: { size?: number }) => (
  <SiEthereum size={size} className="text-blue-400 drop-shadow-lg opacity-80" />
)

const EthIconSVG = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 256 417" className="drop-shadow-lg opacity-80" fill="none">
    <path d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z" fill="#343434" />
    <path d="M127.962 0L0 212.32l127.962 75.639V154.158z" fill="#8C8C8C" />
    <path d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z" fill="#3C3C3B" />
    <path d="M127.962 416.905v-104.72L0 236.585z" fill="#8C8C8C" />
    <path d="M127.961 287.958l127.96-75.637-127.96-58.162z" fill="#141414" />
    <path d="M0 212.32l127.96 75.638v-133.8z" fill="#393939" />
    <defs>
      <style>
        {`
          path { fill: #627EEA; }
        `}
      </style>
    </defs>
  </svg>
)

export function GlobalEthBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Fast moving Ethereum particles across entire screen */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            x: [0, typeof window !== "undefined" ? window.innerWidth : 1200, 0],
            y: [0, -200, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + (i % 5), // Slowed down even more: 15-19 seconds
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.3,
            ease: "linear",
          }}
          style={{
            left: `${(i * 7) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
        >
          <EthIcon size={28 + (i % 15)} /> {/* Increased size further for better visibility */}
        </motion.div>
      ))}

      {/* Additional slower floating particles for depth */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`slow-${i}`}
          className="absolute"
          animate={{
            x: [0, 200, 0],
            y: [0, -180, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 18 + (i % 4), // Slowed down even more: 18-21 seconds
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
          style={{
            left: `${(i * 13) % 100}%`,
            top: `${(i * 17) % 100}%`,
          }}
        >
          <EthIcon size={24 + (i % 12)} /> {/* Increased size for better visibility */}
        </motion.div>
      ))}
    </div>
  )
}
