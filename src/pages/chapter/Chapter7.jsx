// src/pages/chapter/Chapter7.jsx — GROOMING ETIQUETTES (no photo gallery)
import React from "react";

function Chip({ label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium border-emerald-500/40 bg-emerald-500/10 text-emerald-100">
      <span className="h-2 w-2 rounded-full bg-emerald-400" />
      {label}
    </span>
  );
}
function SectionCard({ title, tone = "emerald", children }) {
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
    <div className={`rounded-2xl border ${t.wrap} p-5 md:p-6 backdrop-blur-xl`}>
      <h3 className={`text-lg md:text-xl font-bold mb-3 ${t.h}`}>{title}</h3>
      <div className="text-slate-100/90 leading-7 text-sm md:text-base">
        {children}
      </div>
    </div>
  );
}

export default function Chapter7Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 07
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Grooming Etiquettes
        </h1>
        <p className="mt-2 text-slate-300">
          Grooming and etiquette are not about perfection - they are about
          showing respect: respect for yourself, for others, and for the
          opportunity in front of you.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Personal hygiene",
            "Dress code",
            "Personal branding",
            "Social etiquette",
            "Greetings",
            "Digital presence",
            "5 outfit questions",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Personal Hygiene Checklist">
          <div className="space-y-1 text-sm">
            {[
              "🧼 Personal hygiene & regular bathing",
              "✂️ Hairstyle - clean, controlled, context-appropriate",
              "💅 Nails - clean and trimmed",
              "🦷 Oral care - brush twice daily, floss regularly",
              "👔 Clothing - clean, ironed, condition-checked",
              "👟 Shoes - polished and appropriate",
              "🌸 Fragrance - subtle, not overpowering",
            ].map((i) => (
              <div key={i}>{i}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="What Is Etiquette?">
          <p className="mb-2 text-sm">
            Etiquette means <strong>socially appropriate behaviour</strong>. It
            includes how we:
          </p>
          <div className="space-y-1 text-sm">
            {[
              "🤝 Greet and introduce ourselves",
              "🗣️ Speak and listen actively",
              "🚪 Enter a room and position ourselves",
              "📱 Use phones responsibly",
              "👥 Behave in group settings",
              "🌍 Respect personal and cultural boundaries",
            ].map((i) => (
              <div key={i}>{i}</div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard
        tone="violet"
        title="Personal Branding - Your Professional Identity"
      >
        <p className="mb-3 text-sm">
          Personal branding is the{" "}
          <strong>repeated impression you create</strong> through your
          behaviour, appearance, and communication over time.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            [
              "Appearance",
              "Clean, neat, appropriate for the context.",
              "violet",
            ],
            [
              "Communication",
              "Clear, respectful, and confident delivery.",
              "cyan",
            ],
            ["Behaviour", "Punctual, prepared, and dependable.", "emerald"],
            [
              "Digital Presence",
              "Professional email and a decent profile photo.",
              "amber",
            ],
            [
              "Consistency",
              "Same behaviour with professors, recruiters, and juniors.",
              "rose",
            ],
            ["Reliability", "Following through on every commitment.", "teal"],
          ].map(([h, d, c]) => (
            <div
              key={h}
              className="rounded-xl border border-violet-500/30 bg-violet-900/20 p-3"
            >
              <p className="font-semibold text-violet-300 text-sm">{h}</p>
              <p className="text-xs text-slate-100/80 mt-1">{d}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="mt-6 mb-6">
        <SectionCard tone="slate" title="5 Questions Before Choosing an Outfit">
          <div className="space-y-2">
            {[
              [
                "1",
                "Is it appropriate for the occasion?",
                "Campus interview vs. casual class vs. formal event all require different standards.",
              ],
              [
                "2",
                "Is it clean and ironed?",
                "Select outfit the night before; iron, check for stains, missing buttons, loose threads.",
              ],
              [
                "3",
                "Does it fit properly?",
                "Professional dressing is about fit, not brands. Ill-fitting clothes undermine your image.",
              ],
              [
                "4",
                "Are the shoes clean?",
                "Shoes are noticed. Polish them; ensure they match the occasion and outfit.",
              ],
              [
                "5",
                "Am I comfortable and confident?",
                "Confidence in appearance translates to confidence in presence.",
              ],
            ].map(([n, h, p]) => (
              <div
                key={n}
                className="flex gap-3 items-start rounded-xl border border-slate-700/60 bg-slate-900/50 px-4 py-3"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/20 text-rose-300 text-sm font-bold flex-shrink-0">
                  {n}
                </span>
                <div>
                  <p className="font-semibold text-rose-200 text-sm">{h}</p>
                  <p className="text-xs text-slate-100/80 mt-1">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard tone="amber" title="Social Etiquette Essentials">
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl border border-rose-500/30 bg-rose-900/20 p-3">
            <p className="font-semibold text-rose-300">Greetings</p>
            <p className="text-xs mt-1">
              Stand upright, pleasant facial expression, firm handshake only
              when culturally appropriate, use the person's name.
            </p>
          </div>
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-900/20 p-3">
            <p className="font-semibold text-cyan-300">Listening</p>
            <p className="text-xs mt-1">
              Not interrupting, nodding occasionally, taking notes when
              appropriate, maintaining eye contact without staring.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-900/20 p-3">
            <p className="font-semibold text-emerald-300">Boundaries</p>
            <p className="text-xs mt-1">
              Respect physical space, emotional privacy, and digital boundaries.
              Never comment on body weight, skin, or personal finances.
            </p>
          </div>
          <div className="rounded-xl border border-violet-500/30 bg-violet-900/20 p-3">
            <p className="font-semibold text-violet-300">Diversity</p>
            <p className="text-xs mt-1">
              Professional environments include people from different regions,
              religions, genders, and backgrounds - always be inclusive.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6">
        <SectionCard
          tone="slate"
          title="How I Applied This - Real-World Application"
        >
          <div className="space-y-3">
            <div className="border-l-2 border-rose-400/60 pl-4">
              <p className="font-semibold text-rose-300 text-sm">
                👔 Campus Placement Interview Prep
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                Before a campus interview, I applied the "5 questions before
                choosing an outfit" framework. I selected the night before,
                ironed my clothes, cleaned my shoes, and chose neutral colours
                (navy trousers, white shirt) aligned with the module's guidance.
                The interviewer's first comment was about how professionally
                presented I was - validating that appearance supports first
                impressions.
              </p>
            </div>
            <div className="border-l-2 border-cyan-400/60 pl-4">
              <p className="font-semibold text-cyan-300 text-sm">
                🌐 Building My Digital Brand
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                Following the personal branding lecture, I audited my digital
                presence. I updated my LinkedIn profile photo to a professional
                headshot, changed my email display name to my full name, and
                reviewed all my social media posts for appropriateness. My
                profile views increased noticeably after these changes.
              </p>
            </div>
            <div className="border-l-2 border-amber-400/60 pl-4">
              <p className="font-semibold text-amber-300 text-sm">
                🎤 Presentations and Viva Voce
              </p>
              <p className="text-sm text-slate-100/90 mt-1">
                During my project presentation, I applied the grooming checklist
                - neat hair, clean hands, appropriate clothing and focused on
                listening etiquette during the Q&amp;A: not interrupting the
                panel, nodding to show engagement, and taking brief notes. My
                assessor commented positively on my professional conduct
                throughout the session.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 07)">
          <p>
            Grooming is respect made visible. I now have a "before you leave the
            room" checklist that I run through before every significant
            professional interaction. Grooming and etiquette are not about
            perfection - they are about showing respect: for yourself, for
            others, and for the opportunity in front of you.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
