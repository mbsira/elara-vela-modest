const links = {
  Shop: ["Collections", "New Arrivals", "Sustainability", "Gift Cards"],
  Company: ["Our Story", "Contact Us", "Careers", "Press"],
  Legal: ["Shipping", "Returns", "Privacy Policy", "Terms"],
};

export default function Footer() {
  return (
    <footer className="w-full bg-black dark:bg-zinc-950 font-['Jost']">

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-10 pt-20 pb-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-16">

          {/* BRAND COL */}
          <div className="col-span-2 md:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="font-['Cormorant_Garamond'] text-white text-3xl font-light tracking-[0.4em] uppercase mb-6">
                ELARA
              </h3>
              <p className="text-[10px] tracking-[0.15em] text-white/40 leading-relaxed uppercase max-w-[200px]">
                Modest essentials for the modern woman. Clean lines, quiet luxury.
              </p>
            </div>
            <div className="flex gap-6 mt-10">
              {["Instagram", "TikTok", "Pinterest"].map((s) => (
                <a key={s} href="#" className="text-[9px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLS */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section} className="flex flex-col gap-4">
              <h4 className="text-[9px] tracking-[0.5em] uppercase text-white/30 font-medium">{section}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[10px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] tracking-[0.4em] uppercase text-white/20">
            © 2026 Elara Vela Modest. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {["Terms of Service", "Cookie Settings"].map((t) => (
              <a key={t} href="#" className="text-[9px] tracking-[0.3em] uppercase text-white/20 hover:text-white/60 transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* GIANT BRAND NAME — Casa Merisse style */}
      <div className="w-full overflow-hidden border-t border-white/5">
        <h1
          className="text-[22vw] font-['Cormorant_Garamond'] font-[400] text-center leading-none
                     text-white dark:text-white/[0.06] select-none tracking-[-0.03em] py-4"
        >
          THANK YOU
        </h1>
      </div>

    </footer>
  );
}