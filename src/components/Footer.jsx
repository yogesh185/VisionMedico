// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-xs font-semibold tracking-[0.25em] text-red-400 uppercase">
            Vision Blood Centre
          </h3>
          <p className="mt-1 text-lg font-semibold">Component And Apheresis Centre</p>
          <p className="mt-3 max-w-sm text-sm text-slate-300">
            Safe and voluntary blood donation for patients who need timely
            transfusion support.
          </p>
        </div>

        <div className="text-sm">
          <h4 className="mb-2 text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Quick Links
          </h4>
          <div className="flex flex-col gap-1">
            <NavLink to="/" className="hover:text-red-300">
              Home
            </NavLink>
            <NavLink to="/blood-groups" className="hover:text-red-300">
              Blood Info
            </NavLink>
            <NavLink to="/gallery" className="hover:text-red-300">
              Gallery
            </NavLink>
            <NavLink to="/contact" className="hover:text-red-300">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="text-sm">
          <h4 className="mb-2 text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Contact
          </h4>
          <p>Address: C-6, 3rd floor, Vidya Nagar in front of Baghsewaniya Thana, Narmadapuram Rd, Bhopal, Madhya Pradesh 462026</p>
          <p>Phone: +91-6264909040</p>
          <p>Email: info@visionmedico.com</p>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Vision Medico Blood Bank</p>
          <p>Made with care in Bhopal</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
