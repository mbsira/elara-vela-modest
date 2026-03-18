import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.cdnfonts.com/css/black-gold";
    document.head.appendChild(link);
    const el = ref.current;
    if (!el) return;
    setTimeout(() => { el.style.opacity = "1"; }, 100);
  }, []);

  return (
    <section
      ref={ref}
      style={{ opacity: 0, transition: "opacity 0.8s ease" }}
      className="relative w-full h-screen bg-white dark:bg-zinc-950 overflow-hidden flex flex-col"
    >
      {/* TOP — VELA */}
      <div className="flex-1 flex items-end justify-center pointer-events-none select-none z-0 mb-28">
        <span
          className="text-black dark:text-white text-center leading-none"
          style={{ fontSize: "clamp(72px, 22vw, 300px)", fontFamily: "'Black Gold', serif", lineHeight: 1 }}
        >
          VELA
        </span>
      </div>

      {/* BOTTOM — ELARA */}
      <div className="flex-1 flex items-start justify-center pointer-events-none select-none z-20">
        <span
          className="text-black dark:text-white text-center leading-none"
          style={{ fontSize: "clamp(72px, 22vw, 300px)", fontFamily: "'Black Gold', serif", lineHeight: 1 }}
        >
          ELARA
        </span>
      </div>

      {/* CENTER IMAGE */}
      <div
        className="absolute z-10 shadow-2xl"
        style={{
          width: "clamp(200px, 28vw, 360px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <img
          src="/hero-image.jpg"
          alt="ELARA"
          className="w-full object-cover"
          style={{ aspectRatio: "4/4" }}
        />
      </div>

      {/* ® */}
      <div
        className="absolute z-20 text-black dark:text-white select-none font-serif"
        style={{ right: "22%", top: "46%", fontSize: "clamp(20px, 3vw, 50px)" }}
      >
        ®
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-24 left-6 z-20">
        <p className="text-[9px] tracking-[0.25em] uppercase text-black/40 dark:text-white/40 font-['Jost'] leading-loose">
          Modest Essentials<br />2026 Collection
        </p>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-8 left-6 z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center">
            <p className="text-[6px] tracking-widest uppercase text-black/40 dark:text-white/30 text-center font-['Jost'] leading-tight">
              Est.<br />2020
            </p>
          </div>
          <p className="text-[9px] tracking-[0.15em] uppercase text-black/50 dark:text-white/40 font-['Jost'] leading-snug">
            Handcrafted<br />in Modesty
          </p>
        </div>
      </div>

      {/* BOTTOM CENTER — CTA line */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-16 h-px bg-black/30 dark:bg-white/30" />
      </div>

      {/* BOTTOM RIGHT — socials */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-4">
        {["tw", "yt", "ig"].map((s) => (
          <a key={s} href="#" className="text-[9px] tracking-widest uppercase text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors font-['Jost']">
            {s}
          </a>
        ))}
      </div>

    </section>
  );
}