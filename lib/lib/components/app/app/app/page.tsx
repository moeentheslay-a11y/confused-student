import Link from 'next/link';

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[#09090b] text-white p-6 relative">
      <h1 className="text-6xl font-black mb-4 tracking-tighter">SMART <span className="text-[#eab308]">STUDENT</span></h1>
      <p className="text-zinc-400 mb-8 max-w-sm text-lg italic">Stop being confused. Start being productive.</p>
      
      <Link href="/dashboard" className="px-10 py-4 bg-[#eab308] text-black font-extrabold rounded-full transition-transform active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
        Enter Dashboard
      </Link>

      <div className="absolute bottom-10">
        <a 
          href="https://www.instagram.com/moin.jaffar?igsh=bGluMDEwOXRjY25m" 
          target="_blank" 
          className="text-zinc-600 text-xs tracking-widest hover:text-[#eab308] transition-colors uppercase font-medium"
        >
          coded by mian moeen
        </a>
      </div>
    </div>
  );
}
