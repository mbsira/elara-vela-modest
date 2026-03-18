import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CollectionGrid from "./components/CollectionGrid";
import EditorialBanner from "./components/EditorialBanner";
import Bestsellers from "./components/Bestsellers";
import Manifesto from "./components/Manifesto";
import Footer from "./components/Footer";
import CartSidebar from "./components/Cartsidebar";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("elara-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("elara-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) setCart((prev) => prev.filter((i) => i.id !== id));
    else setCart((prev) => prev.map((i) => i.id === id ? { ...i, qty } : i));
  };

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  const cartCount = cart.reduce((a, i) => a + i.qty, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 overflow-x-hidden">
      <Navbar
        darkMode={darkMode}
        toggleDark={() => setDarkMode((d) => !d)}
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
      />
      <Hero />
      <CollectionGrid />
      <EditorialBanner />
      <Bestsellers title="Bestsellers" onAddToCart={addToCart} />
      <Manifesto />
      <Bestsellers title="New Arrivals" second onAddToCart={addToCart} />
      <Footer />

      {cartOpen && (
        <CartSidebar
          cart={cart}
          onClose={() => setCartOpen(false)}
          onUpdateQty={updateQty}
          onRemove={removeItem}
        />
      )}
    </div>
  );
}
