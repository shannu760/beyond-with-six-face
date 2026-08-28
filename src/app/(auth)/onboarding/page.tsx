"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Target,
  GraduationCap
} from "lucide-react";
import { generatePathwayDiagnostic } from "@/lib/ai/student-engine";
import { DiagnosticOutput } from "@/lib/ai/student-ai-types";

export default function OnboardingDiagnosticPage() {
  const router = useRouter();
  const [step, setStep] = useState<"form" | "result">("form");
  const [classLevel, setClassLevel] = useState("Class 12");
  const [targetExam, setTargetExam] = useState("JEE Main");
  const [dailyHours, setDailyHours] = useState(4);
  const [favSubject, setFavSubject] = useState("Physics");
  const [longTermGoal, setLongTermGoal] = useState("IIT / Top NIT Admission");

  const [loading, setLoading] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await generatePathwayDiagnostic({
        classLevel,
        targetExam,
        favoriteSubjects: [favSubject, "Mathematics"],
        perceivedStrengths: ["Problem Solving", "Logic"],
        currentChallenges: ["Time Management", "Organic Chemistry"],
        dailyStudyHours: dailyHours,
        longTermGoal
      });

      setDiagnosticResult(result);
      setStep("result");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#252B18] text-[#F3EBDD] flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-[#C8A95B]/15 via-[#3D4425]/30 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-2xl w-full bg-[#3D4425]/60 border border-[#C8A95B]/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md relative z-10 space-y-6">
        <div className="flex items-center justify-between border-b border-[#69704A]/30 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#252B18] border border-[#C8A95B] flex items-center justify-center font-accent font-bold text-[#C8A95B]">
              B
            </div>
            <span className="font-display font-extrabold text-lg text-[#F3EBDD] tracking-wider">
              BEYOND Pathway Setup
            </span>
          </div>

          <span className="text-[10px] uppercase font-mono font-bold text-[#C8A95B] bg-[#C8A95B]/15 px-2.5 py-1 rounded-full border border-[#C8A95B]/30">
            Step {step === "form" ? "1 of 2" : "2 of 2"}
          </span>
        </div>

        {step === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <h1 className="font-accent font-bold text-2xl sm:text-3xl text-[#F3EBDD]">
                Where are you heading next?
              </h1>
              <p className="text-xs text-[#D9CAA8]/80 mt-1">
                Tell BEYOND your current target to generate your 30-day personalized growth roadmap.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#C8A95B] uppercase tracking-wider mb-1.5">
                  Current Class / Stage
                </label>
                <select
                  value={classLevel}
                  onChange={(e) => setClassLevel(e.target.value)}
                  className="w-full bg-[#252B18] border border-[#69704A]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#F3EBDD] font-medium"
                >
                  <option>Class 11</option>
                  <option>Class 12</option>
                  <option>Gap Year / Dropper</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#C8A95B] uppercase tracking-wider mb-1.5">
                  Primary Target Exam
                </label>
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full bg-[#252B18] border border-[#69704A]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#F3EBDD] font-medium"
                >
                  <option>JEE Main</option>
                  <option>JEE Advanced</option>
                  <option>NEET UG</option>
                  <option>CUET / General Degree</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#C8A95B] uppercase tracking-wider mb-1.5">
                  Favorite Subject
                </label>
                <select
                  value={favSubject}
                  onChange={(e) => setFavSubject(e.target.value)}
                  className="w-full bg-[#252B18] border border-[#69704A]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#F3EBDD] font-medium"
                >
                  <option>Physics</option>
                  <option>Mathematics</option>
                  <option>Chemistry</option>
                  <option>Biology</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#C8A95B] uppercase tracking-wider mb-1.5">
                  Daily Study Hours Available
                </label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  value={dailyHours}
                  onChange={(e) => setDailyHours(Number(e.target.value))}
                  className="w-full bg-[#252B18] border border-[#69704A]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#F3EBDD] font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#C8A95B] uppercase tracking-wider mb-1.5">
                Long-Term Goal / Target Institution
              </label>
              <input
                type="text"
                value={longTermGoal}
                onChange={(e) => setLongTermGoal(e.target.value)}
                placeholder="e.g. Top IIT Computer Science / AI Research"
                className="w-full bg-[#252B18] border border-[#69704A]/40 rounded-xl px-3.5 py-2.5 text-xs text-[#F3EBDD] placeholder-[#D9CAA8]/50"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-[#C8A95B] text-[#252B18] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#d4b566] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>{loading ? "Diagnosing Pathway Alignment..." : "Generate AI Pathway Diagnostic"}</span>
            </button>
          </form>
        ) : (
          /* Result Screen */
          diagnosticResult && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center space-y-2 border-b border-[#69704A]/30 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A95B] font-bold">
                  Pathway Assessment Result
                </span>
                <h2 className="font-accent font-bold text-3xl text-[#F3EBDD]">
                  {diagnosticResult.alignmentStatus}
                </h2>
                <div className="text-3xl font-display font-bold text-[#C8A95B]">
                  {diagnosticResult.alignmentScore}% Score Alignment
                </div>
              </div>

              <p className="text-xs text-[#D9CAA8] leading-relaxed bg-[#252B18]/80 p-4 rounded-2xl border border-[#69704A]/30">
                {diagnosticResult.coreAnalysis}
              </p>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-sm text-[#F3EBDD]">
                  Next 30-Day Action Roadmap:
                </h3>
                <div className="space-y-2">
                  {diagnosticResult.next30DaysRoadmap.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-3.5 rounded-xl bg-[#252B18]/60 border border-[#69704A]/30 space-y-1 text-xs"
                    >
                      <div className="flex items-center justify-between font-bold text-[#C8A95B]">
                        <span>Step {step.stepNumber}: {step.title}</span>
                        <span className="text-[10px] font-mono text-[#D9CAA8]">{step.duration}</span>
                      </div>
                      <p className="text-[#D9CAA8]/80">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => router.push("/dashboard")}
                className="w-full py-3.5 rounded-xl bg-[#C8A95B] text-[#252B18] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#d4b566] transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Enter Your BEYOND Growth Hub</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
