import { Star, MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

interface RestaurantInfoProps {
  rating: number;
  reviews: number;
  address: string;
  phone: string;
  hours: string;
}

export default function RestaurantInfo({
  rating,
  reviews,
  address,
  phone,
  hours,
}: RestaurantInfoProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Restaurant Info</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-warning text-warning" />
          <div>
            <div className="font-semibold">{rating} Rating</div>
            <div className="text-sm text-muted-foreground">{reviews} reviews</div>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <div className="font-medium text-sm mb-1">Address</div>
            <div className="text-sm text-muted-foreground">{address}</div>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex items-start gap-2">
          <Phone className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <div className="font-medium text-sm mb-1">Phone</div>
            <a
              href={`tel:${phone}`}
              className="text-sm text-primary hover:underline"
            >
              {phone}
            </a>
          </div>
        </div>
        
        <Separator />
        
        <div className="flex items-start gap-2">
          <Clock className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <div className="font-medium text-sm mb-1">Hours</div>
            <div className="text-sm text-muted-foreground">{hours}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
