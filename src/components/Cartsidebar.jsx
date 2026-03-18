import { useState } from "react";

export default function CartSidebar({ cart, onClose, onUpdateQty, onRemove }) {
  const [step, setStep] = useState("cart"); // cart | checkout | thankyou
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "", card: "", expiry: "", cvv: "" });
  const [errors, setErrors] = useState({});

  const total = cart.reduce((a, i) => a + i.qty * parseFloat(i.price), 0);

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Required";
    if (!form.email || !form.email.includes("@")) e.email = "Valid email required";
    if (!form.address) e.address = "Required";
    if (!form.city) e.city = "Required";
    if (!form.zip) e.zip = "Required";
    if (!form.card || form.card.replace(/\s/g, "").length < 16) e.card = "Valid card required";
    if (!form.expiry) e.expiry = "Required";
    if (!form.cvv || form.cvv.length < 3) e.cvv = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleOrder = () => { if (validate()) setStep("thankyou"); };

  const Field = ({ label, name, placeholder, half }) => (
    <div className={half ? "flex-1" : "w-full"}>
      <label className="text-[9px] tracking-[0.3em] uppercase text-black/40 dark:text-white/40 font-['Jost'] block mb-1">{label}</label>
      <input
        value={form[name]}
        onChange={e => setForm({ ...form, [name]: e.target.value })}
        placeholder={placeholder}
        className={`w-full bg-transparent border-b ${errors[name] ? "border-red-400" : "border-black/20 dark:border-white/20"} py-2 text-[11px] tracking-wide outline-none text-black dark:text-white font-['Jost'] placeholder-black/20 dark:placeholder-white/20`}
      />
      {errors[name] && <p className="text-[9px] text-red-400 mt-1">{errors[name]}</p>}
    </div>
  );

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-zinc-950 z-50 flex flex-col shadow-2xl overflow-y-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-black/10 dark:border-white/10">
          <div className="flex items-center gap-4">
            {step !== "cart" && step !== "thankyou" && (
              <button onClick={() => setStep("cart")} className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
            )}
            <h2 className="font-['Cormorant_Garamond'] text-2xl font-light text-black dark:text-white tracking-widest uppercase">
              {step === "cart" ? "Your Bag" : step === "checkout" ? "Checkout" : "Thank You"}
            </h2>
          </div>
          <button onClick={onClose} className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* STEP INDICATORS */}
        {step !== "thankyou" && (
          <div className="flex px-8 pt-4 gap-2">
            {["cart", "checkout"].map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-[8px] font-['Jost'] font-bold transition-colors
                  ${step === s ? "border-black dark:border-white bg-black dark:bg-white text-white dark:text-black" : "border-black/20 dark:border-white/20 text-black/30 dark:text-white/30"}`}>
                  {i + 1}
                </div>
                <span className={`text-[9px] tracking-[0.2em] uppercase font-['Jost'] ${step === s ? "text-black dark:text-white" : "text-black/30 dark:text-white/30"}`}>
                  {s}
                </span>
                {i === 0 && <div className="w-8 h-px bg-black/10 dark:bg-white/10 mx-1" />}
              </div>
            ))}
          </div>
        )}

        {/* ── CART STEP ── */}
        {step === "cart" && (
          <div className="flex flex-col flex-1 px-8 pt-6">
            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-black/20 dark:text-white/20">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <p className="text-[10px] tracking-[0.3em] uppercase text-black/30 dark:text-white/30 font-['Jost']">Your bag is empty</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-6 flex-1">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 pb-6 border-b border-black/8 dark:border-white/8">
                      <div className="w-20 h-24 bg-[#F2F2F0] dark:bg-zinc-900 flex-shrink-0 overflow-hidden">
                        <img src={item.img} alt={item.name} className="w-full h-full object-contain p-2" />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.15em] text-black dark:text-white font-['Jost'] font-medium">{item.name}</p>
                          <p className="text-[10px] tracking-widest text-black/50 dark:text-white/40 font-['Jost'] mt-1">${item.price}</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-black/15 dark:border-white/15">
                            <button onClick={() => onUpdateQty(item.id, item.qty - 1)}
                              className="w-7 h-7 flex items-center justify-center text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors text-sm">−</button>
                            <span className="w-7 text-center text-[11px] font-['Jost'] text-black dark:text-white">{item.qty}</span>
                            <button onClick={() => onUpdateQty(item.id, item.qty + 1)}
                              className="w-7 h-7 flex items-center justify-center text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors text-sm">+</button>
                          </div>
                          <button onClick={() => onRemove(item.id)}
                            className="text-[9px] tracking-[0.2em] uppercase text-black/30 dark:text-white/30 hover:text-black dark:hover:text-white transition-colors font-['Jost']">
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="text-[11px] font-medium font-['Jost'] text-black dark:text-white whitespace-nowrap">
                        ${(item.qty * parseFloat(item.price)).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order summary */}
                <div className="mt-6 pt-6 border-t border-black/10 dark:border-white/10 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-['Jost']">Subtotal</span>
                    <span className="text-[11px] font-['Jost'] text-black dark:text-white">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-['Jost']">Shipping</span>
                    <span className="text-[11px] font-['Jost'] text-black/50 dark:text-white/40">{total >= 150 ? "Free" : "$12.00"}</span>
                  </div>
                  <div className="flex justify-between mt-4 pt-4 border-t border-black/10 dark:border-white/10">
                    <span className="text-[11px] tracking-[0.2em] uppercase font-['Jost'] font-medium text-black dark:text-white">Total</span>
                    <span className="text-[13px] font-medium font-['Jost'] text-black dark:text-white">${(total + (total >= 150 ? 0 : 12)).toFixed(2)}</span>
                  </div>
                  {total < 150 && (
                    <p className="text-[9px] tracking-[0.15em] text-black/30 dark:text-white/30 font-['Jost'] mt-2">
                      Add ${(150 - total).toFixed(2)} more for free shipping
                    </p>
                  )}
                </div>

                <button onClick={() => setStep("checkout")}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-4 text-[10px] tracking-[0.4em] uppercase font-['Jost'] font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors mb-8">
                  Proceed to Checkout →
                </button>
              </>
            )}
          </div>
        )}

        {/* ── CHECKOUT STEP ── */}
        {step === "checkout" && (
          <div className="flex flex-col px-8 pt-6 pb-8 gap-6">

            {/* Shipping */}
            <div>
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-black/40 dark:text-white/40 font-['Jost'] mb-4">Shipping Information</h3>
              <div className="flex flex-col gap-4">
                <Field label="Full Name" name="name" placeholder="Jane Doe" />
                <Field label="Email" name="email" placeholder="jane@email.com" />
                <Field label="Address" name="address" placeholder="123 Main Street" />
                <div className="flex gap-4">
                  <Field label="City" name="city" placeholder="New York" half />
                  <Field label="ZIP Code" name="zip" placeholder="10001" half />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="pt-4 border-t border-black/10 dark:border-white/10">
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-black/40 dark:text-white/40 font-['Jost'] mb-4">Payment Details</h3>
              <div className="flex flex-col gap-4">
                <Field label="Card Number" name="card" placeholder="4242 4242 4242 4242" />
                <div className="flex gap-4">
                  <Field label="Expiry" name="expiry" placeholder="MM/YY" half />
                  <Field label="CVV" name="cvv" placeholder="123" half />
                </div>
              </div>
            </div>

            {/* Order summary mini */}
            <div className="pt-4 border-t border-black/10 dark:border-white/10">
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-black/40 dark:text-white/40 font-['Jost'] mb-3">Order Summary</h3>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span className="text-[10px] font-['Jost'] text-black/60 dark:text-white/50 truncate max-w-[200px]">{item.name} × {item.qty}</span>
                  <span className="text-[10px] font-['Jost'] text-black dark:text-white">${(item.qty * parseFloat(item.price)).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between mt-3 pt-3 border-t border-black/10 dark:border-white/10">
                <span className="text-[11px] uppercase tracking-widest font-['Jost'] font-medium text-black dark:text-white">Total</span>
                <span className="text-[13px] font-medium font-['Jost'] text-black dark:text-white">${(total + (total >= 150 ? 0 : 12)).toFixed(2)}</span>
              </div>
            </div>

            <button onClick={handleOrder}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-4 text-[10px] tracking-[0.4em] uppercase font-['Jost'] font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors mt-2">
              Place Order
            </button>

            <p className="text-[9px] tracking-[0.15em] text-black/30 dark:text-white/30 font-['Jost'] text-center">
              🔒 Secure checkout — your data is safe
            </p>
          </div>
        )}

        {/* ── THANK YOU STEP ── */}
        {step === "thankyou" && (
          <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-8">
            <div className="w-16 h-16 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black dark:text-white">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
            </div>
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-black dark:text-white mb-3">Thank You</h2>
              <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40 font-['Jost'] leading-relaxed">
                Your order has been placed.<br />A confirmation will be sent to<br />
                <span className="text-black dark:text-white">{form.email}</span>
              </p>
            </div>
            <div className="w-full border border-black/10 dark:border-white/10 p-6 text-left">
              <p className="text-[9px] tracking-[0.4em] uppercase text-black/30 dark:text-white/30 font-['Jost'] mb-4">Order Details</p>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between mb-2">
                  <span className="text-[10px] font-['Jost'] text-black/60 dark:text-white/50">{item.name} × {item.qty}</span>
                  <span className="text-[10px] font-['Jost'] text-black dark:text-white">${(item.qty * parseFloat(item.price)).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between mt-4 pt-4 border-t border-black/10 dark:border-white/10">
                <span className="text-[10px] uppercase tracking-widest font-['Jost'] font-medium text-black dark:text-white">Total Paid</span>
                <span className="text-[12px] font-medium font-['Jost'] text-black dark:text-white">${(total + (total >= 150 ? 0 : 12)).toFixed(2)}</span>
              </div>
            </div>
            <button onClick={onClose}
              className="w-full bg-black dark:bg-white text-white dark:text-black py-4 text-[10px] tracking-[0.4em] uppercase font-['Jost'] font-medium hover:bg-zinc-800 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </>
  );
}