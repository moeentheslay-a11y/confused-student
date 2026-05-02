"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Flame, Trophy, TrendingUp, BrainCircuit, ChevronRight } from "lucide-react";
import FocusTimer from "@/components/FocusTimer";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-4 md:p-8 flex flex-col">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-zinc-500">Your academic performance at a glance.</p>
        </div>
        <div className="hidden md:block">
           <a href="https://www.instagram.com/moin.jaffar?igsh=bGluMDEwOXRjY25m" target="_blank" className="text-zinc-700 text-[10px] tracking-widest hover:text-[#eab308] uppercase">coded by mian moeen</a>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#18181b] border border-zinc-800">
               <Flame className="text-orange-500 mb-2" size={20} />
               <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-tight">Study Streak</div>
               <div className="text-2xl font-black">12 Days</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#18181b] border border-zinc-800">
               <Trophy className="text-[#eab308] mb-2" size={20} />
               <div className="text-[10px] text-zinc-500 uppercase font-bold">XP Points</div>
               <div className="text-2xl font-black">2,840</div>
            </div>
            <div className="p-5 rounded-2xl bg-[#18181b] border border-zinc-800 col-span-2 md:col-span-1">
               <TrendingUp className="text-green-500 mb-2" size={20} />
               <div className="text-[10px] text-zinc-500 uppercase font-bold">Completion</div>
               <div className="text-2xl font-black">84%</div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#18181b] border border-zinc-800">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 underline decoration-[#eab308]">Active Goals</h3>
            <div className="space-y-4">
              {['Finish Organic Chemistry Module', 'Complete Physics Mock Test', 'Submit English Essay'].map((task, i) => (
                <div key={i} className="group p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 flex justify-between items-center hover:border-[#eab308]/50 transition-all cursor-pointer">
                  <span className="text-zinc-300 group-hover:text-white">{task}</span>
                  <ChevronRight size={18} className="text-zinc-600 group-hover:text-[#eab308]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <FocusTimer />
          <div className="p-6 rounded-2xl bg-[#eab308]/5 border border-[#eab308]/20 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10"><BrainCircuit size={40} /></div>
             <div className="flex items-center gap-2 text-[#eab308] font-bold mb-3">
                <BrainCircuit size={18} /> Smart Insight
             </div>
             <p className="text-sm text-zinc-400 leading-relaxed italic">
               "You focus best on Science subjects during evening sessions. We recommend doing Biology at 7:00 PM today."
             </p>
          </div>
        </div>
      </div>

      <footer className="mt-12 py-6 border-t border-zinc-900 text-center md:hidden">
        <a href="https://www.instagram.com/moin.jaffar?igsh=bGluMDEwOXRjY25m" target="_blank" className="text-zinc-700 text-[10px] tracking-widest uppercase hover:text-[#eab308]">coded by mian moeen</a>
      </footer>
    </div>
  );
}
