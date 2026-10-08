import { useEffect } from "react";

function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-30 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl text-slate-600 shadow hover:bg-white hover:text-slate-900"
        >
          ×
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="aspect-4/3 w-full object-cover"
        />

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900">{product.name}</h3>
            <span className="rounded-full bg-indigo-50 px-4 py-1 text-lg font-bold text-indigo-600">
              ₱{Number(product.price).toLocaleString()}
            </span>
          </div>
          <p className="mt-3 whitespace-pre-line text-slate-500">{product.description}</p>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
