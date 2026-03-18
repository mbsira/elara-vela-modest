import { useReveal } from "../hooks/useReveal";

const items = [
  { type: "tag", text: "New Arrivals" },
  { type: "tag", text: "Evening Wear" },
  { type: "hero", text: "Everyday Luxury" },
  { type: "tag", text: "Totes & Shoppers" },
  { type: "tag", text: "Crossbody & Shoulder" },
];

export default function EditorialBanner() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      className={`w-full px-6 md:px-10 py-20 bg-white dark:bg-zinc-950 overflow-hidden transition-all duration-1000
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-[1600px] mx-auto relative">

        {/* MIXED TYPOGRAPHY — Behance style */}
        <div className="flex flex-col gap-2 md:gap-0">
          {items.map((item, i) => (
            <div
              key={i}
              className={`flex items-center transition-all duration-700`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {item.type === "hero" ? (
                // BIG EDITORIAL WORD
                <span
                  className="font-['Cormorant_Garamond'] font-bold italic text-[12vw] md:text-[9vw] leading-[0.9]
                             text-black dark:text-white tracking-[-0.02em] cursor-default
                             hover:text-black/40 dark:hover:text-white/40 transition-colors duration-300"
                >
                  {item.text}
                </span>
              ) : (
                // SMALL LABEL TAG
                <a
                  href="#"
                  className="group flex items-center gap-3 font-['Jost'] text-[10px] tracking-[0.4em] uppercase
                             text-black/50 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors ml-[6vw] my-1"
                >
                  <span className="w-5 h-[1px] bg-black/30 dark:bg-white/30 group-hover:w-8 transition-all duration-300" />
                  {item.text}
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}