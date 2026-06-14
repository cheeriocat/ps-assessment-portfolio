// src/pages/chapter/Chapter6.jsx — DINING ETIQUETTES
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

export default function Chapter6Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 06
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Dining Etiquettes
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Etiquette is not about being perfect - it's about making others
          comfortable. Mastering dining behaviour demonstrates cultural
          intelligence, self-awareness, and respect.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "BMW Rule",
            "Table setting",
            "Cutlery styles",
            "10 golden rules",
            "Formal dining",
            "Global customs",
            "Cultural awareness",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="mb-4 rounded-2xl border border-teal-500/30 bg-teal-900/20 px-5 py-3 text-center text-sm font-semibold text-teal-300">
        🍽️ ETIQUETTE IS NOT ABOUT BEING PERFECT - IT'S ABOUT MAKING OTHERS
        COMFORTABLE 🍽️
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="Why Dining Etiquette Matters">
          <div className="space-y-2">
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-900/20 px-4 py-2 text-sm">
              ★ First impressions are formed in 7 seconds - confident dining
              sets you apart in business meals and social settings.
            </div>
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-900/20 px-4 py-2 text-sm">
              ★ Business meals are increasingly common. Mastering etiquette
              prepares you for internships, client meetings, and career events.
            </div>
            <div className="rounded-xl border border-amber-500/30 bg-amber-900/20 px-4 py-2 text-sm">
              ★ Cultural awareness in dining shows respect for global colleagues
              and clients.
            </div>
          </div>
        </SectionCard>

        <SectionCard tone="emerald" title="Table Setting — The BMW Rule">
          <div className="text-center mb-3">
            <div className="text-3xl mb-1">🍞 · 🍽️ · 💧</div>
            <p className="font-bold text-emerald-300">
              Bread (Left) · Meal (Centre) · Water (Right)
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-900/20 px-4 py-2 text-sm mb-3">
            <strong>Outside-In Rule:</strong> Use utensils from the outermost
            inward with each course of the meal.
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm mt-2">
            <div className="rounded-xl border border-amber-500/30 bg-amber-900/20 p-3">
              <p className="font-semibold text-amber-300">🇺🇸 American Style</p>
              <p className="text-xs mt-1">
                Cut with fork in left, knife in right. After cutting, switch
                fork to right hand to eat.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-500/30 bg-indigo-900/20 p-3">
              <p className="font-semibold text-indigo-300">
                🇬🇧 Continental Style
              </p>
              <p className="text-xs mt-1">
                Fork stays in left hand throughout. No switching - cut and eat
                without changing hands.
              </p>
            </div>
          </div>
        </SectionCard>
      </div>

      <SectionCard tone="slate" title="The 10 Golden Rules of Dining">
        <div className="grid md:grid-cols-2 gap-2">
          {[
            ["1", "Phone Away", "No phone at the table - no exceptions."],
            ["2", "BMW Rule", "Bread left, Meal centre, Water right."],
            ["3", "Napkin on Lap", "Immediately upon sitting, fold if large."],
            [
              "4",
              "Wait for Host",
              "Don't begin eating until the host signals.",
            ],
            ["5", "Small Bites", "Never overfill your mouth."],
            ["6", "Elbows Off", "Keep elbows off table while eating."],
            ["7", "Pace Yourself", "Match the eating pace of your host."],
            ["8", "Chew Quietly", "Mouth closed, no talking while chewing."],
            [
              "9",
              "Great Topics",
              "Travel, hobbies, achievements - avoid controversy.",
            ],
            ["10", "Thank the Host", "Always express appreciation at the end."],
          ].map(([n, h, p]) => (
            <div
              key={n}
              className="flex gap-2 items-start rounded-xl border border-slate-700/60 bg-slate-900/50 px-3 py-2"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold flex-shrink-0">
                {n}
              </span>
              <div>
                <span className="font-semibold text-teal-200 text-sm">
                  {h}:{" "}
                </span>
                <span className="text-xs text-slate-100/80">{p}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="mt-6 grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="teal" title="Informal vs. Formal Dining">
          <div className="space-y-3 text-sm">
            <div className="rounded-xl border border-teal-500/30 bg-teal-900/20 p-3">
              <p className="font-semibold text-teal-300">I - Informal Dining</p>
              <p className="mt-1">
                Restaurants, friends' homes, casual meals. Relaxed doesn't mean
                rules-free - wait to be seated, use indoor voice, clean up after
                yourself.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-500/30 bg-indigo-900/20 p-3">
              <p className="font-semibold text-indigo-300">F - Formal Dining</p>
              <p className="mt-1">
                Fine dining, banquets, special occasions. Arrive 5–10 min early,
                dress appropriately, follow multi-course protocols, wait for
                host to begin.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard tone="amber" title="Global Dining Differences">
          <div className="space-y-2 text-sm">
            {[
              [
                "🇯🇵 Japan",
                "Slurping noodles is a compliment. Never stick chopsticks upright in rice.",
              ],
              [
                "🇨🇳 China",
                "Leaving food shows the host gave enough. Pour tea for elders first.",
              ],
              [
                "🇮🇳 India",
                "Always wash hands before eating. Right hand used for eating in many regions.",
              ],
            ].map(([c, d]) => (
              <div
                key={c}
                className="rounded-xl border border-amber-500/30 bg-amber-900/20 px-3 py-2"
              >
                <p className="font-semibold text-amber-300">{c}</p>
                <p className="text-xs mt-1">{d}</p>
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
              🎊 Family Formal Occasion
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              At a family wedding I attended, I consciously applied the dining
              etiquette principles from this module. I waited for elders to be
              seated before sitting, kept my phone off the table throughout the
              meal, and used the BMW rule to correctly identify my bread, meal,
              and water. This experience showed me that formal etiquette is
              equally relevant in important personal occasions.
            </p>
          </div>
          <div className="border-l-2 border-cyan-400/60 pl-4">
            <p className="font-semibold text-cyan-300 text-sm">
              🍜 Restaurant Outing with Classmates
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              During a group outing with classmates after a study session, I
              paid attention to how I conducted myself at the table. I waited
              for everyone to be served before starting, and kept the
              conversation respectful and inclusive. Small habits like not
              speaking with a full mouth and keeping elbows off the table made
              the overall experience more pleasant for everyone.
            </p>
          </div>
          <div className="border-l-2 border-amber-400/60 pl-4">
            <p className="font-semibold text-amber-300 text-sm">
              📺 Observing Professional Dining on YouTube and LinkedIn
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              After completing this module, I sought out videos on professional
              dining scenarios on YouTube and LinkedIn Learning. Watching how
              professionals handled formal table settings and multi-course meals
              helped me visualise the concepts in action. I identified clear
              improvements in my own approach, particularly around cutlery usage
              and how to gracefully decline food items.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 06)">
          <p className="text-slate-100/90">
            Dining etiquette is a professional skill that extends far beyond the
            table. Mastering it demonstrates cultural intelligence,
            self-awareness, and respect - all qualities valued by employers and
            clients. Dining etiquette is not only for corporate settings but
            equally relevant in every important personal occasion.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
