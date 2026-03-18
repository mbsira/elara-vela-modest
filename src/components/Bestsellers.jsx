import { useReveal } from "../hooks/useReveal";

const products1 = [
  { id: 1, name: "Essential Longline Tee", price: "75", img: "/pic-1.jpg" },
  { id: 2, name: "Relaxed Wide Trousers", price: "120", img: "/pic-2.jpg" },
  { id: 3, name: "Wool Blend Overcoat", price: "280", img: "/pic-3.jpg" },
  { id: 4, name: "Ribbed Knit Scarf", price: "45", img: "/pic-4.jpg" },
];

const products2 = [
  { id: 5, name: "Linen Maxi Dress", price: "165", img: "/pic-5.jpg" },
  { id: 6, name: "Knit Cardigan", price: "95", img: "/pic-6.jpg" },
  { id: 7, name: "Wide Brim Hat", price: "55", img: "/pic-7.jpg" },
  { id: 8, name: "Pleated Midi Skirt", price: "110", img: "/pic-8.jpg" },
];

function ProductCard({ product, delay, onAddToCart }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `all 0.7s ease ${delay}ms` }}
      className="group flex flex-col border border-black/10 dark:border-white/10"
    >
      {/* Name + Price on TOP */}
      <div className="flex justify-between items-center px-4 py-3 border-b border-black/10 dark:border-white/10">
        <span className="text-[11px] uppercase tracking-[0.15em] text-black dark:text-white font-['Jost']">
          {product.name}
        </span>
        <span className="text-[11px] uppercase tracking-[0.1em] text-black dark:text-white font-['Jost'] ml-4 whitespace-nowrap">
          {product.price}$
        </span>
      </div>

      {/* IMAGE */}
      <div className="relative overflow-hidden bg-[#F2F2F0] dark:bg-zinc-900 flex items-center justify-center p-6"
        style={{ aspectRatio: "4/3" }}>
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
        />
        {/* Quick Add slides up */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-black dark:bg-white text-white dark:text-black py-3 text-[9px] tracking-[0.4em] uppercase font-['Jost'] hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            Quick Add +
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Bestsellers({ title, second, onAddToCart }) {
  const { ref, visible } = useReveal();
  const products = second ? products2 : products1;

  return (
    <section className="w-full px-6 md:px-10 py-16 bg-white dark:bg-zinc-950">
      <div
        ref={ref}
        style={{ opacity: visible ? 1 : 0, transition: "all 0.7s ease" }}
        className="max-w-[1600px] mx-auto flex justify-between items-center mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] uppercase text-black dark:text-white font-['Jost']">
          {title}
        </h2>
        <a href="#"
          className="hidden md:block border border-black dark:border-white px-6 py-2 text-[9px] tracking-[0.3em] uppercase font-['Jost'] text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
          View All Collection
        </a>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 border border-black/10 dark:border-white/10">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} delay={i * 80} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}