// src/pages/chapter/Chapter4.jsx — CV WRITING
import React from "react";
import c7 from "../../assets/c7.jpg";

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
    rose: { wrap: "border-rose-500/40 bg-rose-900/40", h: "text-rose-100" },
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

export default function Chapter4Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 04
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          CV Writing
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          A CV is your first opportunity to make an impression on potential
          employers. A well-crafted CV is not just a list of facts - it is a
          marketing document. Every word must earn its place.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Curriculum Vitae",
            "Action verbs",
            "ATS keywords",
            "Tailoring",
            "Work experience",
            "Formatting",
            "Common mistakes",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What Is a CV?">
          <p>
            A <strong>Curriculum Vitae (CV)</strong> is a comprehensive document
            summarising your education, work experience, skills, achievements,
            and qualifications. It is your <strong>first opportunity</strong> to
            make an impression on potential employers and plays a critical role
            in getting shortlisted for interviews.
          </p>
          <div className="mt-3 rounded-xl border border-cyan-500/30 bg-cyan-900/20 px-4 py-3 text-sm">
            ★ A well-crafted CV can set you apart from other applicants and
            demonstrates genuine interest in the role.
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="Essential Components">
          <div className="space-y-1 text-sm">
            {[
              ["📋", "Personal Information", "Name, contact, LinkedIn"],
              ["✍️", "Professional Summary", "Career goals & key skills"],
              ["💼", "Work Experience", "Reverse chronological order"],
              ["🎓", "Education", "Degrees, institutions, dates"],
              ["🛠️", "Skills", "Technical & soft skills"],
              ["🏆", "Achievements & Awards", "Certifications, recognitions"],
            ].map(([icon, h, p]) => (
              <div key={h}>
                <strong>
                  {icon} {h}
                </strong>{" "}
                — {p}
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard tone="slate" title="CV Formatting Tips">
        <div className="grid md:grid-cols-[1fr,auto] gap-4 items-start">
          <div className="space-y-3">
            {[
              [
                "Clear Layout",
                "Organised structure with proper headings, bullet points, and white space for easy scanning.",
              ],
              [
                "Consistent Formatting",
                "Same font, font size, and style maintained throughout the entire document.",
              ],
              [
                "ATS-Ready",
                "Use keywords from the job description to pass automated applicant tracking systems.",
              ],
            ].map(([h, p]) => (
              <div
                key={h}
                className="flex gap-3 items-start rounded-xl border border-emerald-500/30 bg-emerald-900/20 px-4 py-3"
              >
                <span className="text-emerald-400 text-lg">✓</span>
                <div>
                  <p className="font-semibold text-emerald-300 text-sm">{h}</p>
                  <p className="text-xs text-slate-100/80 mt-1">{p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <img
              src={c7}
              alt="CV writing session."
              className="w-36 sm:w-44 md:w-52 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      <div className="mt-6 grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="violet" title="Tailoring Your CV">
          <p className="text-sm mb-3">
            A tailored CV aligns directly with the specific job you're applying
            for. Research the company, identify keywords, and highlight the most
            relevant qualifications. Tailored CVs dramatically increase your
            chances of being noticed.
          </p>
          <div className="space-y-2">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-900/20 p-3 text-sm">
              <p className="font-semibold text-emerald-300">Marketing Role</p>
              <p className="text-slate-100/90 text-xs mt-1">
                Emphasise communication, creativity, analytics, and campaign
                management skills.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-900/20 p-3 text-sm">
              <p className="font-semibold text-cyan-300">Technical Role</p>
              <p className="text-slate-100/90 text-xs mt-1">
                Highlight programming languages, database skills, systems
                experience, and problem-solving.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard tone="amber" title="Work Experience — How to Write It">
          <p className="text-sm mb-2">
            List experiences in <strong>reverse chronological order</strong>.
            For each position include: job title, company, location, and dates.
            Use <strong>action verbs</strong> and{" "}
            <strong>quantifiable achievements</strong>.
          </p>
          <div className="rounded-xl border border-amber-500/30 bg-amber-900/20 px-4 py-3 text-sm mb-3">
            <strong>Example:</strong> "Led a team of 5 to develop a student
            portal that reduced admin queries by 40% - Final Year Project, 2026"
          </div>
          <div className="flex flex-wrap gap-1">
            {[
              "Managed",
              "Developed",
              "Achieved",
              "Delivered",
              "Improved",
              "Led",
              "Designed",
              "Implemented",
            ].map((v) => (
              <span
                key={v}
                className="rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs px-2 py-0.5"
              >
                {v}
              </span>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard tone="rose" title="Common CV Mistakes to Avoid">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            [
              "Spelling & Grammar Errors",
              "Always proofread — errors signal lack of attention to detail.",
            ],
            [
              "Irrelevant Information",
              "Only include experience relevant to the role you're applying for.",
            ],
            [
              "Inconsistent Formatting",
              "Inconsistency breaks the visual flow and signals carelessness.",
            ],
            [
              "Being Too Verbose",
              "Keep descriptions concise - recruiters spend ~7 seconds on initial scan.",
            ],
          ].map(([h, p]) => (
            <div key={h} className="flex gap-2 items-start">
              <span className="text-rose-400 text-lg flex-shrink-0">✗</span>
              <div>
                <p className="font-semibold text-rose-300 text-sm">{h}</p>
                <p className="text-xs text-slate-100/80 mt-0.5">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="mt-6">
        <SectionCard
          tone="slate"
          title="How I Applied This - Real-World Application"
        >
          <div className="space-y-3">
            <div className="border-l-2 border-amber-400/60 pl-4">
              <p className="font-semibold text-amber-300 text-sm">
                📄 Crafting My First Professional CV
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                Before this module, my CV was a plain list of activities. After
                the session, I restructured it with a professional summary,
                reverse-chronological experience, and action verbs with
                quantifiable outcomes. I replaced "worked on a project" with
                "Led a 4-member team to develop a student portal, reducing admin
                processing time by 35%."
              </p>
            </div>
            <div className="border-l-2 border-cyan-400/60 pl-4">
              <p className="font-semibold text-cyan-300 text-sm">
                🎯 Tailoring for an IT Internship
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                When applying for an IT internship, I created a tailored version
                of my CV that emphasised programming languages, database skills,
                and relevant university projects - following the module's
                guidance on keyword matching with job descriptions. This
                tailored approach earned me a shortlist callback.
              </p>
            </div>
            <div className="border-l-2 border-emerald-400/60 pl-4">
              <p className="font-semibold text-emerald-300 text-sm">
                🔍 Peer Review Exercise
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                In the in-class peer review session, I reviewed a classmate's CV
                and received feedback on mine. Identifying their formatting
                inconsistencies and receiving feedback on my overly verbose
                descriptions directly applied the "avoiding common mistakes"
                lesson. I then revised my CV with sharper, more concise bullet
                points.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 04)">
          <p className="text-slate-100/90">
            Through CV writing practice, I learned that a CV is not just a list
            of facts - it is a <strong>marketing document</strong>. Every word
            must earn its place and serve the purpose of securing that
            interview. A well-crafted CV is your first interview - make it
            count.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
