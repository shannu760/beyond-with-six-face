"use client";

import React, { useState } from "react";
import {
  Users,
  Clock,
  Target,
  Sparkles,
  Plus,
  Play,
  CheckCircle2,
  MessageSquare,
  Star,
  Flame,
  ArrowUpRight
} from "lucide-react";

interface StudyRoom {
  id: string;
  title: string;
  topic: string;
  exam: string;
  activeCount: number;
  maxCount: number;
  durationMinutes: number;
  elapsedMinutes: number;
  goal: string;
  hostName: string;
}

const INITIAL_ROOMS: StudyRoom[] = [
  {
    id: "room-1",
    title: "⚡ JEE Physics Sprint #04",
    topic: "Kinematics & Projectile Motion",
    exam: "JEE Main 2027",
    activeCount: 8,
    maxCount: 12,
    durationMinutes: 45,
    elapsedMinutes: 28,
    goal: "Solve 15 NTA Previous Year Questions",
    hostName: "Rahul V."
  },
  {
    id: "room-2",
    title: "🧪 Organic Chem Deep Work",
    topic: "Electrophilic Substitution Mechanisms",
    exam: "JEE / NEET",
    activeCount: 5,
    maxCount: 10,
    durationMinutes: 60,
    elapsedMinutes: 12,
    goal: "Complete Chapter 7 Reaction Flowchart",
    hostName: "Priya S."
  },
  {
    id: "room-3",
    title: "📐 Calculus Limits Problem Pod",
    topic: "Limits & Continuity Indeterminate Forms",
    exam: "JEE Advanced",
    activeCount: 6,
    maxCount: 8,
    durationMinutes: 30,
    elapsedMinutes: 5,
    goal: "Complete L'Hôpital's Rule Diagnostic",
    hostName: "Aman K."
  }
];

export default function StudyRoomsPage() {
  const [rooms, setRooms] = useState<StudyRoom[]>(INITIAL_ROOMS);
  const [activeRoom, setActiveRoom] = useState<StudyRoom | null>(null);

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D4425]/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-[#3D4425]" />
            <h1 className="font-accent font-bold text-2xl text-[#252B18]">
              Collaborative Study Rooms
            </h1>
            <span className="text-[10px] uppercase font-mono font-bold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-300">
              Live Peer Pods
            </span>
          </div>
          <p className="text-xs text-[#69704A] mt-1">
            Focus together in small 45-minute timed pods. Complete your goal to earn +75 BEYOND Stars.
          </p>
        </div>

        <button
          onClick={() => {
            const newRoom: StudyRoom = {
              id: `room-${Date.now()}`,
              title: "🎯 Custom Focused Pod",
              topic: "Physics Mechanics Review",
              exam: "JEE Main",
              activeCount: 1,
              maxCount: 8,
              durationMinutes: 45,
              elapsedMinutes: 0,
              goal: "Complete 10 Selected Numerical Problems",
              hostName: "Arjun K."
            };
            setRooms([newRoom, ...rooms]);
            setActiveRoom(newRoom);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3D4425] text-[#F3EBDD] font-display font-bold text-xs uppercase tracking-wider hover:bg-[#252B18] transition-all shadow-sm"
        >
          <Plus className="w-4 h-4 text-[#C8A95B]" />
          <span>Create Study Pod</span>
        </button>
      </div>

      {/* ACTIVE ROOM MODAL / VIEW */}
      {activeRoom && (
        <div className="bg-[#252B18] text-[#F3EBDD] rounded-3xl p-6 sm:p-8 border border-[#C8A95B]/40 shadow-2xl space-y-6 animate-fade-in relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#69704A]/30 pb-4">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C8A95B] font-bold">
                Active Study Session
              </span>
              <h2 className="font-accent font-bold text-2xl text-[#F3EBDD]">
                {activeRoom.title}
              </h2>
              <p className="text-xs text-[#D9CAA8]/80">
                Topic: <strong>{activeRoom.topic}</strong> • Host: {activeRoom.hostName}
              </p>
            </div>

            <button
              onClick={() => setActiveRoom(null)}
              className="px-4 py-1.5 rounded-xl border border-[#69704A]/40 text-xs font-bold text-[#E8DCC3] hover:bg-[#3D4425]"
            >
              Leave Room
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Timer & Goal */}
            <div className="md:col-span-2 bg-[#3D4425]/60 rounded-2xl p-5 border border-[#69704A]/30 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#C8A95B]">Session Timer</span>
                <span className="text-xs font-mono text-emerald-400 font-bold">● Active Sprint</span>
              </div>

              <div className="text-4xl sm:text-5xl font-mono font-bold text-center text-[#F3EBDD] py-4 bg-[#252B18]/80 rounded-xl border border-[#69704A]/30 tracking-widest">
                {String(activeRoom.durationMinutes - activeRoom.elapsedMinutes).padStart(2, "0")}:14
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-[#D9CAA8] flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-[#C8A95B]" />
                  <span>Pod Target Goal:</span>
                </div>
                <p className="text-xs text-[#F3EBDD] bg-[#252B18]/60 p-3 rounded-xl border border-[#69704A]/20">
                  {activeRoom.goal}
                </p>
              </div>
            </div>

            {/* Room Members */}
            <div className="bg-[#3D4425]/60 rounded-2xl p-5 border border-[#69704A]/30 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-[#C8A95B]">
                <span>Participants ({activeRoom.activeCount}/{activeRoom.maxCount})</span>
                <Users className="w-4 h-4 text-[#C8A95B]" />
              </div>

              <ul className="space-y-2 text-xs text-[#E8DCC3]">
                <li className="flex items-center justify-between p-2 rounded-lg bg-[#252B18]/60 border border-[#69704A]/20">
                  <span className="font-semibold text-[#F3EBDD]">{activeRoom.hostName} (Host)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Focusing</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-[#252B18]/60 border border-[#69704A]/20">
                  <span className="font-semibold text-[#F3EBDD]">Arjun K. (You)</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Focusing</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-[#252B18]/60 border border-[#69704A]/20">
                  <span>Siddharth M.</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Focusing</span>
                </li>
                <li className="flex items-center justify-between p-2 rounded-lg bg-[#252B18]/60 border border-[#69704A]/20">
                  <span>Ananya R.</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Focusing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Available Rooms Grid */}
      <div className="space-y-4">
        <h2 className="font-accent font-bold text-2xl text-[#252B18]">
          Active Peer Study Pods
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-[#F8F4EC] border border-[#3D4425]/20 hover:border-[#C8A95B] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#252B18] text-[#C8A95B]">
                    {room.exam}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    {room.activeCount}/{room.maxCount} Online
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-[#252B18] group-hover:text-[#3D4425]">
                  {room.title}
                </h3>
                <p className="text-xs text-[#69704A] font-medium">
                  {room.topic}
                </p>

                <div className="bg-[#E8DCC3]/60 p-2.5 rounded-xl text-[11px] text-[#3D4425] border border-[#3D4425]/10">
                  <strong>Goal:</strong> {room.goal}
                </div>
              </div>

              <div className="pt-3 border-t border-[#3D4425]/10 flex items-center justify-between">
                <span className="text-xs text-[#3D4425] font-mono font-semibold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {room.durationMinutes - room.elapsedMinutes}m left
                </span>

                <button
                  onClick={() => setActiveRoom(room)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#252B18] group-hover:text-[#C8A95B] transition-colors"
                >
                  <span>Enter Pod</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
