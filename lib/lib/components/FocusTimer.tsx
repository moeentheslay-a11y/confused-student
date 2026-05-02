"use client";
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Zap } from "lucide-react";

export default function FocusTimer() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="p-6 rounded-2xl bg-surface border border-zinc-800 flex flex-col items-center">
      <div className="flex items-center gap-2 mb-4 text-brand">
        <Zap size={20} fill="currentColor" />
        <span className="font-bold uppercase tracking-wider text-sm">Focus Mode</span>
      </div>
      <h2 className="text-5xl font-mono font-bold mb-6 text-white">{formatTime(seconds)}</h2>
      <div className="flex gap-4">
        <button onClick={() => setIsActive(!isActive)} className="p-3 rounded-full bg-brand text-black">
          {isActive ? <Pause /> : <Play />}
        </button>
        <button onClick={() => { setIsActive(false); setSeconds(25 * 60); }} className="p-3 rounded-full bg-zinc-800 text-white">
          <RotateCcw />
        </button>
      </div>
    </div>
  );
}
