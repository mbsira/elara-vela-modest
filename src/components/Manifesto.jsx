import { useReveal } from "../hooks/useReveal";

export default function Manifesto() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className={`w-full relative overflow-hidden bg-[#ffffff] dark:bg-zinc-950 py-28 px-6 md:px-10
        transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* BIG background image — bleeds right */}
      <div className="absolute right-0 top-0 w-full md:w-[48%] h-full z-0">
        <img
          src="./hero-image2.jpg"
          alt="hero-image"
          className="w-full h-full object-cover grayscale-[0.3] dark:grayscale-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F2] dark:from-zinc-950 via-[#F7F5F2]/60 dark:via-zinc-950/60 to-transparent" />
      </div>

      {/* TEXT */}
      <div className="relative z-10 max-w-[1600px] mx-auto">
        <p className="text-[9px] tracking-[0.5em] uppercase text-black dark:text-white font-['Jost'] mb-10">
          Our philosophy
        </p>

        <h2 className="font-['Cormorant_Garamond'] font-light leading-[0.9] text-black dark:text-white">
          <span className="block text-[10vw] md:text-[7vw] tracking-[-0.02em]">When everything</span>
         <span className="block text-[10vw] md:text-[7vw] tracking-[-0.02em] text-black/40 dark:text-white/25 hover:text-black/60 dark:hover:text-white/40 transition-colors pl-[3vw]">
         is mass
        </span>
          <span className="block text-[10vw] md:text-[7vw] tracking-[-0.02em]">produced,</span>
        </h2>

        <div className="my-8 flex items-center gap-6">
          <div className="w-16 h-[1px] bg-black dark:bg-white/20" />
          <p className="text-[9px] tracking-[0.4em] uppercase text-black/40 dark:text-white/30 font-['Jost']">
            Elara
          </p>
        </div>

        <h2 className="font-['Cormorant_Garamond'] font-bold italic leading-[0.9] text-black dark:text-white">
          <span className="block text-[10vw] md:text-[7vw] tracking-[-0.02em]">we stay</span>
          <span className="block text-[10vw] md:text-[7vw] tracking-[-0.02em] pl-[5vw]">intentional.</span>
        </h2>

        <a
          href="#"
          className="group mt-16 inline-flex items-center gap-5 text-[10px] tracking-[0.4em] uppercase font-['Jost'] text-black dark:text-white"
        >
          <span className="w-10 h-[1px] bg-black dark:bg-white group-hover:w-16 transition-all duration-400" />
          Our Story
        </a>
      </div>
    </section>
  );
}