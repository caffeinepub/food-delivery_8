import { useState } from 'react';
import { MapPin, Navigation, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useLocation } from '../contexts/LocationContext';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LocationModal({ isOpen, onClose }: LocationModalProps) {
  const { setAddress } = useLocation();
  const [manualAddress, setManualAddress] = useState('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState('');

  const handleManualSave = () => {
    if (manualAddress.trim()) {
      setAddress(manualAddress.trim());
      setManualAddress('');
      onClose();
    }
  };

  const handleUseCurrentLocation = () => {
    setIsLoadingLocation(true);
    setLocationError('');

    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Simulate reverse geocoding (in a real app, you'd call a geocoding API)
        const detectedAddress = `${latitude.toFixed(4)}°N, ${longitude.toFixed(4)}°E`;
        setAddress(detectedAddress);
        setIsLoadingLocation(false);
        onClose();
      },
      (error) => {
        setLocationError('Unable to retrieve your location. Please enter manually.');
        setIsLoadingLocation(false);
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Delivery Location</DialogTitle>
          <DialogDescription>
            Choose how you want to set your delivery address
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Use Current Location */}
          <div className="space-y-2">
            <Button
              onClick={handleUseCurrentLocation}
              disabled={isLoadingLocation}
              className="w-full h-12 gap-2"
              variant="default"
            >
              <Navigation className="h-5 w-5" />
              {isLoadingLocation ? 'Detecting Location...' : 'Use Current Location'}
            </Button>
            {locationError && (
              <p className="text-sm text-destructive">{locationError}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          {/* Manual Entry */}
          <div className="space-y-3">
            <Label htmlFor="manual-address">Enter Address Manually</Label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="manual-address"
                  placeholder="Enter your delivery address"
                  value={manualAddress}
                  onChange={(e) => setManualAddress(e.target.value)}
                  className="pl-10"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleManualSave();
                    }
                  }}
                />
              </div>
            </div>
            <Button
              onClick={handleManualSave}
              disabled={!manualAddress.trim()}
              className="w-full"
              variant="outline"
            >
              Save Address
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
