import React, { useRef, useEffect, useState } from "react";

function Contact() {
  // Animate entrance on scroll using Intersection Observer
  const pageRef = useRef();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setEntered(true); },
      { threshold: 0.16 }
    );
    if (pageRef.current) observer.observe(pageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#fdf5f5] via-[#fee2e2] to-[#fde4ec]">
      <section
        ref={pageRef}
        className={`
          mx-auto max-w-5xl px-4 pt-10 pb-6
          text-center md:text-left
          transition-all duration-1000
          ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        `}
        style={{ transitionDelay: entered ? '150ms' : '0ms' }}
      >
        <p className="text-xs font-semibold tracking-[0.3em] text-slate-600 uppercase">
          Reach Us
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-wide text-red-600 md:text-4xl drop-shadow-lg">
          Contact Vision Medico
        </h1>
        <p className="mt-4 text-sm text-slate-700 md:text-base">
          Book a donation slot or ask any questions about eligibility, timings, and ongoing camps.
        </p>
      </section>
      <section className={`
        mx-auto flex max-w-5xl flex-col gap-8 px-4 pb-16 md:flex-row
        transition-all duration-1000
        ${entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
        style={{ transitionDelay: entered ? '400ms' : '0ms' }}
      >
        {/* Contact info */}
        <div className="md:w-1/2">
          <div className="
            rounded-2xl bg-white/90 p-7 shadow-2xl ring-1 ring-red-100 border border-white/80
            backdrop-blur-lg
            animate-fade
            transition-all duration-700
            hover:-translate-y-1.5 hover:ring-2 hover:ring-red-200
          ">
            <h2 className="text-lg font-semibold text-slate-900 mb-1 drop-shadow-md">
              Contact Details
            </h2>
            <p className="mt-3 text-sm text-slate-700">
              <span className="font-semibold">Address:</span> C-6, 3rd floor, Vidya Nagar in front of Baghsewaniya Thana, Narmadapuram Rd, Bhopal, Madhya Pradesh 462026
            </p>
            <p className="mt-1 text-sm text-slate-700">
              <span className="font-semibold">Phone:</span> +91-6264909040
            </p>
            <p className="mt-1 text-sm text-slate-700">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@visionmedico.com" className="text-red-600 hover:underline">info@visionmedico.com</a>
            </p>
            <p className="mt-3 text-sm text-slate-700">
              <span className="font-semibold">Working Hours:</span> 24x7 (Everyday)
            </p>
          </div>
        </div>
        {/* Form */}
        <div className="md:w-1/2">
          <form
            className="
              rounded-2xl bg-white/90 p-7 shadow-2xl border border-white/70
              backdrop-blur-md flex flex-col gap-4
              animate-fade
              transition-all duration-700
              hover:-translate-y-1.5 hover:ring-2 hover:ring-red-100
            "
            autoComplete="off"
          >
            <h2 className="text-lg font-semibold text-slate-900 mb-1 drop-shadow-md">
              Book a Donation Slot
            </h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border border-red-100 bg-white px-3 py-2 text-sm font-semibold shadow-sm outline-none
                focus:border-red-400 focus:ring-2 focus:ring-red-400
                transition-all duration-200"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-lg border border-red-100 bg-white px-3 py-2 text-sm font-semibold shadow-sm outline-none
                focus:border-red-400 focus:ring-2 focus:ring-red-400
                transition-all duration-200"
              required
            />
            <input
              type="email"
              placeholder="Email (optional)"
              className="w-full rounded-lg border border-red-100 bg-white px-3 py-2 text-sm shadow-sm outline-none
                focus:border-red-400 focus:ring-2 focus:ring-red-400
                transition-all duration-200"
            />
            <input
              type="text"
              placeholder="Blood Group (e.g. B+)"
              className="w-full rounded-lg border border-red-100 bg-white px-3 py-2 text-sm shadow-sm outline-none
                focus:border-red-400 focus:ring-2 focus:ring-red-400
                transition-all duration-200"
            />
            <textarea
              placeholder="Preferred date & any notes"
              rows={3}
              className="w-full rounded-lg border border-red-100 bg-white px-3 py-2 text-sm shadow-sm outline-none
                focus:border-red-400 focus:ring-2 focus:ring-red-400
                transition-all duration-200 resize-none"
            />
            <button
              type="submit"
              className="mt-3 w-full rounded-full bg-gradient-to-r from-red-500 to-pink-500 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-xl
                transition-all duration-300
                hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 active:scale-95
                relative overflow-hidden"
            >
              <span className="relative z-10">Submit</span>
              {/* Shimmer/ripple */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all bg-gradient-to-r from-white/10 to-white/0 blur"></span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
