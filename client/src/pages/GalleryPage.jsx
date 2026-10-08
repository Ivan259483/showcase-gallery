import { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import SearchSortBar from "../components/SearchSortBar";
import ProductModal from "../components/ProductModal";

function GalleryPage({ products, loading }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [selected, setSelected] = useState(null);

  const query = search.trim().toLowerCase();
  const visible = products
    .filter((p) => p.name.toLowerCase().includes(query))
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section
        className="relative mb-10 overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600
          via-violet-600 to-cyan-500 p-10 text-white shadow-xl md:p-14"
      >
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"></div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Product Gallery</p>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Discover Our Products</h2>
        <p className="mt-3 text-white/80">
          {products.length} items available · by Ivan Tadena
        </p>
      </section>

      {loading ? (
        <p className="py-20 text-center text-slate-400">Loading products...</p>
      ) : (
        <>
          <SearchSortBar
            search={search}
            onSearchChange={setSearch}
            sort={sort}
            onSortChange={setSort}
          />
          {products.length > 0 && visible.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed border-slate-300 py-20 text-center text-slate-400">
              No products match "{search.trim()}".
            </div>
          ) : (
            <ProductGrid products={visible} onSelect={setSelected} />
          )}
        </>
      )}

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}

export default GalleryPage;
