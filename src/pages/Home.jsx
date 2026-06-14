// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Starfield from "../components/Starfield"; //  added

const chips = [
  "Employability Skills",
  "Emotional Intelligence",
  "Portfolio Writing",
  "CV Writing",
  "Interview Skills",
  "Dining Etiquettes",
  "Grooming Etiquettes",
  "Negotiation Skills",
  "Code of Ethics in IT",
];

const chapterPreviews = [
  {
    id: 1,
    title: "Chapter 01 – Employability Skills",
    tag: "Values, beliefs & transferable skills",
    text: "Understanding how employability skills - soft skills and transferable skills - shape our character and professional behaviour in university, work, and everyday life.",
  },
  {
    id: 2,
    title: "Chapter 02 – Emotional Intelligence",
    tag: "Goleman's 5 domains of EI",
    text: "Exploring self-awareness, self-regulation, motivation, empathy, and social skills, and how EI supports teamwork, leadership, and conflict handling.",
  },
  {
    id: 3,
    title: "Chapter 03 – Portfolio Writing",
    tag: "Types, platforms & best practices",
    text: "Building a curated collection of work and achievements. Covering the 4 types of portfolios, how to build an assessment portfolio, and which online platforms to use.",
  },
  {
    id: 4,
    title: "Chapter 04 – CV Writing",
    tag: "Structure, tailoring & action verbs",
    text: "Crafting a CV that markets your skills effectively. Covers essential components, formatting tips, tailoring strategies, and common mistakes to avoid.",
  },
  {
    id: 5,
    title: "Chapter 05 – Interview Skills",
    tag: "STAR method & 7%-38%-55%",
    text: "Mastering the 4-stage interview structure, the 6 C's of communication, and the STAR method. Understanding body language and what separates successful from unsuccessful candidates.",
  },
  {
    id: 6,
    title: "Chapter 06 – Dining Etiquettes",
    tag: "BMW Rule & 10 golden rules",
    text: "Learning how to behave professionally at formal and informal meals: the BMW rule, cutlery styles, the 10 golden rules of dining, and global cultural differences.",
  },
  {
    id: 7,
    title: "Chapter 07 – Grooming Etiquettes",
    tag: "Personal branding & social etiquette",
    text: "Building a professional image through personal hygiene, dress code, personal branding, and social etiquette including greetings, listening, and digital presence.",
  },
  {
    id: 8,
    title: "Chapter 08 – Negotiation Skills",
    tag: "BATNA, win-win & 7 principles",
    text: "Mastering negotiation as collaboration - not confrontation. Covers BATNA, the 7 key principles, communication strategies, and common negotiation mistakes.",
  },
  {
    id: 9,
    title: "Chapter 09 – Code of Ethics in IT",
    tag: "CSSL, ACM, IEEE & ethical dilemmas",
    text: "Understanding professional responsibilities, major IT ethics bodies, common ethical dilemmas, and a structured ethical decision-making framework for IT professionals.",
  },
];

