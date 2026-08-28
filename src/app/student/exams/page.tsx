"use client";

import React, { useState } from "react";
import {
  Target,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Star
} from "lucide-react";
import { QuizQuestion, QuizOutput } from "@/lib/ai/student-ai-types";

const SAMPLE_QUIZ: QuizOutput = {
  title: "Physics: Electrostatics & Field Lines",
  subject: "Physics",
  topic: "Electrostatics Dipole & Gauss Law",
  timeLimitMinutes: 15,
  questions: [
    {
      id: "q1",
      question: "In uniform circular motion of a particle, what is the direction of centripetal acceleration?",
      options: [
        "Tangential to the circular path",
        "Radially inward towards the center of curvature",
        "Radially outward away from the center",
        "Zero vector"
      ],
      correctOptionIndex: 1,
      explanation: "Centripetal acceleration always points radially inward towards the center of curvature to constantly change the direction of velocity vector.",
      subject: "Physics",
      topic: "Kinematics",
      difficulty: "Easy"
    },
    {
      id: "q2",
      question: "What is the dimensional formula of torque?",
      options: ["[M L T^-2]", "[M L^2 T^-2]", "[M^2 L T^-1]", "[M L^2 T^-1]"],
      correctOptionIndex: 1,
      explanation: "Torque = Force × perpendicular distance = [M L T^-2] × [L] = [M L^2 T^-2], having the same dimension as Work or Energy.",
      subject: "Physics",
      topic: "Units & Dimensions",
      difficulty: "Medium"
    },
    {
      id: "q3",
      question: "A body of mass 2 kg moves along a straight line with velocity v = (3t^2 + 2) m/s. What is the net force acting on the body at t = 2 s?",
      options: ["12 N", "24 N", "14 N", "36 N"],
      correctOptionIndex: 1,
      explanation: "Acceleration a = dv/dt = 6t. At t = 2 s, a = 12 m/s^2. Net force F = m × a = 2 kg × 12 m/s^2 = 24 N.",
      subject: "Physics",
      topic: "Laws of Motion",
      difficulty: "Hard"
    }
  ]
};

