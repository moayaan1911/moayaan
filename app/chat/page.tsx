"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  FaHome,
  FaPaperPlane,
  FaRobot,
  FaInfoCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { details } from "@/lib/details";
import ReactMarkdown from "react-markdown";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const MAX_MESSAGES_PER_DAY = 5;
const STORAGE_KEY = "ai-ayaan-message-limit";

const SYSTEM_PROMPT = `You are AI-Ayaan, an AI chatbot that mimics Mohammad Ayaan Siddiqui. You should respond as if you ARE Ayaan, using first person ("I", "my", "me"). Be friendly, helpful, and speak in a casual yet professional tone. You can mix Hindi/Urdu words occasionally (like "bhai", "yaar", "achha") to feel more authentic.

## About You (Ayaan):
- Name: Mohammad Ayaan Siddiqui
- ENS: moayaan.eth
- Role: Full Stack Blockchain Developer, Crypto & DeFi Investor, MBA Graduate
- Location: India
- Muslim, often greets with "Assalam Alaikum"

## Your Skills:
- Next.js, Solidity, JavaScript/TypeScript
- Web3.js, Ethers.js, Hardhat, Foundry
- Solana development
- Project Management, Technical Leadership
- Claude Code / AI Tools, Prompt Engineering

## Your Experience:
1. Digichain Global Holdings LLC - Blockchain Developer (July 2024 - October 2025)
   - Built Bitcoin-based DeFi stablecoin ecosystem (bima.money)
   - Implemented yield aggregators, lending/borrowing protocols, PSM modules

2. D Frame Foundation - Founding Engineer (Dec 2022 - Mar 2024)
   - Built Chrome extensions and client dashboards
   - Integrated data pipelines, AI APIs, blockchain-based payout systems

3. EmergentX - Blockchain Research Intern (Nov 2021 - Mar 2022)
   - Research and analysis on crypto/NFT projects

## Your Education:
- MBA in Blockchain Management - University of Guglielmo Marconi, Italy (2024-2025)
- B.Tech in Computer Science - Punjab Technical University, India (2020-2024)

## Your Projects:
- Nano-NFT: AI NFT Generator with Gemini Nano & Thirdweb
- QuickDapp: NPM package for Web3 dApp starter templates
- LayerZero Token Transfer: Cross-chain token transfer implementation
- LoomLess: Chrome extension for screen recording
- CrowdFunding dApp: Decentralized crowdfunding with Next.js & Thirdweb
- ERC-404 Token dApp: 10000 ERC404 tokens on Sepolia

## Your Certifications:
- Blockchain Basics (Cyfrin Updraft)
- Generative AI Foundations (Upgrad x Microsoft)
- Generative AI for Software Development (Coursera/DeepLearning.ai)
- Ethereum Developer (Cadena x Polygon)

## Important Guidelines:
1. When asked about crypto investment advice, ALWAYS include this disclaimer: "If you're new to crypto, DO NOT chase 10x or 100x gains. Focus on mature, established projects first. This is not financial advice."
2. Be honest if you don't know something - say "I'm not sure about that, you might want to reach out to the real Ayaan"
3. Keep responses concise but informative
4. Use markdown formatting for better readability (lists, bold, code blocks when needed)
5. If asked personal questions you don't have info about, politely redirect to professional topics
6. Encourage users to connect with the real Ayaan for accurate information

## Social Links (share when relevant):
- LinkedIn: linkedin.com/in/ayaaneth
- GitHub: github.com/moayaan1911
- Twitter: x.com/moayaan1911
- Blog: blog.moayaan.com
- Telegram: t.me/moayaan1911`;

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "AssalamAlaikum! I'm AI-Ayaan, an AI 'mimic' of Mohammad Ayaan Siddiqui. I can answer questions about my experience, skills, projects, and blockchain development OR basic guide you to crypto. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: "system", content: SYSTEM_PROMPT },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [messagesUsed, setMessagesUsed] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load message limit from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored);
      const now = new Date().getTime();
      const storedTime = new Date(data.timestamp).getTime();
      const hoursDiff = (now - storedTime) / (1000 * 60 * 60);

      if (hoursDiff >= 24) {
        // Reset after 24 hours
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ count: 0, timestamp: new Date().toISOString() })
        );
        setMessagesUsed(0);
      } else {
        setMessagesUsed(data.count);
      }
    } else {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ count: 0, timestamp: new Date().toISOString() })
      );
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const updateMessageLimit = (newCount: number) => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const data = stored ? JSON.parse(stored) : { timestamp: new Date().toISOString() };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ count: newCount, timestamp: data.timestamp })
    );
    setMessagesUsed(newCount);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || messagesUsed >= MAX_MESSAGES_PER_DAY || isTyping) return;

    const userMessage: Message = {
      id: messages.length,
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    const newChatHistory: ChatMessage[] = [
      ...chatHistory,
      { role: "user", content: inputValue },
    ];

    setMessages((prev) => [...prev, userMessage]);
    setChatHistory(newChatHistory);
    setInputValue("");
    updateMessageLimit(messagesUsed + 1);
    setIsTyping(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "nvidia/nemotron-3-nano-30b-a3b:free",
          messages: newChatHistory,
        }),
      });

      const result = await response.json();

      if (result.choices && result.choices[0]?.message?.content) {
        const aiResponseText = result.choices[0].message.content;

        const aiResponse: Message = {
          id: messages.length + 1,
          text: aiResponseText,
          isUser: false,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiResponse]);
        setChatHistory((prev) => [
          ...prev,
          { role: "assistant", content: aiResponseText },
        ]);
      } else {
        throw new Error("Invalid response from API");
      }
    } catch (error) {
      console.error("Error calling OpenRouter:", error);
      const errorMessage: Message = {
        id: messages.length + 1,
        text: "Sorry, I encountered an error. Please try again later or contact the real Ayaan directly!",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-purple-950 to-gray-950 flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-3 py-3 md:px-4 md:py-4 flex items-center justify-between">
          {/* Logo/Title */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src={details.profile || "/placeholder.svg"}
                alt="AI-Ayaan"
                width={40}
                height={40}
                className="rounded-full border-2 border-purple-500 w-full h-full"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 border-gray-950"></div>
            </div>
            <div>
              <h1 className="text-base md:text-xl font-bold text-white flex items-center gap-1 md:gap-2">
                AI-Ayaan
                <FaRobot className="text-purple-400 text-xs md:text-sm" />
              </h1>
              <p className="text-[10px] md:text-xs text-gray-400">Ask me anything!</p>
            </div>
          </div>

          {/* Home Button */}
          <Button
            onClick={() => router.push("/")}
            className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-3 py-1.5 md:px-6 md:py-2 text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center gap-1 md:gap-2 rounded-lg">
            <FaHome className="text-base md:text-lg" />
            <span className="hidden sm:inline">Home</span>
          </Button>
        </div>
      </nav>

      {/* Disclaimer Banner */}
      <div className="fixed top-[52px] md:top-[72px] left-0 right-0 z-40 bg-amber-500/10 border-b border-amber-500/30 backdrop-blur-sm">
        <div className="container mx-auto px-3 md:px-4 py-1.5 md:py-2 flex items-center justify-center gap-1.5 md:gap-2 text-amber-300 text-[11px] md:text-sm">
          <FaExclamationTriangle className="text-amber-400 shrink-0 text-xs md:text-sm" />
          <span className="text-center">
            <strong>Disclaimer:</strong> AI chatbot. Responses may be inaccurate.{" "}
            <button
              onClick={() => router.push("/")}
              className="underline hover:text-amber-200">
              Connect with the real me
            </button>
            .
          </span>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex-1 container mx-auto px-3 md:px-4 pt-[100px] md:pt-36 pb-28 md:pb-32 max-w-3xl">
        {/* Messages */}
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start gap-2 md:gap-3 max-w-[90%] md:max-w-[80%] ${message.isUser ? "flex-row-reverse" : ""}`}>
                {/* Avatar */}
                {!message.isUser && (
                  <div className="relative w-6 h-6 md:w-8 md:h-8 shrink-0">
                    <Image
                      src={details.profile || "/placeholder.svg"}
                      alt="AI-Ayaan"
                      width={32}
                      height={32}
                      className="rounded-full border border-purple-500 w-full h-full"
                    />
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`rounded-2xl px-3 py-2 md:px-4 md:py-3 ${
                    message.isUser
                      ? "bg-linear-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-gray-800/80 text-gray-100 border border-purple-500/20"
                  }`}>
                  {message.isUser ? (
                    <p className="text-sm md:text-base">{message.text}</p>
                  ) : (
                    <div className="text-sm md:text-base prose prose-invert prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0 prose-headings:my-2 prose-code:bg-gray-700 prose-code:px-1 prose-code:rounded">
                      <ReactMarkdown>{message.text}</ReactMarkdown>
                    </div>
                  )}
                  <p
                    className={`text-[10px] md:text-xs mt-1 ${message.isUser ? "text-purple-200" : "text-gray-500"}`}>
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2 md:gap-3">
                <div className="relative w-6 h-6 md:w-8 md:h-8 shrink-0">
                  <Image
                    src={details.profile || "/placeholder.svg"}
                    alt="AI-Ayaan"
                    width={32}
                    height={32}
                    className="rounded-full border border-purple-500 w-full h-full"
                  />
                </div>
                <div className="bg-gray-800/80 rounded-2xl px-3 py-2 md:px-4 md:py-3 border border-purple-500/20">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950/90 backdrop-blur-md border-t border-purple-500/20">
        <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 max-w-3xl">
          {/* Message Limit Info */}
          <div className="flex items-center justify-center gap-1.5 md:gap-2 mb-2 md:mb-3 text-xs md:text-sm">
            <FaInfoCircle className="text-purple-400 text-xs md:text-sm" />
            <span className="text-gray-400">
              Messages:{" "}
              <span
                className={
                  messagesUsed >= MAX_MESSAGES_PER_DAY
                    ? "text-red-400"
                    : "text-purple-300"
                }>
                {messagesUsed}/{MAX_MESSAGES_PER_DAY}
              </span>{" "}
              <span className="hidden sm:inline">per 24 hours</span>
              <span className="sm:hidden">/day</span>
            </span>
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 md:gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={
                messagesUsed >= MAX_MESSAGES_PER_DAY
                  ? "Limit reached. Try in 24h."
                  : "Ask AI-Ayaan anything..."
              }
              disabled={messagesUsed >= MAX_MESSAGES_PER_DAY || isTyping}
              className="flex-1 bg-gray-800/80 border border-purple-500/30 rounded-xl px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <Button
              onClick={handleSendMessage}
              disabled={
                !inputValue.trim() || messagesUsed >= MAX_MESSAGES_PER_DAY || isTyping
              }
              className="bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-2.5 md:p-3 rounded-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
              <FaPaperPlane className="text-base md:text-lg" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
