import React from "react";
import BloodCard from "../components/BloodCard";

const bloodData = [
  { type: "A+", donateTo: "A+, AB+", receiveFrom: "A+, A-, O+, O-" },
  { type: "A-", donateTo: "A+, A-, AB+, AB-", receiveFrom: "A-, O-" },
  { type: "B+", donateTo: "B+, AB+", receiveFrom: "B+, B-, O+, O-" },
  { type: "B-", donateTo: "B+, B-, AB+, AB-", receiveFrom: "B-, O-" },
  { type: "AB+", donateTo: "AB+ only", receiveFrom: "All blood types", note: "Universal recipient" },
  { type: "AB-", donateTo: "AB+, AB-", receiveFrom: "A-, B-, AB-, O-" },
  { type: "O+", donateTo: "O+, A+, B+, AB+", receiveFrom: "O+, O-" },
  { type: "O-", donateTo: "All blood types", receiveFrom: "O- only", note: "Often used as universal donor" },
];

function BloodGroups() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#fff5f5] via-[#fee2e2] to-[#fecaca]">
      {/* Page header */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-6 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-slate-700 uppercase animate-fade"
           style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
          Know
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-wide text-red-600 md:text-4xl animate-fade"
            style={{ animationDelay: '350ms', animationFillMode: 'backwards' }}>
          Blood Group Compatibility
        </h1>
        <p className="mt-4 text-sm text-slate-700 md:text-base animate-fade"
           style={{ animationDelay: '600ms', animationFillMode: 'backwards' }}>
          Understanding who you can donate to and receive from ensures safer transfusions for every patient.
        </p>
      </section>
      {/* Animated Card Grid */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {bloodData.map((b, i) => (
            <BloodCard key={b.type} {...b} delay={120 + i * 110} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default BloodGroups;
