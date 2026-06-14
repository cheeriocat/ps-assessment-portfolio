// src/pages/chapter/Chapter1.jsx — EMPLOYABILITY SKILLS
import React from "react";
import c1 from "../../assets/c1.jpg";

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

export default function Chapter1Section() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-slate-100">
      <header className="mb-6 md:mb-8">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Chapter 01
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-50">
          Employability Skills
        </h1>
        <p className="mt-2 text-slate-300 max-w-2xl">
          Understanding how professional skills, values, beliefs and attitudes
          shape our character and behaviour in university, work and everyday
          life.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Soft skills",
            "Transferable skills",
            "Communication",
            "Teamwork",
            "Problem-solving",
            "Adaptability",
            "Time management",
            "Leadership",
            "Values",
            "Beliefs",
            "Attitudes",
            "Johari Window",
          ].map((c) => (
            <Chip key={c} label={c} />
          ))}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <SectionCard tone="cyan" title="What Are Employability Skills?">
          <p>
            Employability skills, also known as <strong>soft skills</strong> or{" "}
            <strong>transferable skills</strong>, are the essential
            non-technical abilities that employers seek across all industries.
            They complement technical expertise and make you a well-rounded
            professional.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Communication</li>
            <li>Teamwork &amp; collaboration</li>
            <li>Problem-solving and critical thinking</li>
            <li>Adaptability &amp; flexibility</li>
            <li>Time management</li>
            <li>Leadership</li>
          </ul>
        </SectionCard>
        <SectionCard tone="emerald" title="Three Key Skill Categories">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Technical Skills:</strong> Specific expertise required for
              a job or industry - coding languages, lab techniques, and
              specialised tools.
            </li>
            <li>
              <strong>Soft Skills:</strong> Interpersonal skills that enhance
              how we communicate, collaborate, and relate to others.
            </li>
            <li>
              <strong>Transferable Skills:</strong> Versatile abilities
              applicable across roles and industries - problem-solving,
              organisation, and adaptability.
            </li>
          </ul>
        </SectionCard>
      </div>

      <SectionCard
        tone="slate"
        title="In-Class Activity - Connecting Skills to Real Experience"
      >
        <div className="grid md:grid-cols-[1.4fr,1fr] gap-4 items-center">
          <div className="space-y-2">
            <p>
              During our first session we shared examples from group projects,
              volunteering, and part-time jobs and connected them to
              professional skills like teamwork, time management, and
              leadership. This revealed that most of us already use these skills
              daily - we just hadn't labelled them professionally.
            </p>
            <p>
              Students discussing professional competencies in the classroom.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={c1}
              alt="Students discussing professional skills in class."
              className="w-40 sm:w-52 md:w-60 lg:w-64 h-auto rounded-2xl border border-slate-600/70 bg-slate-900/60 shadow-lg"
            />
          </div>
        </div>
      </SectionCard>

      <div className="mt-6 space-y-4 mb-6">
        <SectionCard title="Values, Beliefs, Attitudes &amp; Character">
          <p className="mb-3">
            These four elements together drive why we behave the way we do - at
            university, in the workplace, and in everyday life.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-1 text-emerald-100">Values</h4>
              <p className="mb-1 text-slate-100/90">
                Deep convictions that guide our decisions - honesty, integrity,
                respect, accountability, and courage.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-cyan-100">Beliefs</h4>
              <p className="mb-1 text-slate-100/90">
                How we see ourselves and the world - growth mindset,
                self-efficacy, optimism, and locus of control.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-amber-100">Attitudes</h4>
              <p className="mb-1 text-slate-100/90">
                Positive or negative stances that colour our responses -
                open-mindedness, confidence, tolerance, and empathy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1 text-indigo-100">Character</h4>
              <p className="mb-1 text-slate-100/90">
                The consistent pattern of behaviour over time - trustworthiness,
                fairness, responsibility, and care for others.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          tone="violet"
          title="The Johari Window - Self-Awareness Tool (1955)"
        >
          <p className="mb-3">
            The Johari Window helps us understand how much we share about
            ourselves and how much remains undiscovered.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-100/90">
            <li>
              <strong>Open:</strong> What both we and others know about us.
            </li>
            <li>
              <strong>Blind:</strong> Things others see in us that we haven't
              recognised ourselves.
            </li>
            <li>
              <strong>Hidden:</strong> Things we know about ourselves but choose
              not to share.
            </li>
            <li>
              <strong>Unknown:</strong> Qualities undiscovered by anyone - often
              revealed through new experiences and challenges.
            </li>
          </ul>
          <p className="mt-2">
            The goal is to progressively expand the Open area through honest
            sharing and genuine openness to feedback from others.
          </p>
        </SectionCard>

        <SectionCard tone="slate" title="Skill Development - Progress Bars">
          <div className="space-y-3">
            {[
              ["Communication", 80],
              ["Teamwork", 75],
              ["Problem-Solving", 76],
              ["Adaptability", 90],
              ["Time Management", 75],
            ].map(([skill, pct]) => (
              <div key={skill}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span>{skill}</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                    style={{ width: `${pct}%` }}
                  />
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
          <div className="border-l-2 border-emerald-400/60 pl-4">
            <p className="font-semibold text-emerald-300 text-sm">
              💼 Updating LinkedIn and GitHub for Internship Applications
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              After the Employability Skills session, I revisited my LinkedIn
              profile and GitHub account with fresh eyes. I realised my project
              descriptions focused only on technical stacks and completely
              ignored the soft skills involved. I rewrote my LinkedIn summary to
              reflect both dimensions and updated my GitHub README files to
              include context about collaboration and my decision-making process
              in each project.
            </p>
          </div>
          <div className="border-l-2 border-cyan-400/60 pl-4">
            <p className="font-semibold text-cyan-300 text-sm">
              🔭 Johari Window Self-Discovery
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              The Johari Window activity was eye-opening. My peers identified
              "confidence in presentations" as part of my open area, while I
              discovered a blind spot: I tend to over-explain when nervous. This
              feedback shaped how I now approach presentations - I pause more,
              breathe, and trust that the audience understands.
            </p>
          </div>
          <div className="border-l-2 border-amber-400/60 pl-4">
            <p className="font-semibold text-amber-300 text-sm">
              📋 Group Project at SCU
            </p>
            <p className="text-sm text-slate-100/90 mt-1">
              In a group project, I applied teamwork and adaptability skills.
              When a team member dropped out mid-project, I adapted my role,
              covered additional responsibilities, and kept the team motivated -
              directly applying the adaptability and leadership concepts from
              this module.
            </p>
          </div>
        </div>
      </SectionCard>

      <div className="mt-6">
        <SectionCard tone="emerald" title="My Reflection (Chapter 01)">
          <p className="text-slate-100/90">
            Employability skills are not extras - they are the architecture of a
            professional. I now actively audit my soft skills the same way I
            track my technical progress. The Johari Window taught me that
            self-awareness is an ongoing journey, and that blind spots are
            opportunities for growth, not weaknesses to hide.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}
