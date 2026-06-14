// src/pages/chapter/Chapter8.jsx — NEGOTIATION SKILLS
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
    teal: { wrap: "border-teal-500/40 bg-teal-900/40", h: "text-teal-100" },
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

export default function Chapter8Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 08
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Negotiation Skills
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Mastering negotiation takes practice - but the rewards are worth it.
          Negotiation is not confrontation - it is collaboration toward a shared
          solution.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "BATNA",
            "Win-win",
            "Active listening",
            "7 key principles",
            "Stakeholders",
            "Common mistakes",
            "Strategic empathy",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="mb-4 rounded-2xl border border-teal-500/30 bg-teal-900/20 px-5 py-3 text-center text-sm font-semibold text-teal-300">
        🤝 MASTERING NEGOTIATION TAKES PRACTICE - BUT THE REWARDS ARE WORTH IT
        🤝
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What Is Negotiation?">
          <p>
            Negotiation is a <strong>structured process</strong> through which
            two or more parties attempt to reach a mutually acceptable
            agreement. It involves the exchange of offers, counteroffers, and
            commitments to resolve differences.
          </p>
          <div className="mt-3 rounded-xl border border-cyan-500/30 bg-cyan-900/20 px-4 py-2 text-sm">
            ★ Effective negotiation aims to satisfy both business objectives AND
            long-term relationships.
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="7 Key Principles">
          <ol className="space-y-1 text-sm">
            {[
              "People Before Problems",
              "Trust and Verify",
              "Focus on Interests (not positions)",
              "Invest in Options",
              "Divide with Reason",
              "Mind Power - emotional control",
              "Co-own the Process",
            ].map((p, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="font-bold text-emerald-400 flex-shrink-0">
                  {"①②③④⑤⑥⑦"[i]}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </SectionCard>
      </div>

      <SectionCard tone="slate" title="Understanding BATNA">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm mb-3">
              <strong className="text-cyan-300">BATNA</strong> = Best
              Alternative To a Negotiated Agreement. It is your fallback option
              if negotiations fail - not an escape plan, but a{" "}
              <strong>strategic anchor</strong>.
            </p>
            <div className="rounded-xl border border-teal-500/30 bg-teal-900/20 px-4 py-3 text-sm">
              A strong BATNA increases bargaining power and confidence.
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-emerald-300">
              How to Identify BATNA:
            </p>
            {[
              "List all possible alternatives",
              "Evaluate which is most effective",
              "Convert into a walk-away threshold",
              "Reassess before and during negotiation",
            ].map((s, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-emerald-400 font-bold flex-shrink-0">
                  {i + 1}.
                </span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionCard>

      <div className="mt-6 grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="violet" title="Communication in Negotiation">
          <div className="space-y-2 text-sm">
            {[
              [
                "AL",
                "Active Listening",
                "Fully understanding the other party's position before responding.",
              ],
              [
                "EQ",
                "Effective Questioning",
                "Open-ended questions to uncover interests and motivations.",
              ],
              [
                "BR",
                "Building Rapport",
                "Trust is the foundation of any successful agreement.",
              ],
              [
                "WW",
                "Win-Win Solutions",
                "Look for outcomes that satisfy both parties' core interests.",
              ],
              [
                "SE",
                "Strategic Empathy",
                "Understand the other party's perspective to find creative solutions.",
              ],
            ].map(([code, h, p]) => (
              <div
                key={code}
                className="flex gap-2 items-start rounded-xl border border-violet-500/30 bg-violet-900/20 px-3 py-2"
              >
                <span className="font-bold text-violet-300 text-sm w-8 flex-shrink-0">
                  {code}
                </span>
                <div>
                  <span className="font-semibold text-violet-200 text-sm">
                    {h}:{" "}
                  </span>
                  <span className="text-xs text-slate-100/90">{p}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard tone="rose" title="Common Negotiation Mistakes">
          <div className="space-y-2 text-sm">
            {[
              ["Lack of Prep", "Entering without clear goals or research."],
              ["Ignoring BATNA", "No fallback position weakens your stance."],
              ["Emotional Reactions", "Losing composure kills credibility."],
              [
                "Cognitive Biases",
                "Anchoring, confirmation bias, overconfidence.",
              ],
              [
                "Poor Communication",
                "Unclear offers lead to misunderstandings.",
              ],
              [
                "Rushing Closure",
                "Premature agreement misses better outcomes.",
              ],
            ].map(([h, p]) => (
              <div key={h} className="flex gap-2 items-start">
                <span className="text-rose-400 mt-0.5">❌</span>
                <div>
                  <span className="font-semibold text-rose-300 text-sm">
                    {h}:{" "}
                  </span>
                  <span className="text-xs text-slate-100/90">{p}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard
        tone="slate"
        title="How I Applied This - Real-World Application"
      >
        <div className="space-y-3">
          <div className="border-l-2 border-teal-400/60 pl-4">
            <p className="font-semibold text-teal-300 text-sm">
              🤝 Negotiation Role-Play Exercise
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              In the group role-play activity, I played the role of a vendor
              negotiating a software contract. I identified my BATNA before
              entering (minimum acceptable price and timeline), focused on
              interests rather than positions, and used active listening to
              uncover the client's core concern (delivery timeline over cost).
              We reached a win-win agreement that satisfied both parties'
              underlying interests.
            </p>
          </div>
          <div className="border-l-2 border-cyan-400/60 pl-4">
            <p className="font-semibold text-cyan-300 text-sm">
              📅 Project Scope Negotiation
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              When a team member wanted to add extra features to our project
              scope three days before the deadline, I applied negotiation
              principles: acknowledged their interest (higher quality),
              presented our constraints (time), and proposed a creative
              alternative - a "Phase 2" document that outlined the features for
              future development. All parties were satisfied with this
              negotiated outcome.
            </p>
          </div>
          <div className="border-l-2 border-amber-400/60 pl-4">
            <p className="font-semibold text-amber-300 text-sm">
              💼 Salary Expectations Discussion
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              During a mock HR session, I practised communicating salary
              expectations. Using the BATNA framework, I knew my walk-away
              threshold, researched the market rate for IT roles in Sri Lanka,
              and communicated confidently: "Based on market data and my skill
              set, I am targeting X, though I am open to discussing the full
              compensation package." This prepared me for real negotiations
              ahead.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 08)">
          <p className="text-slate-100/90">
            Negotiation is a skill I will use throughout my IT career - whether
            negotiating project scope, salary, client requirements, or team
            responsibilities. The key lesson:{" "}
            <strong>
              know your BATNA, focus on interests, and always aim for mutual
              benefit
            </strong>
            . Negotiation is not confrontation - it is collaboration toward a
            shared solution.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
