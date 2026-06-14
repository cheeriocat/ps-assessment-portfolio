// src/pages/chapter/Chapter9.jsx — CODE OF ETHICS IN IT
import React from "react";

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
    indigo: {
      wrap: "border-indigo-500/40 bg-indigo-900/40",
      h: "text-indigo-100",
    },
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

export default function Chapter9Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 09
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Code of Ethics in IT
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          As a future IT professional, I understand that ethical awareness is
          not optional - it is foundational. Every system I build, every line of
          code I write, has the power to help or harm.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Profession",
            "Ethics",
            "CSSL",
            "ACM",
            "IEEE",
            "BCS",
            "Data privacy",
            "Ethical dilemmas",
            "Decision-making",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What Is a Profession?">
          <p>
            A profession is a calling requiring{" "}
            <strong>specialised knowledge</strong>, academic preparation, and
            provides services to society. Computing professionals include
            software engineers, system analysts, database administrators,
            network engineers, and IT managers.
          </p>
        </SectionCard>

        <SectionCard tone="emerald" title="Ethics in Computing">
          <p className="mb-3">
            Ethics is a set of beliefs about{" "}
            <strong>right and wrong behaviour</strong>. In computing, ethics
            guides decision-making, prevents harm, builds trust, protects
            stakeholders, and promotes professionalism.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Honesty", "Fairness", "Respect"].map((b) => (
              <span
                key={b}
                className="rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 px-3 py-1 text-sm font-semibold"
              >
                {b}
              </span>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard tone="slate" title="Professional Responsibilities">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            [
              "C",
              "To Clients & Users",
              "Deliver quality systems, protect data, maintain confidentiality, provide accurate information.",
              "cyan",
            ],
            [
              "E",
              "To Employers",
              "Perform duties competently, protect assets, maintain loyalty, follow policies.",
              "indigo",
            ],
            [
              "CO",
              "To Colleagues",
              "Respect others, collaborate effectively, avoid discrimination, support teamwork.",
              "emerald",
            ],
            [
              "S",
              "To Society",
              "Protect public safety, avoid harmful systems, promote fairness, respect legal norms.",
              "violet",
            ],
          ].map(([code, h, p, color]) => (
            <div
              key={code}
              className={`flex gap-3 items-start rounded-xl border border-${color}-500/30 bg-${color}-900/20 px-4 py-3`}
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-${color}-500/20 text-${color}-300 text-sm font-bold flex-shrink-0`}
              >
                {code}
              </span>
              <div>
                <p className={`font-semibold text-${color}-200 text-sm`}>{h}</p>
                <p className="text-xs text-slate-100/90 mt-1">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="mt-6 grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="violet" title="Major Professional Bodies">
          <div className="space-y-2 text-sm">
            {[
              [
                "CSSL - Sri Lanka",
                "Professionalism, Honesty, Competence, Contribution to national development.",
                "violet",
              ],
              [
                "ACM - Global",
                "Contribute to society, avoid harm, be honest, respect privacy, honour confidentiality.",
                "cyan",
              ],
              [
                "IEEE - Global",
                "Prioritise safety, avoid conflicts of interest, be honest, reject bribery.",
                "emerald",
              ],
              [
                "BCS - UK",
                "Public interest, professional competence, duty to relevant authority.",
                "amber",
              ],
            ].map(([name, desc, color]) => (
              <div
                key={name}
                className={`rounded-xl border border-${color}-500/30 bg-${color}-900/20 px-3 py-2`}
              >
                <p className={`font-semibold text-${color}-300`}>{name}</p>
                <p className="text-xs mt-1 text-slate-100/90">{desc}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard tone="rose" title="Ethical Dilemmas in Computing">
          <div className="space-y-2 text-sm">
            {[
              [
                "D",
                "Data Privacy Breaches",
                "Mishandling personal data violates user trust and legal obligations (GDPR, local regulations).",
                "rose",
              ],
              [
                "U",
                "Untested Software",
                "Releasing software with known bugs can cause serious harm to users and organisations.",
                "amber",
              ],
              [
                "A",
                "Algorithm Bias",
                "AI and algorithms that discriminate based on race, gender, or background create systemic injustice.",
                "violet",
              ],
              [
                "IP",
                "IP Misuse",
                "Using others' code or designs without permission or attribution is unethical and illegal.",
                "cyan",
              ],
            ].map(([code, h, p, color]) => (
              <div
                key={code}
                className={`flex gap-2 items-start rounded-xl border border-${color}-500/30 bg-${color}-900/20 px-3 py-2`}
              >
                <span
                  className={`font-bold text-${color}-300 w-6 flex-shrink-0 text-sm`}
                >
                  {code}
                </span>
                <div>
                  <p className={`font-semibold text-${color}-200 text-xs`}>
                    {h}
                  </p>
                  <p className="text-xs text-slate-100/80 mt-0.5">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard tone="indigo" title="Ethical Decision-Making Framework">
        <div className="space-y-2">
          {[
            [
              "1",
              "Identify Stakeholders",
              "Who will be affected by this decision? Users, colleagues, society, the organisation?",
            ],
            [
              "2",
              "Consider Consequences",
              "Short-term and long-term impacts of each possible action.",
            ],
            [
              "3",
              "Review Responsibilities",
              "What do professional codes, your employer, and the law require?",
            ],
            [
              "4",
              "Explore Alternatives",
              "Are there other options that better serve all stakeholders?",
            ],
          ].map(([n, h, p]) => (
            <div
              key={n}
              className="flex gap-3 items-start rounded-xl border border-indigo-500/30 bg-indigo-900/20 px-4 py-3"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold flex-shrink-0">
                {n}
              </span>
              <div>
                <p className="font-semibold text-indigo-200 text-sm">{h}</p>
                <p className="text-xs text-slate-100/90 mt-1">{p}</p>
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
            <div className="border-l-2 border-cyan-400/60 pl-4">
              <p className="font-semibold text-cyan-300 text-sm">
                🔐 Data Privacy in a Class Project
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                In our database project, we worked with a simulated dataset
                containing personal records. Applying the code of ethics, I
                raised a concern about how we were storing user data - we had no
                encryption or access controls. The team adopted proper data
                handling practices as a result. This directly applied the
                principle of responsibility to clients and users.
              </p>
            </div>
            <div className="border-l-2 border-violet-400/60 pl-4">
              <p className="font-semibold text-violet-300 text-sm">
                💡 Intellectual Property Awareness
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                When a classmate suggested using a paid library without a proper
                license in our project, I consulted the ACM and IEEE codes I had
                studied. I explained the legal and ethical risks, proposed a
                legitimate open-source alternative, and documented our choice.
                This decision protected both the team and the university from IP
                liability.
              </p>
            </div>
            <div className="border-l-2 border-amber-400/60 pl-4">
              <p className="font-semibold text-amber-300 text-sm">
                ⚖️ Ethical Dilemma Reflection
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                In a case study discussion, we debated whether to release a
                system with a known minor bug to meet a client deadline.
                Applying the ethical decision-making framework (identify
                stakeholders, consider consequences, review responsibilities,
                explore alternatives), I argued for a brief delay and a patch
                release. The discussion demonstrated that ethical reasoning is a
                structured skill, not just intuition.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 09)">
          <p className="text-slate-100/90">
            Ethics in IT is not abstract philosophy - it is every decision I
            make when building systems. As a future IT professional, I carry the
            responsibility to build technology that serves, not harms, society.{" "}
            <strong>
              Ethics is the compass that guides responsible technology.
            </strong>{" "}
            Ethical awareness is not optional - it is foundational.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
