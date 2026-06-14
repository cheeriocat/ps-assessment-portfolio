// src/pages/chapter/Chapter5.jsx — INTERVIEW SKILLS
import React from "react";
import c6 from "../../assets/c6.png";

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

export default function Chapter5Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 05
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Interview Skills
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Job interviews are scary, even when you've prepared thoroughly. But
          when you are prepared, you can harness the adrenaline to work for you,
          not against you.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "STAR method",
            "Body language",
            "7%-38%-55%",
            "6 C's",
            "Company research",
            "Interview structure",
            "Active listening",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="The Communication Breakdown">
          <p className="mb-3 text-sm">
            Research shows that how we communicate is far more than just words:
          </p>
          <div className="space-y-4 text-center">
            {[
              ["7%", "The words we use", "text-indigo-300"],
              ["38%", "Tone of voice", "text-amber-300"],
              ["55%", "Body language", "text-emerald-300"],
            ].map(([pct, label, color]) => (
              <div key={pct}>
                <div className={`text-4xl font-extrabold ${color}`}>{pct}</div>
                <div className="text-sm font-bold text-slate-200">{label}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="Interview Structure - 4 Stages">
          <ol className="space-y-2">
            {[
              [
                "1",
                "Introduction",
                "First impressions: firm handshake, confident greeting, consistent eye contact.",
                "emerald",
              ],
              [
                "2",
                "Evidence-Speaking",
                "STAR method - Situation, Task, Action, Result.",
                "cyan",
              ],
              [
                "3",
                "Your Questions",
                "Ask about the role, team culture, and growth - shows genuine interest.",
                "amber",
              ],
              [
                "4",
                "Closure",
                "Thank the panel, confirm next steps, and leave professionally.",
                "violet",
              ],
            ].map(([n, h, p, color]) => (
              <li key={n} className="flex gap-3 items-start">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full bg-${color}-500/20 text-${color}-300 text-xs font-bold flex-shrink-0`}
                >
                  {n}
                </span>
                <div>
                  <span className={`font-semibold text-${color}-200`}>
                    {h}:{" "}
                  </span>
                  <span className="text-sm text-slate-100/90">{p}</span>
                </div>
              </li>
            ))}
          </ol>
        </SectionCard>
      </div>

      <SectionCard tone="slate" title="The 6 C's of Effective Communication">
        <div className="grid md:grid-cols-[1fr,auto] gap-4 items-start">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              ["Clear", "Present ideas without ambiguity."],
              ["Concise", "Don't be long-winded or repetitive."],
              ["Correct", "Avoid misleading or inaccurate information."],
              ["Complete", "Give all necessary information, not just part."],
              ["Concrete", "Use specific examples and stories."],
              ["Courteous", "Maintain a respectful, professional tone."],
            ].map(([w, d]) => (
              <div
                key={w}
                className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-3"
              >
                <p className="font-semibold text-cyan-300 text-sm">{w}</p>
                <p className="text-xs text-slate-100/80 mt-1">{d}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <img
              src={c6}
              alt="Interview skills session."
              className="w-36 sm:w-44 md:w-52 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      <div className="mt-6 grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="rose" title="Unsuccessful Candidates">
          <ul className="space-y-1 text-sm">
            {[
              "Had vague, unclear ideas about the role",
              "Rarely used the company name",
              "Didn't research the company",
              "Responded in a neutral, flat tone",
              "Made little or no eye contact",
              "Couldn't give specific examples",
            ].map((i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-rose-400 mt-0.5">❌</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Successful Candidates">
          <ul className="space-y-1 text-sm">
            {[
              "Specific and consistent about position",
              "Used the company name naturally",
              "Demonstrated company research",
              "Responded positively and enthusiastically",
              "Made frequent eye contact, SMILED",
              "Gave concrete examples with outcomes",
            ].map((i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-emerald-400 mt-0.5">✅</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <SectionCard tone="violet" title="Language for Interviews">
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl border border-violet-500/30 bg-violet-900/20 p-3">
            <p className="font-semibold text-violet-300 mb-1">
              Describing Strengths
            </p>
            <p className="text-xs">
              "My main strength is my ability to communicate effectively."
              <br />
              "I have a flair for problem-solving under pressure."
            </p>
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-900/20 p-3">
            <p className="font-semibold text-cyan-300 mb-1">
              Describing Education
            </p>
            <p className="text-xs">
              "I recently graduated with a degree in IT."
              <br />
              "I have successfully completed the strategic level of..."
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-900/20 p-3">
            <p className="font-semibold text-emerald-300 mb-1">Future Goals</p>
            <p className="text-xs">
              "I'm looking to further my skills as a software engineer."
              <br />
              "I feel my skill set is a perfect fit for your team."
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/30 bg-amber-900/20 p-3">
            <p className="font-semibold text-amber-300 mb-1">Giving Opinion</p>
            <p className="text-xs">
              "In my opinion..." · "As far as I am concerned..."
              <br />
              "From my point of view..." · "To the best of my knowledge..."
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6">
        <SectionCard
          tone="slate"
          title="How I Applied This — Real-World Application"
        >
          <div className="space-y-3">
            <div className="border-l-2 border-violet-400/60 pl-4">
              <p className="font-semibold text-violet-300 text-sm">
                🎭 Mock Interview Practice
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                During the mock interview exercise, I applied the 7%–38%–55%
                communication model consciously, monitoring my posture,
                maintaining eye contact, and controlling tone of voice. My
                assessor noted my body language improved significantly from the
                first to the second attempt because I was actively managing all
                three channels simultaneously.
              </p>
            </div>
            <div className="border-l-2 border-cyan-400/60 pl-4">
              <p className="font-semibold text-cyan-300 text-sm">
                ⭐ STAR Method for Real Questions
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                When asked "Tell me about a challenge you faced," I applied the
                STAR structure: Situation (project deadline clash), Task
                (deliver two deliverables in one week), Action (created a
                priority matrix, communicated proactively with both
                stakeholders), Result (submitted both on time, received
                commendation). The structured answer was significantly more
                compelling than my pre-module attempts.
              </p>
            </div>
            <div className="border-l-2 border-amber-400/60 pl-4">
              <p className="font-semibold text-amber-300 text-sm">
                🔬 Company Research Before Interview
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                Before a campus recruitment session, I researched the company's
                recent projects, values, and tech stack. I naturally used their
                company name in answers and connected my skills to their stated
                needs - exactly what the "successful candidates" profile
                described. I was one of three students invited to the next
                round.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 05)">
          <p className="text-slate-100/90">
            The mock interview practice was transformative. I learned that
            preparation removes fear - knowing the company, preparing STAR
            examples, and practising non-verbal cues turns an interview from an
            ordeal into an <strong>opportunity</strong>. I now prepare a STAR
            bank of examples before every interview and never skip the company
            research phase.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
