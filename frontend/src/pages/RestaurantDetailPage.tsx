import { useParams, Link } from '@tanstack/react-router';
import { Star, Clock, MapPin, ArrowLeft, Phone } from 'lucide-react';
import MenuItem from '../components/MenuItem';
import MenuCategory from '../components/MenuCategory';
import RestaurantInfo from '../components/RestaurantInfo';
import { Button } from '../components/ui/button';

const restaurantData = {
  '1': {
    name: 'Bella Italia',
    banner: '/assets/generated/hero-food.dim_1200x400.png',
    rating: 4.5,
    reviews: 1250,
    cuisines: ['Italian', 'Pizza', 'Pasta'],
    deliveryTime: '25-35 min',
    distance: '2.5 km',
    address: '123 Main Street, Downtown',
    phone: '+91 98765 43210',
    hours: '11:00 AM - 11:00 PM',
    menu: [
      {
        category: 'Starters',
        items: [
          { id: 's1', name: 'Bruschetta', description: 'Toasted bread with tomatoes and basil', price: 199, image: '/assets/generated/restaurant-1.dim_300x200.png' },
          { id: 's2', name: 'Garlic Bread', description: 'Fresh baked bread with garlic butter', price: 149, image: '/assets/generated/restaurant-2.dim_300x200.png' },
        ],
      },
      {
        category: 'Main Course',
        items: [
          { id: 'm1', name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil', price: 349, image: '/assets/generated/restaurant-3.dim_300x200.png' },
          { id: 'm2', name: 'Spaghetti Carbonara', description: 'Creamy pasta with bacon and parmesan', price: 399, image: '/assets/generated/restaurant-1.dim_300x200.png' },
          { id: 'm3', name: 'Lasagna', description: 'Layered pasta with meat sauce and cheese', price: 449, image: '/assets/generated/restaurant-2.dim_300x200.png' },
        ],
      },
      {
        category: 'Desserts',
        items: [
          { id: 'd1', name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: 179, image: '/assets/generated/restaurant-3.dim_300x200.png' },
          { id: 'd2', name: 'Panna Cotta', description: 'Creamy vanilla dessert with berry sauce', price: 159, image: '/assets/generated/restaurant-1.dim_300x200.png' },
        ],
      },
    ],
  },
};

export default function RestaurantDetailPage() {
  const { id } = useParams({ from: '/restaurant/$id' });
  const restaurant = restaurantData[id as keyof typeof restaurantData] || restaurantData['1'];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Restaurants
          </Button>
        </Link>
      </div>

      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={restaurant.banner}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Restaurant Header */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border mb-6">
              <h1 className="text-3xl font-bold mb-3">{restaurant.name}</h1>
              <p className="text-muted-foreground mb-4">{restaurant.cuisines.join(', ')}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-semibold">{restaurant.rating}</span>
                  <span className="text-muted-foreground">({restaurant.reviews.toLocaleString()} ratings)</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{restaurant.distance}</span>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="space-y-8">
              {restaurant.menu.map((category) => (
                <MenuCategory
                  key={category.category}
                  category={category.category}
                  items={category.items}
                  restaurantId={id}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <RestaurantInfo
                rating={restaurant.rating}
                reviews={restaurant.reviews}
                address={restaurant.address}
                phone={restaurant.phone}
                hours={restaurant.hours}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
