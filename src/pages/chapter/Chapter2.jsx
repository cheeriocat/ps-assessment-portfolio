// src/pages/chapter/Chapter2.jsx — EMOTIONAL INTELLIGENCE
import React from "react";
import c3 from "../../assets/c3.jpg";

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

export default function Chapter2Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 02
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Emotional Intelligence
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          EI is not a fixed trait - it can be developed. By practising
          self-awareness and empathy, we become more effective in teams and more
          thoughtful in professional interactions.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Self-awareness",
            "Self-regulation",
            "Motivation",
            "Empathy",
            "Social skills",
            "IQ vs EQ",
            "Goleman",
            "Mindfulness",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="mb-4 rounded-2xl border border-slate-700/60 bg-slate-900/50 px-5 py-4 italic text-slate-300 text-sm">
        "Anyone can become angry - that is easy. But to be angry with the right
        person, to the right degree, at the right time, for the right purpose -
        that is not easy."
        <span className="block mt-1 not-italic text-slate-400 text-xs">
          - Aristotle
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What Is Emotional Intelligence?">
          <p className="mb-3">
            Emotional Intelligence (EI) is the{" "}
            <strong>ability to monitor, understand, and manage</strong> one's
            own emotions and relationships with others. EI enables professionals
            to build stronger relationships, succeed at work, and advance their
            careers.
          </p>
          <div className="space-y-2 text-sm">
            <div className="rounded-xl border border-indigo-500/30 bg-indigo-900/20 px-3 py-2">
              <strong className="text-indigo-300">IQ</strong> - Intelligence
              Quotient: cognitive abilities, learning, reasoning, and
              problem-solving.
            </div>
            <div className="rounded-xl border border-violet-500/30 bg-violet-900/20 px-3 py-2">
              <strong className="text-violet-300">EQ</strong> - Emotional
              Quotient: understanding, using, and managing emotions to achieve
              goals.
            </div>
            <p className="text-xs italic text-slate-400 mt-2">
              IQ and EI coexist - most influential when they build on each
              other.
            </p>
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="Goleman's 5 Domains of EI">
          <div className="space-y-2 text-sm">
            {[
              [
                "1",
                "Self-Awareness",
                "Knowing what you feel when you're feeling it. Identifying strengths, limitations, and the link between emotions and behaviour.",
              ],
              [
                "2",
                "Self-Regulation",
                "Expressing emotions at the right time, place, and way. Controlling behaviour in pursuit of long-term goals.",
              ],
              [
                "3",
                "Motivation",
                "Delaying gratification to pursue goals. Intrinsically motivated, sets goals, and looks for ways to do things better.",
              ],
              [
                "4",
                "Empathy",
                "Sensing what others feel, seeing other perspectives. Listening carefully and responding accordingly.",
              ],
              [
                "5",
                "Social Skills",
                "Influence, communication, conflict management, building bonds, and collaboration toward shared goals.",
              ],
            ].map(([n, d, p]) => (
              <div key={n} className="flex gap-2 items-start">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold flex-shrink-0">
                  {n}
                </span>
                <div>
                  <span className="font-semibold text-emerald-200">{d}: </span>
                  <span>{p}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard tone="slate" title="Domain 5: Social Skills - In Detail">
        <div className="grid md:grid-cols-[1fr,1fr] gap-4 items-start">
          <div>
            <p className="mb-3 text-sm">
              Social skills are our ability to interact with others comfortably
              and cooperate effectively during those interactions.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["Influence", "Wielding effective persuasion tactics"],
                ["Communication", "Sending clear, concise messages"],
                ["Change Leadership", "Initiating or managing change"],
                [
                  "Conflict Management",
                  "Understanding and resolving disagreements",
                ],
                ["Building Bonds", "Nurturing instrumental relationships"],
                ["Collaboration", "Working with others toward shared goals"],
              ].map(([h, p]) => (
                <div
                  key={h}
                  className="rounded-xl border border-slate-700/60 bg-slate-900/50 p-2"
                >
                  <p className="font-semibold text-cyan-300 text-xs">{h}</p>
                  <p className="text-xs text-slate-100/80 mt-0.5">{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={c3}
              alt="Emotional intelligence session."
              className="w-40 sm:w-48 md:w-56 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      <div className="mt-6 mb-6">
        <SectionCard tone="violet" title="Self-Regulation Strategies">
          <div className="grid md:grid-cols-2 gap-3">
            {[
              [
                "M",
                "Mindfulness",
                "Paying attention on purpose, in the present moment, non-judgementally. Practices: mindful breathing and gratitude.",
                "violet",
              ],
              [
                "CR",
                "Cognitive Re-Appraisal",
                "Choosing to change thought patterns by reinterpreting a situation to change your emotional response.",
                "cyan",
              ],
              [
                "A",
                "Acceptance",
                "Acknowledging situations beyond our control. A powerful way to manage emotions without denial.",
                "emerald",
              ],
              [
                "PS",
                "Problem Solving",
                "Calmly looking at options during a challenge and being creative with solutions.",
                "amber",
              ],
            ].map(([code, name, desc, color]) => (
              <div
                key={code}
                className={`rounded-xl border border-${color}-500/30 bg-${color}-900/20 px-3 py-2`}
              >
                <div className="flex gap-2 items-center mb-1">
                  <span className={`font-bold text-${color}-300 text-sm`}>
                    {code}
                  </span>
                  <span className={`font-semibold text-${color}-200 text-sm`}>
                    {name}
                  </span>
                </div>
                <p className="text-xs text-slate-100/90">{desc}</p>
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
          <div className="border-l-2 border-violet-400/60 pl-4">
            <p className="font-semibold text-violet-300 text-sm">
              😤 Managing Frustration in Group Work
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              During a group project conflict, a teammate repeatedly missed
              deadlines. Rather than reacting with frustration, I applied
              self-regulation - I requested a calm one-on-one conversation,
              asked about obstacles they were facing, and discovered they had
              personal challenges at home. By showing empathy, we restructured
              tasks collaboratively and delivered on time.
            </p>
          </div>
          <div className="border-l-2 border-cyan-400/60 pl-4">
            <p className="font-semibold text-cyan-300 text-sm">
              🎯 Motivation Through Setbacks
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              When I received a lower-than-expected grade on an assignment, I
              applied the EI principle of intrinsic motivation. Instead of
              blaming the outcome, I reviewed feedback, identified gaps, and set
              specific improvement goals. This growth mindset approach turned a
              setback into a stronger submission next time.
            </p>
          </div>
          <div className="border-l-2 border-amber-400/60 pl-4">
            <p className="font-semibold text-amber-300 text-sm">
              👂 Active Empathy in Peer Support
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              A classmate was visibly stressed before a presentation. I applied
              empathy by listening without offering immediate solutions,
              acknowledging their feelings first. This de-escalated their
              anxiety and helped them refocus - reinforcing Goleman's principle
              that social skills and empathy are as valuable as technical
              expertise.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 02)">
          <p className="text-slate-100/90">
            This session revealed that EI is not a fixed trait - it can be
            developed. By practising self-awareness and empathy, I have become
            more effective in team projects and more thoughtful in professional
            interactions. EI is not a personality trait - it is a practised
            skill. Every interaction is an opportunity to strengthen my
            emotional intelligence.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
