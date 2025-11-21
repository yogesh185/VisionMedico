import React, { useRef, useEffect, useState } from "react";

// Premium, animated, glassy card with entrance and hover layers
function BloodCard({ type, donateTo, receiveFrom, note, delay = 0 }) {
  const ref = useRef();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Fade/slide entrance when in view
    const obs = new window.IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setEntered(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        group rounded-2xl bg-gradient-to-br from-white/80 to-red-50/80 px-7 py-7 shadow-2xl
        ring-1 ring-red-100 border border-white/70
        transition-all duration-700
        backdrop-blur-xl
        hover:-translate-y-2 hover:scale-[1.045] hover:shadow-[0_16px_48px_2px_rgba(244,63,94,0.10)]
        hover:ring-2 hover:ring-red-300
        hover:bg-gradient-to-tr hover:from-red-50 hover:via-white hover:to-red-100
        active:scale-95
        ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: entered ? `${delay}ms` : "0ms" }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div className={`
          flex h-12 w-12 items-center justify-center rounded-full
          font-bold text-white text-xl shadow-xl
          bg-gradient-to-tr from-red-500 to-red-400
          group-hover:shadow-red-100
          group-hover:rotate-[6deg]
          group-hover:bg-gradient-to-br group-hover:from-red-600 group-hover:to-pink-500
          transition-all duration-300
        `}>
          {type}
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Blood Group</p>
      </div>
      <p className="text-sm">
        <span className="font-semibold text-slate-900">Donate to:</span>{" "}
        <span className="text-slate-700 group-hover:text-red-500 transition-colors duration-300">{donateTo}</span>
      </p>
      <p className="mt-1 text-sm">
        <span className="font-semibold text-slate-900">Receive from:</span>{" "}
        <span className="text-slate-700 group-hover:text-red-600 transition-colors duration-300">{receiveFrom}</span>
      </p>
      {note && (
        <p className="mt-2 text-xs font-semibold text-red-600 group-hover:text-pink-600 transition-colors duration-300">
          {note}
        </p>
      )}
    </div>
  );
}

export default BloodCard;
