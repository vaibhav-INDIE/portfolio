'use client'

interface CategoryFiltersProps {
  categories: string[];
  currentCategory: string;
  onSetCategory: (category: string) => void;
}

export default function CategoryFilters({ 
  categories, 
  currentCategory, 
  onSetCategory 
}: CategoryFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSetCategory(cat)}
          className={`btn text-sm transform hover:scale-105 transition-all duration-300 ${
            currentCategory === cat 
              ? 'btn-primary hover:brightness-110' 
              : 'btn-outline hover:border-primary/50'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
