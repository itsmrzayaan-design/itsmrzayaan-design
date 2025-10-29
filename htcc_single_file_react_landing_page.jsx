/*
  Halaal Tayyib Certification Canada (HTCC) Official Website
  Modern Islamic business style, matching turquoise + black logo colors.
  Includes mission, vision, and team sections.
  Designed for credibility, faith, and professionalism.
*/

import React from "react";
import { motion } from "framer-motion";

export default function HTCCLanding() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="bg-black text-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/htcc-logo.png" alt="HTCC Logo" className="w-12 h-12 rounded-xl" />
            <div>
              <div className="font-semibold text-lg">Halaal Tayyib Certification Canada</div>
              <div className="text-xs text-gray-300">Trusted • Scientific • Islamic Guidance</div>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-green-400">About</a>
            <a href="#services" className="hover:text-green-400">Services</a>
            <a href="#process" className="hover:text-green-400">Process</a>
            <a href="#mission" className="hover:text-green-400">Mission</a>
            <a href="#team" className="hover:text-green-400">Team</a>
            <a href="#contact" className="hover:text-green-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-extrabold leading-tight text-black">Halaal. Tayyib. Trusted.</h1>
            <p className="mt-4 text-gray-700">HTCC provides independent halal certification backed by Islamic scholarship and food science expertise. We help businesses demonstrate compliance and earn community trust through transparent, professional audits.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center px-5 py-2.5 bg-green-600 text-white rounded-md shadow-sm">Request Certification</a>
              <a href="#process" className="inline-flex items-center px-5 py-2.5 border border-green-600 text-green-700 rounded-md">Our Process</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <img src="/halal-inspection.jpg" alt="Halal audit" className="rounded-2xl shadow-md" />
          </motion.div>
        </section>

        {/* About */}
        <section id="about" className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-black">About HTCC</h2>
          <p className="mt-3 text-gray-700">Halaal Tayyib Certification Canada (HTCC) combines Islamic scholarly oversight with modern food science to ensure true halal and tayyib compliance. Based in Mississauga, Ontario, HTCC supports restaurants, suppliers, and manufacturers across Canada.</p>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="mt-12 bg-black text-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold">Mission & Vision</h2>
          <p className="mt-4 text-gray-200"><strong>Mission:</strong> To uphold the principles of halal and tayyib through transparent certification, scientific validation, and spiritual integrity.</p>
          <p className="mt-2 text-gray-200"><strong>Vision:</strong> To be Canada’s trusted authority in halal assurance — promoting food safety, ethical business, and community confidence.</p>
        </section>

        {/* Services */}
        <section id="services" className="mt-12">
          <h2 className="text-xl font-bold text-black">Our Services</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <ServiceCard title="Halal Certification" desc="Comprehensive audits, supplier verification, and halal certification issuance." />
            <ServiceCard title="Consultation" desc="Guidance for businesses seeking halal compliance or certification readiness." />
            <ServiceCard title="Training" desc="Workshops for staff on halal handling, contamination prevention, and best practices." />
          </div>
        </section>

        {/* Process */}
        <section id="process" className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-black">Certification Process</h2>
          <ol className="mt-4 space-y-3 list-decimal list-inside text-gray-700">
            <li>Application and document submission</li>
            <li>Audit (on-site inspection and supplier review)</li>
            <li>Evaluation by Imam & Technical Committee</li>
            <li>Certification decision and report issuance</li>
            <li>Ongoing monitoring and renewal</li>
          </ol>
        </section>

        {/* Team */}
        <section id="team" className="mt-12 bg-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-black">Our Team</h2>
          <div className="mt-6 grid md:grid-cols-4 gap-6">
            <TeamCard name="Imam (Dr.) Qamrul Khanson" title="CEO & Food Science Specialist" />
            <TeamCard name="Zayaan" title="Youth Auditor, HTCC" />
            <TeamCard name="Muaaz" title="Youth Auditor, HTCC" />
            <TeamCard name="Eesa" title="Youth Auditor, HTCC" />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-xl font-bold text-black">Contact Us</h2>
          <p className="mt-2 text-gray-700">For inquiries or certification requests, fill out the form below or reach us at <strong>info@htcc.ca</strong> (placeholder, editable later).</p>

          <form className="mt-6 grid md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Demo submission — connect backend later.');}}>
            <input required placeholder="Business Name" className="p-3 border rounded" />
            <input required placeholder="Contact Person" className="p-3 border rounded" />
            <input required type="email" placeholder="Email" className="p-3 border rounded" />
            <input placeholder="Phone (optional)" className="p-3 border rounded" />
            <textarea placeholder="Your Message" rows={4} className="md:col-span-2 p-3 border rounded"></textarea>
            <button type="submit" className="md:col-span-2 bg-green-600 text-white p-3 rounded">Send Message</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-12 py-8 text-center text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Halaal Tayyib Certification Canada (HTCC). Established 2025. Mississauga, Ontario.</div>
          <div className="mt-2">Follow us on Instagram: <a href="https://instagram.com/htcc_official" target="_blank" rel="noreferrer" className="text-green-700">@htcc_official</a></div>
        </footer>
      </main>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="p-6 bg-white rounded-lg border shadow-sm">
      <h3 className="font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function TeamCard({ name, title }) {
  return (
    <div className="p-6 bg-white rounded-lg border text-center shadow-sm">
      <div className="text-lg font-semibold text-black">{name}</div>
      <div className="text-sm text-gray-600 mt-1">{title}</div>
    </div>
  );
}
