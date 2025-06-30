'use client'

import { motion } from 'framer-motion'

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
        <motion.button
          key={cat}
          onClick={() => onSetCategory(cat)}
          className={`btn text-sm ${currentCategory === cat ? 'btn-primary' : 'btn-outline'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}
