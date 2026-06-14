// src/pages/chapter/Chapter3.jsx — PORTFOLIO WRITING
import React from "react";
import c4 from "../../assets/c4.jpg";

function Chip({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-500/40 bg-emerald-500/10 text-emerald-100">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {label}
    </span>
  );
}
function SectionCard({ tone = "emerald", title, children }) {
  const t = {
    emerald: {
      wrap: "border-emerald-500/40 bg-emerald-900/40",
      h: "text-emerald-100",
    },
    cyan: { wrap: "border-cyan-500/40 bg-cyan-900/40", h: "text-cyan-100" },
    amber: { wrap: "border-amber-500/40 bg-amber-900/40", h: "text-amber-100" },
    violet: {
      wrap: "border-violet-500/40 bg-violet-900/40",
      h: "text-violet-100",
    },
    slate: { wrap: "border-slate-600/60 bg-slate-900/60", h: "text-slate-100" },
    teal: { wrap: "border-teal-500/40 bg-teal-900/40", h: "text-teal-100" },
  }[tone] || {
    wrap: "border-slate-600/60 bg-slate-900/60",
    h: "text-slate-100",
  };
  return (
    <div
      className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl shadow-lg shadow-black/40`}
    >
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.h}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function Chapter3Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 03
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Portfolio Writing
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          A portfolio is a living testament to growth. It is not just a document
          - it is the most powerful professional tool you can own, showing
          rather than just telling.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Portfolio types",
            "Digital format",
            "LinkedIn",
            "GitHub",
            "Audience",
            "Best practices",
            "Online platforms",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What Is a Portfolio?">
          <p>
            A portfolio is a <strong>curated collection</strong> of work,
            achievements, and evidence of skills that showcases your
            professional capabilities to employers, educators, and clients.
          </p>
          <div className="mt-3 space-y-1 text-sm">
            {[
              "📋 Job Applications & Career Advancement",
              "🎨 Creative Industry Showcasing",
              "📚 Educational Assessments & Admissions",
              "💼 Freelancing & Consulting",
              "📈 Performance Evaluation & Professional Development",
            ].map((i) => (
              <div key={i}>{i}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="4 Types of Portfolios">
          <div className="grid grid-cols-2 gap-2">
            {[
              [
                "1",
                "Personal Portfolio",
                "Collection of creative work, achievements, and projects. Used in art, design, photography, writing, and multimedia.",
                "emerald",
              ],
              [
                "2",
                "Career / Dossier Portfolio",
                "Professional achievements and credentials: resume, cover letter, reference letters, work experience documentation.",
                "cyan",
              ],
              [
                "3",
                "Employment Portfolio",
                "Comprehensive work-related documents, accomplishments, performance evaluations, and training certificates.",
                "amber",
              ],
              [
                "4",
                "Assessment Portfolio",
                "Showcases learning progress, growth, and achievements over time. Used in educational settings.",
                "violet",
              ],
            ].map(([n, name, desc, color]) => (
              <div
                key={n}
                className={`rounded-xl border border-${color}-500/30 bg-${color}-900/20 p-3`}
              >
                <p className={`font-bold text-${color}-300 text-xs mb-1`}>
                  {n}. {name}
                </p>
                <p className="text-xs text-slate-100/80">{desc}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard tone="slate" title="How to Build an Assessment Portfolio">
        <div className="grid md:grid-cols-[1fr,auto] gap-4 items-start">
          <div className="space-y-2">
            {[
              [
                "1",
                "Define Your Purpose",
                "Academic, job applications, personal development? Clarify the primary goal before you start collecting.",
                "emerald",
              ],
              [
                "2",
                "Identify Your Audience",
                "Tailor content and presentation to their expectations - a recruiter needs different evidence than an academic assessor.",
                "cyan",
              ],
              [
                "3",
                "Choose Your Format",
                "Physical (printed binder) or digital (website, PDF, online platform). Digital portfolios are increasingly preferred in IT.",
                "violet",
              ],
              [
                "4",
                "Collect & Organise Materials",
                "Transcripts, certificates, CV, work samples, reflections. Structure with clear sections and headings.",
                "amber",
              ],
              [
                "5",
                "Showcase Achievements",
                "Use quantifiable results. Maintain professional appearance - error-free, visually consistent, well-organised.",
                "teal",
              ],
            ].map(([n, h, p, color]) => (
              <div key={n} className="flex gap-3 items-start">
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full bg-${color}-500/20 text-${color}-300 text-sm font-bold flex-shrink-0`}
                >
                  {n}
                </span>
                <div>
                  <span className={`font-semibold text-${color}-200 text-sm`}>
                    {h}:{" "}
                  </span>
                  <span className="text-sm text-slate-100/90">{p}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <img
              src={c4}
              alt="Portfolio writing session."
              className="w-36 sm:w-44 md:w-52 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      <div className="mt-6 mb-6">
        <SectionCard tone="violet" title="Online Portfolio Platforms">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              [
                "LinkedIn",
                "Professional networking with built-in portfolio features",
              ],
              ["Behance", "Creative professionals showcasing graphic work"],
              ["Google Sites", "Free, easy-to-build personal websites"],
              [
                "Squarespace",
                "Elegant visual templates for stylish presentation",
              ],
              [
                "Adobe Portfolio",
                "Integrates with Creative Cloud for creatives",
              ],
              [
                "GitHub",
                "Essential for IT and software development portfolios",
              ],
            ].map(([name, desc]) => (
              <div
                key={name}
                className="rounded-xl border border-violet-500/30 bg-violet-900/20 p-3"
              >
                <p className="font-semibold text-violet-300 text-sm">{name}</p>
                <p className="text-xs text-slate-100/80 mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl bg-emerald-900/30 border border-emerald-500/30 px-4 py-2 text-sm text-center font-semibold text-emerald-300">
            BEST PRACTICES: REGULARLY UPDATE · SEEK FEEDBACK · TAILOR FOR EACH
            PURPOSE
          </div>
        </SectionCard>
      </div>

      <SectionCard
        tone="slate"
        title="How I Applied This - Real-World Application"
      >
        <div className="space-y-3">
          <div className="border-l-2 border-emerald-400/60 pl-4">
            <p className="font-semibold text-emerald-300 text-sm">
              📁 Building This Portfolio
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              The most direct application of portfolio writing is this very
              document. I deliberately chose a digital format to reflect my IT
              background, organised it by topic with clear navigation, and
              included genuine reflections rather than generic summaries. Every
              design choice was intentional, as taught in the module.
            </p>
          </div>
          <div className="border-l-2 border-cyan-400/60 pl-4">
            <p className="font-semibold text-cyan-300 text-sm">
              💼 LinkedIn Profile Rearrangement
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              After this session, I rearranged my LinkedIn profile to function
              as an online career portfolio. I added a professional summary,
              documented my university projects with quantifiable outcomes, and
              collected endorsements. The module's advice on tailoring for your
              audience shaped every section I wrote.
            </p>
          </div>
          <div className="border-l-2 border-amber-400/60 pl-4">
            <p className="font-semibold text-amber-300 text-sm">
              🎓 Assignment Submission Portfolio
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              I compiled my CV, cover letter, and mock interview performance
              notes. Applying the "identify audience" principle, I tailored
              language and emphasis to IT-sector recruiters, resulting in a more
              targeted and compelling submission than I would have produced
              without this framework.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 03)">
          <p className="text-slate-100/90">
            A portfolio is not just a document - it is a{" "}
            <strong>living testament to growth</strong>. This very portfolio is
            my evidence of professional skills development. A portfolio is the
            most powerful professional document I can own - it shows, not just
            tells. I will maintain and update mine throughout my entire career.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
