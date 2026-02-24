import { MapPin, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocation } from '../contexts/LocationContext';
import LocationModal from './LocationModal';

export default function LocationSelector() {
  const { address } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-accent transition-colors group"
      >
        <MapPin className="h-5 w-5 text-primary" />
        <div className="text-left hidden md:block">
          <div className="text-xs text-muted-foreground">Deliver to</div>
          <div className="text-sm font-medium text-foreground truncate max-w-[200px]">
            {address}
          </div>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </button>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
