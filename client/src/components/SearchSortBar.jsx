const fieldClass =
  "rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none " +
  "transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100";

function SearchSortBar({ search, onSearchChange, sort, onSortChange }) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row">
      <input
        type="search"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search products by name..."
        className={`${fieldClass} flex-1`}
      />
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className={`${fieldClass} sm:w-56`}
      >
        <option value="newest">Newest</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
}

export default SearchSortBar;
