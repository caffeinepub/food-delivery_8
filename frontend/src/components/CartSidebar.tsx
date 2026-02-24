import { X, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';

export default function CartSidebar() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeItem,
    subtotal,
    deliveryFee,
    tax,
    total,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card border-l border-border z-50 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <span className="text-sm text-muted-foreground">({items.length} items)</span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground">Add items to get started</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 rounded-lg bg-accent/50">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                      <p className="text-sm font-semibold text-primary">
                        ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 rounded hover:bg-destructive/10 text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <div className="flex items-center gap-2 bg-background rounded-lg border border-border">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-accent rounded-l-lg transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-accent rounded-r-lg transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Price Breakdown */}
            <div className="border-t border-border p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span className="font-medium">₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span className="font-medium">₹{tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span className="text-primary">₹{total.toFixed(2)}</span>
              </div>
              <Button className="w-full h-12 text-base font-semibold" size="lg">
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
