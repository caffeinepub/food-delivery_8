import { ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

export default function CartIcon() {
  const { itemCount, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative p-2 rounded-lg hover:bg-accent transition-colors"
    >
      <ShoppingBag className="h-6 w-6 text-foreground" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}
