// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

// You can create these as separate SVG components or use an icon library
const IconHeart = () => '❤️';
const IconShield = () => '🛡️';
const IconCommunity = () => '🤝';

const features = [
  {
    Icon: IconHeart,
    title: 'Save Lives',
    description: 'A single unit of blood can be separated into components, saving up to three lives.',
  },
  {
    Icon: IconShield,
    title: 'Safe & Simple',
    description: 'We use sterile equipment and have a trained team to ensure a safe, comfortable experience.',
  },
  {
    Icon: IconCommunity,
    title: 'Build Community',
    description: 'Join a community of selfless donors who make a real impact in Bhopal.',
  },
];

const processSteps = [
  {
    step: 1,
    title: 'Quick Registration',
    description: 'Fill out a simple form with your basic details and medical history.',
  },
  {
    step: 2,
    title: 'Health Screening',
    description: 'A quick check of your pulse, blood pressure, and hemoglobin levels.',
  },
  {
    step: 3,
    title: 'Donation',
    description: 'The actual donation process takes only about 8-10 minutes.',
  },
  {
    step: 4,
    title: 'Rest & Refresh',
    description: 'Enjoy snacks and juice to replenish your fluids before you leave.',
  },
];

function Home() {
  return (
    <>
      <HeroSection scrollToId="why-donate" />

      {/* Main Content Wrapper */}
      <div id="why-donate" className="bg-white pt-16">
        {/* --- Why Donate Section --- */}
        <section className="mx-auto max-w-6xl px-4 pb-16 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Why Your Donation Matters</h2>
          <p className="mt-3 text-base text-slate-600">
            Every two seconds, someone in India needs blood. Your contribution is critical.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl">
                  <feature.Icon />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-800">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Our Process Section --- */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900">A Simple, Safe Process</h2>
            <p className="mt-3 text-base text-slate-600">
              Donating blood is easy and we guide you through every step.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div key={step.step} className="flex items-start text-left">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                    {step.step}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-slate-800">{step.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Ready to Be a Hero?</h2>
            <p className="mt-3 text-base text-slate-600">
              Your decision to donate can bring a lifetime of difference to someone in need. Book your slot today and join our mission.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block rounded-full bg-red-600 px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-red-700"
              >
                Become a Donor
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
