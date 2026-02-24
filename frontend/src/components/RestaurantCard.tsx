import { Star, Clock, MapPin } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  ratingCount?: number;
  deliveryTime: string;
  cuisines: string[];
  distance?: string;
}

function formatRatingCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

export default function RestaurantCard({
  id,
  name,
  image,
  rating,
  ratingCount,
  deliveryTime,
  cuisines,
  distance,
}: RestaurantCardProps) {
  return (
    <Link
      to="/restaurant/$id"
      params={{ id }}
      className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-background/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
          <Star className="h-4 w-4 fill-warning text-warning" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-1">
          {cuisines.join(', ')}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{deliveryTime}</span>
          </div>
          {distance && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{distance}</span>
            </div>
          )}
        </div>
        {ratingCount && (
          <div className="mt-2 text-xs text-muted-foreground">
            {formatRatingCount(ratingCount)} ratings
          </div>
        )}
      </div>
    </Link>
  );
}
