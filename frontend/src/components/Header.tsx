import { Search } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import CartIcon from './CartIcon';
import ProfileIcon from './ProfileIcon';
import LocationSelector from './LocationSelector';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/generated/fh-logo.dim_120x120.png"
              alt="Food Hub logo"
              className="h-12 w-12 object-contain"
            />
            <div className="text-2xl font-bold text-primary hidden sm:block">
              Food Hub
            </div>
          </Link>

          {/* Location Selector - Desktop */}
          <div className="hidden md:block">
            <LocationSelector />
          </div>

          {/* Search - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for restaurants or dishes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ProfileIcon />
            <CartIcon />
          </div>
        </div>

        {/* Mobile Search */}
        <div className="lg:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for restaurants or dishes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
