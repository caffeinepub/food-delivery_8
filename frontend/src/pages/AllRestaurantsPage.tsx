import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';
import { Button } from '../components/ui/button';
import { ScrollArea } from '../components/ui/scroll-area';

const allRestaurants = [
  {
    id: '1',
    name: 'Bella Italia',
    image: '/assets/generated/restaurant-1.dim_300x200.png',
    rating: 4.5,
    ratingCount: 1250,
    deliveryTime: '25-35 min',
    cuisines: ['Italian', 'Pizza', 'Pasta'],
    distance: '2.5 km',
  },
  {
    id: '2',
    name: 'Dragon Wok',
    image: '/assets/generated/restaurant-2.dim_300x200.png',
    rating: 4.3,
    ratingCount: 890,
    deliveryTime: '30-40 min',
    cuisines: ['Chinese', 'Asian', 'Noodles'],
    distance: '3.2 km',
  },
  {
    id: '3',
    name: 'Burger Palace',
    image: '/assets/generated/restaurant-3.dim_300x200.png',
    rating: 4.7,
    ratingCount: 2100,
    deliveryTime: '20-30 min',
    cuisines: ['American', 'Burgers', 'Fast Food'],
    distance: '1.8 km',
  },
  {
    id: '4',
    name: 'Spice Garden',
    image: '/assets/generated/restaurant-1.dim_300x200.png',
    rating: 4.6,
    ratingCount: 1580,
    deliveryTime: '35-45 min',
    cuisines: ['North Indian', 'Curry', 'Tandoori'],
    distance: '4.1 km',
  },
  {
    id: '5',
    name: 'Sushi Master',
    image: '/assets/generated/restaurant-2.dim_300x200.png',
    rating: 4.8,
    ratingCount: 3200,
    deliveryTime: '30-40 min',
    cuisines: ['Japanese', 'Sushi', 'Asian'],
    distance: '2.9 km',
  },
  {
    id: '6',
    name: 'Taco Fiesta',
    image: '/assets/generated/restaurant-3.dim_300x200.png',
    rating: 4.4,
    ratingCount: 950,
    deliveryTime: '25-35 min',
    cuisines: ['Mexican', 'Tacos', 'Burritos'],
    distance: '3.5 km',
  },
  {
    id: '7',
    name: 'Biryani House',
    image: '/assets/generated/restaurant-1.dim_300x200.png',
    rating: 4.7,
    ratingCount: 2800,
    deliveryTime: '30-40 min',
    cuisines: ['Biryani', 'North Indian', 'Mughlai'],
    distance: '2.2 km',
  },
  {
    id: '8',
    name: 'South Spice',
    image: '/assets/generated/restaurant-2.dim_300x200.png',
    rating: 4.5,
    ratingCount: 1420,
    deliveryTime: '25-35 min',
    cuisines: ['South Indian', 'Dosa', 'Idli'],
    distance: '3.8 km',
  },
  {
    id: '9',
    name: 'Pizza Corner',
    image: '/assets/generated/restaurant-3.dim_300x200.png',
    rating: 4.6,
    ratingCount: 1890,
    deliveryTime: '20-30 min',
    cuisines: ['Pizza', 'Italian', 'Fast Food'],
    distance: '1.5 km',
  },
  {
    id: '10',
    name: 'Sweet Treats',
    image: '/assets/generated/restaurant-1.dim_300x200.png',
    rating: 4.8,
    ratingCount: 2450,
    deliveryTime: '15-25 min',
    cuisines: ['Desserts', 'Ice Cream', 'Bakery'],
    distance: '1.2 km',
  },
  {
    id: '11',
    name: 'The Burger Joint',
    image: '/assets/generated/restaurant-2.dim_300x200.png',
    rating: 4.4,
    ratingCount: 1120,
    deliveryTime: '25-35 min',
    cuisines: ['Burgers', 'American', 'Fries'],
    distance: '2.8 km',
  },
  {
    id: '12',
    name: 'Wok Express',
    image: '/assets/generated/restaurant-3.dim_300x200.png',
    rating: 4.3,
    ratingCount: 780,
    deliveryTime: '30-40 min',
    cuisines: ['Chinese', 'Thai', 'Asian'],
    distance: '4.5 km',
  },
  {
    id: '13',
    name: 'Tandoor Nights',
    image: '/assets/generated/restaurant-1.dim_300x200.png',
    rating: 4.7,
    ratingCount: 2100,
    deliveryTime: '35-45 min',
    cuisines: ['North Indian', 'Tandoori', 'Kebabs'],
    distance: '3.6 km',
  },
  {
    id: '14',
    name: 'Dosa Delight',
    image: '/assets/generated/restaurant-2.dim_300x200.png',
    rating: 4.6,
    ratingCount: 1650,
    deliveryTime: '20-30 min',
    cuisines: ['South Indian', 'Dosa', 'Vada'],
    distance: '2.1 km',
  },
  {
    id: '15',
    name: 'Gelato Paradise',
    image: '/assets/generated/restaurant-3.dim_300x200.png',
    rating: 4.9,
    ratingCount: 3500,
    deliveryTime: '15-25 min',
    cuisines: ['Desserts', 'Gelato', 'Italian'],
    distance: '1.9 km',
  },
  {
    id: '16',
    name: 'Royal Biryani',
    image: '/assets/generated/restaurant-1.dim_300x200.png',
    rating: 4.8,
    ratingCount: 4200,
    deliveryTime: '30-40 min',
    cuisines: ['Biryani', 'Hyderabadi', 'North Indian'],
    distance: '3.3 km',
  },
  {
    id: '17',
    name: 'Slice of Heaven',
    image: '/assets/generated/restaurant-2.dim_300x200.png',
    rating: 4.5,
    ratingCount: 1340,
    deliveryTime: '25-35 min',
    cuisines: ['Pizza', 'Italian', 'Pasta'],
    distance: '2.7 km',
  },
  {
    id: '18',
    name: 'Burger Barn',
    image: '/assets/generated/restaurant-3.dim_300x200.png',
    rating: 4.6,
    ratingCount: 1870,
    deliveryTime: '20-30 min',
    cuisines: ['Burgers', 'Fast Food', 'Shakes'],
    distance: '1.6 km',
  },
  {
    id: '19',
    name: 'Curry House',
    image: '/assets/generated/restaurant-1.dim_300x200.png',
    rating: 4.4,
    ratingCount: 920,
    deliveryTime: '35-45 min',
    cuisines: ['North Indian', 'Curry', 'Naan'],
    distance: '4.8 km',
  },
  {
    id: '20',
    name: 'Cake Studio',
    image: '/assets/generated/restaurant-2.dim_300x200.png',
    rating: 4.7,
    ratingCount: 2650,
    deliveryTime: '20-30 min',
    cuisines: ['Desserts', 'Cakes', 'Pastries'],
    distance: '2.4 km',
  },
];

export default function AllRestaurantsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter restaurants based on search query
  const filteredRestaurants = allRestaurants.filter((restaurant) => {
    return searchQuery === '' || 
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisines.some(cuisine => cuisine.toLowerCase().includes(searchQuery.toLowerCase()));
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-16 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">All Restaurants</h1>
          </div>
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery}
            placeholder="Search restaurants or cuisines..."
          />
        </div>
      </div>

      {/* Restaurant List */}
      <div className="container mx-auto px-4 py-8">
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No restaurants found matching your search</p>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-6">
              Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
