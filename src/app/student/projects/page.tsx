"use client";

import React, { useState } from "react";
import {
  Rocket,
  CheckCircle2,
  Clock,
  Plus,
  Sparkles,
  Award,
  ExternalLink,
  Code2,
  FileText,
  Target
} from "lucide-react";

interface ProjectMilestone {
  id: string;
  stageName: string;
  description: string;
  completed: boolean;
}

interface StudentProject {
  id: string;
  title: string;
  category: string;
  description: string;
  progressPercent: number;
  githubUrl?: string;
  demoUrl?: string;
  milestones: ProjectMilestone[];
}

const INITIAL_PROJECTS: StudentProject[] = [
  {
    id: "proj-1",
    title: "3D Electric Dipole Vector Simulation",
    category: "Physics & Web Development",
    description: "Interactive browser canvas simulating charge attraction and dipole torque bending field lines in 3D.",
    progressPercent: 75,
    githubUrl: "https://github.com/beyond-student/dipole-sim",
    demoUrl: "https://dipole-sim.vercel.app",
    milestones: [
      { id: "m1", stageName: "Step 1: Define Problem", description: "Identify student difficulty visualising dipole vectors", completed: true },
      { id: "m2", stageName: "Step 2: Research Math Formulas", description: "Derive electric field equations E = k q / r^2", completed: true },
      { id: "m3", stageName: "Step 3: Build Web Canvas Prototype", description: "Set up Three.js scene with charges & arrows", completed: true },
      { id: "m4", stageName: "Step 4: Test with Classmates", description: "Gather feedback from 10 JEE peer students", completed: false }
    ]
  }
];

export default function StudentProjectBuilderPage() {
  const [projects, setProjects] = useState<StudentProject[]>(INITIAL_PROJECTS);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Science & Web");

  const toggleMilestone = (projId: string, mId: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id === projId) {
          const updatedMs = p.milestones.map((m) =>
            m.id === mId ? { ...m, completed: !m.completed } : m
          );
          const completedCount = updatedMs.filter((m) => m.completed).length;
          const newPercent = Math.round((completedCount / updatedMs.length) * 100);
          return { ...p, milestones: updatedMs, progressPercent: newPercent };
        }
        return p;
      })
    );
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newProj: StudentProject = {
      id: `proj-${Date.now()}`,
      title,
      category,
      description,
      progressPercent: 25,
      milestones: [
        { id: "m1", stageName: "Step 1: Define Problem", description: "Document core problem statement & target users", completed: true },
        { id: "m2", stageName: "Step 2: Background Research", description: "Gather official sources & references", completed: false },
        { id: "m3", stageName: "Step 3: Build Prototype", description: "Create initial working model", completed: false },
        { id: "m4", stageName: "Step 4: User Testing & Review", description: "Collect peer feedback", completed: false }
      ]
    };

    setProjects([newProj, ...projects]);
    setTitle("");
    setDescription("");
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D4425]/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Rocket className="w-5 h-5 text-[#3D4425]" />
            <h1 className="font-accent font-bold text-2xl text-[#252B18]">
              Student Project Builder
            </h1>
            <span className="text-[10px] uppercase font-mono font-bold bg-[#252B18] text-[#C8A95B] px-2.5 py-0.5 rounded-full border border-[#C8A95B]/40">
              Portfolio Engine
            </span>
          </div>
          <p className="text-xs text-[#69704A] mt-1">
            Convert your student ideas into verified portfolio projects & GitHub achievements.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3D4425] text-[#F3EBDD] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#252B18] transition-all shadow-sm"
        >
          <Plus className="w-4 h-4 text-[#C8A95B]" />
          <span>New Project</span>
        </button>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="bg-[#F8F4EC] border border-[#3D4425]/20 rounded-3xl p-6 shadow-sm space-y-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D4425]/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase font-bold text-[#3D4425] bg-[#E8DCC3] px-2.5 py-0.5 rounded">
                  {proj.category}
                </span>
                <h3 className="font-display font-bold text-xl text-[#252B18] mt-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#69704A] mt-0.5">{proj.description}</p>
              </div>

              <div className="text-right shrink-0">
                <div className="text-2xl font-bold font-display text-[#252B18]">
                  {proj.progressPercent}%
                </div>
                <div className="text-[10px] font-mono text-[#69704A] uppercase font-bold">Progress</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#E8DCC3] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#3D4425] rounded-full transition-all duration-500"
                style={{ width: `${proj.progressPercent}%` }}
              />
            </div>

            {/* Milestones Workflow Checklist */}
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-[#3D4425] uppercase tracking-wider">
                Project Milestone Checklist
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {proj.milestones.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => toggleMilestone(proj.id, m.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      m.completed
                        ? "bg-[#E8DCC3]/60 border-[#3D4425]/20 text-[#3D4425]"
                        : "bg-white border-[#3D4425]/15 text-[#252B18] hover:border-[#3D4425]"
                    }`}
                  >
                    <button
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                        m.completed ? "bg-emerald-700 border-emerald-700 text-white" : "border-[#3D4425]"
                      }`}
                    >
                      {m.completed && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </button>
                    <div>
                      <div className="text-xs font-bold">{m.stageName}</div>
                      <div className="text-[11px] opacity-80">{m.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Links & Action Footer */}
            <div className="pt-2 border-t border-[#3D4425]/10 flex items-center justify-between">
              {proj.githubUrl ? (
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-[#252B18] hover:text-[#C8A95B] flex items-center gap-1.5"
                >
                  <Code2 className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              ) : (
                <span className="text-xs text-[#69704A]">No repo linked</span>
              )}

              <button className="text-xs font-bold text-[#3D4425] hover:text-[#C8A95B] flex items-center gap-1">
                <span>Publish to BEYOND Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-[#252B18]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F8F4EC] border border-[#3D4425]/30 rounded-3xl p-6 max-w-md w-full shadow-2xl space-y-4">
            <h3 className="font-accent font-bold text-xl text-[#252B18]">Create New Student Project</h3>

            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#3D4425] uppercase tracking-wider mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Physics Formula Visualizer"
                  className="w-full bg-[#E8DCC3] border border-[#3D4425]/20 rounded-xl px-3.5 py-2 text-xs text-[#252B18]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3D4425] uppercase tracking-wider mb-1">
                  Brief Description
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="What does your project do?"
                  className="w-full bg-[#E8DCC3] border border-[#3D4425]/20 rounded-xl px-3.5 py-2 text-xs text-[#252B18]"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-[#3D4425]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#3D4425] text-[#F3EBDD] font-bold text-xs uppercase tracking-wider hover:bg-[#252B18]"
                >
                  Initialize Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
