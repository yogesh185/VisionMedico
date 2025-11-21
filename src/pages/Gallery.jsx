import React, { useRef, useEffect, useState } from "react";

const galleryItems = [
  {
    title: "Donation Camp",
    subtitle: "Volunteers donating blood",
    src: "/images/camp-1.jpg",
  },
  {
    title: "Safe Collection",
    subtitle: "Sterile collection setup",
    src: "/images/camp-2.jpg",
  },
  {
    title: "Vision Medico Team",
    subtitle: "Qualified staff at work",
    src: "/images/camp-3.jpg",
  },
  {
    title: "Counselling Area",
    subtitle: "Pre-donation screening",
    src: "/images/camp-4.jpg",
  },
  {
    title: "Recovery Zone",
    subtitle: "Snacks & rest after donation",
    src: "/images/camp-5.jpg",
  },
  {
    title: "Awareness Drive",
    subtitle: "Encouraging new donors",
    src: "/images/camp-6.jpg",
  },
];

function Gallery() {
  const gridRef = useRef();
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const obs = new window.IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setEntered(true); },
      { threshold: 0.15 }
    );
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#ffe5e5] via-[#fef2f2] to-[#fed7e2]">
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-6 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-slate-600 uppercase">
          Moments
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-wide text-red-600 md:text-5xl drop-shadow-xl">
          Vision Medico Gallery
        </h1>
        <p className="mt-5 text-base text-slate-700 md:text-lg">
          A glimpse of our donation camps, dedicated staff, and the donors who help save lives.
        </p>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div ref={gridRef} className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, i) => (
            <div
              key={item.title}
              className={`
                group relative rounded-3xl border border-white/70 shadow-xl overflow-hidden
                bg-gradient-to-b from-white/80 to-[#fed7e2]/60 backdrop-blur-lg
                transition-all duration-700
                hover:-translate-y-2 hover:scale-[1.045] hover:shadow-[0_12px_48px_-8px_rgba(244,63,94,0.10)]
                hover:ring-2 hover:ring-pink-300
                active:scale-95
                ${entered ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"}
              `}
              style={{ transitionDelay: entered ? `${160 + i * 90}ms` : "0ms" }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  draggable="false"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 group-hover:blur-[1px]"
                  loading="lazy"
                />
                {/* Glass shimmer & overlay accent on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-pink-200/30 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-all duration-700" />
                <div className="pointer-events-none absolute left-0 top-0 w-full h-1/2 bg-gradient-to-b from-white/25 to-transparent opacity-50 group-hover:opacity-80 transition-all duration-700" />
              </div>
              <div className="relative px-6 py-5 z-10 flex flex-col items-center">
                <h3 className="text-lg font-extrabold text-slate-900 drop-shadow-xl
                    group-hover:text-pink-600 group-hover:scale-105 transition-all duration-300"
                >
                  {item.title}
                </h3>
                <p className="mt-2 text-xs font-medium text-slate-600 group-hover:text-red-400 transition-all duration-300">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xs text-slate-400">
          Replace these sample images with real Vision Medico photos placed in <code>public/images</code>.
        </p>
      </section>
    </main>
  );
}

export default Gallery;
