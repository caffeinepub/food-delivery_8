import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../contexts/CartContext';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  restaurantId: string;
}

export default function MenuItem({
  id,
  name,
  description,
  price,
  image,
  restaurantId,
}: MenuItemProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      restaurantId,
      image,
    });
  };

  return (
    <div className="flex gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all group">
      <div className="flex-1">
        <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <p className="text-lg font-bold text-primary">₹{price.toFixed(2)}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="w-24 h-24 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
        </div>
        <Button
          size="sm"
          onClick={handleAddToCart}
          className="gap-1 shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </div>
    </div>
  );
}