export default function ExamsQuizPage() {
  const [activeQuiz, setActiveQuiz] = useState<QuizOutput | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [qId: string]: number }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleStartQuiz = () => {
    setActiveQuiz(SAMPLE_QUIZ);
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const handleSelectOption = (qId: string, optIndex: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optIndex }));
  };

  const calculateScore = () => {
    if (!activeQuiz) return 0;
    let score = 0;
    activeQuiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctOptionIndex) score += 4;
      else if (selectedAnswers[q.id] !== undefined) score -= 1; // Negative marking simulation
    });
    return score;
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#3D4425]/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-[#3D4425]" />
            <h1 className="font-accent font-bold text-2xl text-[#252B18]">
              Exams & Chapter Quizzes
            </h1>
            <span className="text-[10px] uppercase font-mono font-bold bg-[#252B18] text-[#C8A95B] px-2.5 py-0.5 rounded-full border border-[#C8A95B]/40">
              JEE / NEET Bank
            </span>
          </div>
          <p className="text-xs text-[#69704A] mt-1">
            High-yield 15-minute diagnostic quizzes with negative marking & instant error analysis.
          </p>
        </div>
      </div>

      {!activeQuiz ? (
        /* Quiz Selection Center */
        <div className="space-y-6">
          <div className="bg-[#252B18] text-[#F3EBDD] rounded-3xl p-6 sm:p-8 border border-[#C8A95B]/30 shadow-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A95B] font-bold">
                Featured Diagnostic
              </span>
              <span className="text-xs font-mono text-[#D9CAA8]">3 Questions • 15 Mins</span>
            </div>

            <h2 className="font-accent font-bold text-3xl text-[#F3EBDD]">
              Physics: Electrostatics & Kinematics Quick Test
            </h2>

            <p className="text-xs sm:text-sm text-[#D9CAA8]/90 leading-relaxed max-w-2xl">
              Targeted diagnostic for your weak topics in Electrostatics & Newton&apos;s Laws. Completing this quiz updates your live Mastery Matrix and awards <strong className="text-[#C8A95B]">+50 BEYOND Stars ⭐</strong>.
            </p>

            <div className="pt-2">
              <button
                onClick={handleStartQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C8A95B] text-[#252B18] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#d4b566] transition-all shadow-md"
              >
                <span>Start Timed Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#F8F4EC] border border-[#3D4425]/20 rounded-2xl p-5 space-y-3">
              <span className="text-[10px] font-mono uppercase font-bold text-[#3D4425] bg-[#E8DCC3] px-2 py-0.5 rounded">
                Mathematics
              </span>
              <h3 className="font-display font-bold text-base text-[#252B18]">
                Calculus Limits & Continuity Quiz
              </h3>
              <p className="text-xs text-[#69704A]">
                10 Questions • 20 Mins • Standard NTA Pattern
              </p>
              <button
                onClick={handleStartQuiz}
                className="w-full py-2 rounded-xl bg-[#3D4425] text-[#F3EBDD] font-bold text-xs uppercase tracking-wider hover:bg-[#252B18]"
              >
                Launch Quiz
              </button>
            </div>

            <div className="bg-[#F8F4EC] border border-[#3D4425]/20 rounded-2xl p-5 space-y-3">
              <span className="text-[10px] font-mono uppercase font-bold text-[#3D4425] bg-[#E8DCC3] px-2 py-0.5 rounded">
                Chemistry
              </span>
              <h3 className="font-display font-bold text-base text-[#252B18]">
                Organic Reaction Mechanisms Test
              </h3>
              <p className="text-xs text-[#69704A]">
                8 Questions • 15 Mins • High-Yield NCERT
              </p>
              <button
                onClick={handleStartQuiz}
                className="w-full py-2 rounded-xl bg-[#3D4425] text-[#F3EBDD] font-bold text-xs uppercase tracking-wider hover:bg-[#252B18]"
              >
                Launch Quiz
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Active Quiz Screen */
        <div className="space-y-6">
          {/* Quiz Header Bar */}
          <div className="bg-[#252B18] text-[#F3EBDD] p-5 rounded-2xl border border-[#C8A95B]/30 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C8A95B] font-bold">
                {activeQuiz.subject}
              </span>
              <h2 className="font-accent font-bold text-xl text-[#F3EBDD]">{activeQuiz.title}</h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-[#D9CAA8]/70 font-mono">Time Limit</div>
                <div className="text-sm font-mono font-bold text-[#C8A95B]">15:00 Mins</div>
              </div>
              <button
                onClick={() => setActiveQuiz(null)}
                className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[#69704A]/40 text-[#E8DCC3] hover:bg-[#3D4425]"
              >
                Exit
              </button>
            </div>
          </div>

          {/* Question Cards */}
          <div className="space-y-6">
            {activeQuiz.questions.map((q, idx) => {
              const isSelected = selectedAnswers[q.id] !== undefined;
              const isCorrect = selectedAnswers[q.id] === q.correctOptionIndex;

              return (
                <div
                  key={q.id}
                  className="bg-[#F8F4EC] border border-[#3D4425]/20 rounded-2xl p-6 space-y-4 shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-[#69704A]">
                    <span>Question {idx + 1} of {activeQuiz.questions.length}</span>
                    <span className="bg-[#E8DCC3] px-2 py-0.5 rounded text-[#3D4425]">
                      {q.difficulty}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#252B18] leading-relaxed">
                    {q.question}
                  </h3>

                  {/* Options Grid */}
                  <div className="space-y-2.5">
                    {q.options.map((opt, optIdx) => {
                      const isOptionSelected = selectedAnswers[q.id] === optIdx;
                      let optionStyle = "bg-[#E8DCC3]/60 border-[#3D4425]/15 hover:border-[#3D4425] text-[#252B18]";

                      if (submitted) {
                        if (optIdx === q.correctOptionIndex) {
                          optionStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold";
                        } else if (isOptionSelected && optIdx !== q.correctOptionIndex) {
                          optionStyle = "bg-rose-100 border-rose-500 text-rose-950 line-through";
                        }
                      } else if (isOptionSelected) {
                        optionStyle = "bg-[#3D4425] border-[#C8A95B] text-[#F3EBDD] font-bold shadow-sm";
                      }

                      return (
                        <button
                          key={optIdx}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyle}`}
                        >
                          <span>{opt}</span>
                          {submitted && optIdx === q.correctOptionIndex && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          )}
                          {submitted && isOptionSelected && optIdx !== q.correctOptionIndex && (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submission */}
                  {submitted && (
                    <div className="bg-[#252B18] text-[#F3EBDD] p-4 rounded-xl text-xs space-y-1.5 border border-[#C8A95B]/30 mt-3">
                      <div className="font-mono font-bold text-[#C8A95B] uppercase text-[10px]">
                        Concept Explanation & Solution
                      </div>
                      <p className="text-[#D9CAA8]/90 leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit / Score Bar */}
          {!submitted ? (
            <div className="flex items-center justify-end gap-3 pt-4">
              <button
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(selectedAnswers).length === 0}
                className="px-6 py-3 rounded-xl bg-[#3D4425] hover:bg-[#252B18] disabled:opacity-50 text-[#F3EBDD] font-display font-bold text-xs uppercase tracking-wider shadow-md transition-all"
              >
                Submit Answers & View Score
              </button>
            </div>
          ) : (
            <div className="bg-[#252B18] text-[#F3EBDD] rounded-3xl p-6 sm:p-8 border border-[#C8A95B]/40 shadow-xl space-y-4 text-center">
              <Award className="w-12 h-12 text-[#C8A95B] mx-auto animate-bounce" />
              <h3 className="font-accent font-bold text-2xl text-[#F3EBDD]">Diagnostic Quiz Completed!</h3>
              <div className="text-4xl font-display font-bold text-[#C8A95B]">
                Score: {calculateScore()} / 12
              </div>
              <p className="text-xs text-[#D9CAA8] max-w-md mx-auto">
                You earned <strong className="text-[#C8A95B]">+50 BEYOND Stars ⭐</strong>. Your Mastery Matrix for Physics has been updated.
              </p>
              <button
                onClick={handleStartQuiz}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C8A95B] text-[#252B18] font-bold text-xs uppercase tracking-wider hover:bg-[#d4b566]"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Diagnostic</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
