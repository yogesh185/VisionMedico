import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/background.jpeg";

const ArrowDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5"
    />
  </svg>
);

function HeroSection({ scrollToId }) {
  const handleScroll = () => {
    const element = document.getElementById(scrollToId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Typing effect split by mobile / desktop
  const fullTextDesktop = "Donate Blood, Save Lives";
  const fullTextMobile = ["Donate Blood,", "Save Lives"];

  const [displayText, setDisplayText] = useState("");
  const [displayTextSecond, setDisplayTextSecond] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  // Determine mobile or desktop on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      let i = 0;
      const interval1 = setInterval(() => {
        setDisplayText(fullTextMobile[0].slice(0, i + 1));
        i++;
        if (i === fullTextMobile[0].length) clearInterval(interval1);
      }, 110);
      let j = 0;
      const delay = fullTextMobile[0].length * 110 + 600; // pause before second line
      setTimeout(() => {
        const interval2 = setInterval(() => {
          setDisplayTextSecond(fullTextMobile[1].slice(0, j + 1));
          j++;
          if (j === fullTextMobile[1].length) clearInterval(interval2);
        }, 110);
      }, delay);
    } else {
      // desktop one line typing
      let i = 0;
      const interval = setInterval(() => {
        setDisplayText(fullTextDesktop.slice(0, i + 1));
        i++;
        if (i === fullTextDesktop.length) clearInterval(interval);
      }, 120);
      setDisplayTextSecond("");
    }
  }, [isMobile]);

  const phoneNumber = "9893251619";
  const message = "Hello! I'd like to book a slot to donate blood.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-right md:bg-center pt-20 md:pt-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: isMobile ? "right" : "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent md:bg-black/40" />

      <div className="relative z-20 mx-auto flex max-w-7xl flex-col justify-center p-6 mt-15 text-left text-white md:items-center md:text-center md:p-12">
        <p
          className="uppercase text-red-400 font-semibold tracking-[0.3em] mb-2 animate-fade-in-up"
          style={{ animationDelay: "150ms", animationFillMode: "backwards" }}
        >
          Donate
        </p>

        {isMobile ? (
          <>
            <h1
              className="overflow-hidden whitespace-nowrap border-r-[3px] border-red-400/90 font-extrabold leading-tight max-w-full text-3xl sm:text-4xl md:text-6xl"
              style={{
                width: `${displayText.length}ch`,
                transition: "width 0.11s steps(1, end)",
              }}
            >
              {displayText}
            </h1>
            <h1
              className="overflow-hidden whitespace-nowrap border-r-[3px] border-red-400/90 font-extrabold leading-tight max-w-full mt-1 text-3xl sm:text-4xl md:text-6xl"
              style={{
                width: `${displayTextSecond.length}ch`,
                transition: "width 0.11s steps(1, end)",
              }}
            >
              {displayTextSecond}
            </h1>
          </>
        ) : (
          <h1
            aria-label={fullTextDesktop}
            role="textbox"
            aria-live="polite"
            className="overflow-hidden whitespace-nowrap border-r-[3px] border-red-400/90 font-extrabold leading-tight max-w-full mr-auto text-3xl sm:text-4xl md:text-6xl"
            style={{
              width: `${displayText.length}ch`,
              transition: "width 0.1s steps(1, end)",
            }}
          >
            {displayText}
          </h1>
        )}

        <p
          className="mt-6 max-w-md font-semibold leading-relaxed text-gray-300 text-base md:text-xl animate-fade-in-up"
          style={{ animationDelay: "1.2s", animationFillMode: "backwards" }}
        >
          Join our upcoming donation camp and make a life-saving impact.
        </p>

        <p
          className="max-w-md mt-4 text-sm leading-relaxed text-gray-300 md:text-base animate-fade-in-up"
          style={{ animationDelay: "1.5s", animationFillMode: "backwards" }}
        >
          Your donation can ensure every patient receives safe, compatible blood
          when it matters most.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-block rounded-full bg-red-600 px-6 py-2 text-sm sm:px-10 sm:py-3 font-semibold uppercase tracking-wide text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-red-700 animate-fade-in-up`}
          style={{ animationDelay: "1.8s", animationFillMode: "backwards" }}
        >
          Book a Slot
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2">
        <button
          onClick={handleScroll}
          aria-label="Scroll down"
          className="flex flex-col items-center text-white animate-bounce"
        >
          <span className="mb-2 text-sm opacity-80">Scroll</span>
          <ArrowDownIcon className="h-8 w-6" />
        </button>
      </div>

      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
