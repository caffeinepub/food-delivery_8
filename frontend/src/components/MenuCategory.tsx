import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: string;
  items: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }>;
  restaurantId: string;
}

export default function MenuCategory({ category, items, restaurantId }: MenuCategoryProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary/20">
        {category}
      </h2>
      <div className="space-y-4">
        {items.map((item) => (
          <MenuItem key={item.id} {...item} restaurantId={restaurantId} />
        ))}
      </div>
    </div>
  );
}
