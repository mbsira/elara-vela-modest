import { useState, useEffect } from "react";

export default function Navbar({ darkMode, toggleDark, cartCount, onCartOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      scrolled
        ? "py-3 border-b border-black/10 dark:border-white/10 bg-white/95 dark:bg-black/95 backdrop-blur-md"
        : "py-5 bg-transparent"
    }`}>
      <div className="max-w-[1600px] mx-auto px-6 flex items-center justify-between">

        {/* LEFT — hamburger only, no search on mobile */}
        <div className="flex items-center gap-5 flex-1">
          <button className="text-black dark:text-white hover:opacity-50 transition-opacity">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="15" y2="12"/>
              <line x1="3" y1="18" x2="18" y2="18"/>
            </svg>
          </button>
          {/* search hidden on mobile */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hidden md:block text-black dark:text-white hover:opacity-50 transition-opacity"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          {searchOpen && (
            <input autoFocus type="text" placeholder="SEARCH..."
              className="hidden md:block w-40 bg-transparent border-b border-black/30 dark:border-white/30 text-[10px] tracking-[0.3em] outline-none pb-1 dark:text-white dark:placeholder-white/40 placeholder-black/40" />
          )}
        </div>

        {/* RIGHT — dark toggle, wishlist, cart */}
        <div className="flex items-center gap-5 flex-1 justify-end">
          <button onClick={toggleDark}
            className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-black dark:text-white hover:opacity-50 transition-opacity">
            {darkMode ? "Light" : "Dark"}
          </button>
          {/* dark toggle icon for mobile */}
          <button onClick={toggleDark}
            className="md:hidden text-black dark:text-white hover:opacity-50 transition-opacity">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {darkMode
                ? <circle cx="12" cy="12" r="5" fill="currentColor"/>
                : <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              }
            </svg>
          </button>
          <button className="text-black dark:text-white hover:opacity-50 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
         <button onClick={onCartOpen} className="relative text-black dark:text-white hover:opacity-50 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 text-[9px] w-3.5 h-3.5 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </nav>
  );
}