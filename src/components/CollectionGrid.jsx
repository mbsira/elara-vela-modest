import { useReveal } from "../hooks/useReveal";

const items = [
  { num: "01", text: "Iconic Collection", size: "4vw", align: "left", ml: "18%" },
  { num: "02", text: "New Arrivals", size: "4vw", align: "right", ml: "0" },
  { num: "03", text: "Evening & Clutches", size: "5vw", align: "left", ml: "0" },
  { num: "04", text: "Everyday Luxury", size: "5vw", align: "left", ml: "22%", bold: true },
  { num: "05", text: "Totes & Shoppers", size: "4vw", align: "right", ml: "10%" },
  { num: "06", text: "Crossbody & Shoulder Bags", size: "5vw", align: "left", ml: "5%" },
];

export default function CollectionGrid() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      style={{ opacity: visible ? 1 : 0, transition: "opacity 1s ease" }}
      className="relative w-full py-24 px-6 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      <div className="relative max-w-[1500px] mx-auto">

        {/* Floating image LEFT */}
        <div
          className="absolute z-10 shadow-xl"
          style={{ left: "12%", top: "38%", width: "clamp(120px, 13vw, 200px)" }}
        >
          <img
            src="/pic-4.jpg"
            alt=""
            className="w-full object-cover grayscale-[0.1]"
            style={{ aspectRatio: "3/4" }}
          />
        </div>

        {/* Floating image RIGHT */}
        <div
          className="absolute z-10 shadow-xl"
          style={{ right: "8%", top: "15%", width: "clamp(120px, 13vw, 200px)" }}
        >
          <img
            src="/pic-6.jpg"
            alt=""
            className="w-full object-cover grayscale-[0.1]"
            style={{ aspectRatio: "3/4" }}
          />
        </div>

        {/* TEXT LINES */}
        <div className="flex flex-col gap-2 pr-10 md:pr-16">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-baseline"
              style={{ paddingLeft: item.ml }}
            >
              {/* number tag */}
              <span
                className="text-black/30 dark:text-white/30 font-['Jost'] mr-2 self-start shrink-0"
               style={{ fontSize: `clamp(16px, ${item.size}, 100px)` }}
              >
                ({item.num})
              </span>

              <a
                href="#"
                style={{ fontSize: `clamp(28px, ${item.size}, 140px)` }}
                className={`font-['Cormorant_Garamond'] leading-[0.95] tracking-[-0.02em] uppercase transition-colors duration-300
                  text-black dark:text-white hover:text-black/50 dark:hover:text-white/50
                  ${item.bold ? "font-bold italic" : "font-light"}`}
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}