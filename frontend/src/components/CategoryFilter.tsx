import { Pizza, UtensilsCrossed, Beef, IceCream2, Sandwich, Soup, Drumstick, Leaf } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

const categories: Category[] = [
  { id: 'pizza', name: 'Pizza', icon: Pizza },
  { id: 'chinese', name: 'Chinese', icon: UtensilsCrossed },
  { id: 'fastfood', name: 'Fast Food', icon: Beef },
  { id: 'desserts', name: 'Desserts', icon: IceCream2 },
  { id: 'burgers', name: 'Burgers', icon: Sandwich },
  { id: 'biryani', name: 'Biryani', icon: Soup },
  { id: 'northindian', name: 'North Indian', icon: Drumstick },
  { id: 'southindian', name: 'South Indian', icon: Leaf },
];

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}

export default function CategoryFilter({ selectedCategory, onCategorySelect }: CategoryFilterProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const IconComponent = category.icon;
        const isActive = selectedCategory === category.id;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex flex-col items-center gap-2 min-w-[80px] p-3 rounded-2xl transition-all group ${
              isActive ? 'bg-primary/10' : 'hover:bg-accent'
            }`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${
              isActive ? 'bg-primary/20' : 'bg-accent'
            }`}>
              <IconComponent className={`h-8 w-8 ${isActive ? 'text-primary' : 'text-primary'}`} />
            </div>
            <span className={`text-sm font-medium ${isActive ? 'text-primary' : 'text-foreground'}`}>
              {category.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
