import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import RestaurantCard from '../components/RestaurantCard';
import { SiFacebook, SiX, SiInstagram } from 'react-icons/si';

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
    categories: ['pizza'],
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
    categories: ['chinese'],
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
    categories: ['burgers', 'fastfood'],
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
    categories: ['northindian'],
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
    categories: ['fastfood'],
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
    categories: ['fastfood'],
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
    categories: ['biryani', 'northindian'],
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
    categories: ['southindian'],
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
    categories: ['pizza', 'fastfood'],
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
    categories: ['desserts'],
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
    categories: ['burgers', 'fastfood'],
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
    categories: ['chinese'],
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
    categories: ['northindian'],
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
    categories: ['southindian'],
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
    categories: ['desserts'],
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
    categories: ['biryani', 'northindian'],
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
    categories: ['pizza'],
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
    categories: ['burgers', 'fastfood'],
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
    categories: ['northindian'],
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
    categories: ['desserts'],
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    // Toggle category selection
    setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
  };

  // Filter restaurants based on search query and selected category
  const filteredRestaurants = allRestaurants.filter((restaurant) => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisines.some(cuisine => cuisine.toLowerCase().includes(searchQuery.toLowerCase()));

    // Category filter
    const matchesCategory = !selectedCategory || 
      restaurant.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  // Show only first 12 restaurants on home page
  const displayedRestaurants = filteredRestaurants.slice(0, 12);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-accent to-secondary/10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-warning to-primary bg-clip-text text-transparent">
              Delicious Food, Delivered Fast
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Order from your favorite restaurants and get it delivered to your doorstep
            </p>
          </div>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">What's on your mind?</h2>
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Top Restaurants Near You</h2>
            <button 
              onClick={() => navigate({ to: '/restaurants' })}
              className="text-primary font-medium hover:underline"
            >
              View All
            </button>
          </div>
          {displayedRestaurants.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No restaurants found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">FoodHub</h3>
              <p className="text-sm text-muted-foreground">
                Your favorite food, delivered fast and fresh to your doorstep.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiX className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <SiInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} FoodHub. Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