export default function Home({ onEnterPortfolio }) {
  const [activePreview, setActivePreview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePreview((prev) => (prev + 1) % chapterPreviews.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const current = chapterPreviews[activePreview];

  return (
    <div
      id="top"
      className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden"
    >
      {/* STARFIELD BACKGROUND */}
      <Starfield />
      <div className="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>

      {/* CONTENT ABOVE STARFIELD */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* TOP BAR */}
        <header className="w-full px-4 md:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-400 to-sky-500 flex items-center justify-center text-xs font-bold text-slate-950 shadow-md shadow-emerald-400/40">
              PS
            </div>
            <div>
              <h1 className="text-sm md:text-base font-semibold tracking-tight">
                Professional Skills
              </h1>
              <p className="text-[10px] md:text-xs text-slate-400">
                Designed by H M K Nimsara
              </p>
            </div>
          </div>

          <button
            onClick={onEnterPortfolio}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-emerald-400/90 text-slate-950 px-4 py-1.5 text-xs font-semibold shadow-lg shadow-emerald-400/40 hover:bg-emerald-300 transition"
          >
            View Portfolio
            <span>↗</span>
          </button>
        </header>

        {/* MAIN HERO SECTION */}
        <main className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-12 pb-10">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300 mb-3">
              Assessment Portfolio
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-50 mb-4">
              My journey through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-300">
                Professional Skills
              </span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
              This portfolio brings together my work, reflections, and
              activities from the Professional Skills module. It covers
              employability skills, CV and interview prep, portfolio building,
              project proposals, and more.
            </p>

            {/* CHIPS */}
            <div className="flex flex-wrap gap-2 mb-6">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] md:text-xs text-emerald-100"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {chip}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={onEnterPortfolio}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-950 px-4 md:px-6 py-2 text-xs md:text-sm font-semibold shadow-lg shadow-emerald-400/40 hover:brightness-110 transition"
              >
                Start reading chapters
                <span>📖</span>
              </button>
            </div>
          </div>

          {/* RIGHT PREVIEW CARD */}
          <div className="w-full max-w-md">
            <div className="rounded-3xl bg-white/5 border border-slate-700/70 shadow-xl shadow-emerald-500/20 backdrop-blur-2xl p-5 md:p-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-3">
                Chapter Preview
              </p>

              <div className="mb-4 rounded-2xl border border-emerald-400/40 bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-sky-500/20 px-4 py-3">
                <p className="text-emerald-200 text-[11px] uppercase tracking-wide mb-1">
                  {current.tag}
                </p>
                <p className="text-sm md:text-base font-semibold text-slate-50">
                  {current.title}
                </p>
              </div>

              <div className="space-y-2 text-sm md:text-[15px] leading-relaxed text-slate-100/90 mb-3">
                <p>{current.text}</p>
              </div>

              {/* STATS */}
              <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Chapter
                  </p>
                  <p className="font-semibold text-slate-100">
                    {current.id.toString().padStart(2, "0")} /{" "}
                    {chapterPreviews.length.toString().padStart(2, "0")}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/60 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-wide text-slate-400">
                    Module
                  </p>
                  <p className="font-semibold text-slate-100">
                    Professional Skills
                  </p>
                </div>
              </div>

              {/* NAV */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  {chapterPreviews.map((ch, index) => (
                    <button
                      key={ch.id}
                      onClick={() => setActivePreview(index)}
                      className={
                        "h-2.5 w-2.5 rounded-full transition-all " +
                        (index === activePreview
                          ? "bg-emerald-400 w-5"
                          : "bg-slate-600 hover:bg-emerald-300/70")
                      }
                    ></button>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setActivePreview(
                        (prev) =>
                          (prev - 1 + chapterPreviews.length) %
                          chapterPreviews.length,
                      )
                    }
                    className="h-7 w-7 rounded-full border border-slate-600 bg-slate-900/70 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-300 transition"
                  >
                    ←
                  </button>

                  <button
                    onClick={() =>
                      setActivePreview(
                        (prev) => (prev + 1) % chapterPreviews.length,
                      )
                    }
                    className="h-7 w-7 rounded-full border border-slate-600 bg-slate-900/70 flex items-center justify-center text-xs hover:border-emerald-400 hover:text-emerald-300 transition"
                  >
                    →
                  </button>
                </div>
              </div>

              <button
                onClick={onEnterPortfolio}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400/90 text-slate-950 py-2.5 text-xs md:text-sm font-semibold hover:bg-emerald-300 transition"
              >
                Open Assessment Portfolio
              </button>
            </div>
          </div>
        </main>

        {/*  FOOTER FIXED TO BOTTOM */}
        <footer className="w-full px-4 md:px-10 py-3 text-[10px] md:text-xs text-slate-500 flex justify-between items-center mt-auto">
          <span>© {new Date().getFullYear()} H M K Nimsara</span>
          <span>StudentID: SA24610312</span>
        </footer>
      </div>
    </div>
  );
}
