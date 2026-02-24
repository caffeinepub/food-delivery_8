import { X, User, MapPin, Settings, LogOut, Mail, Phone, Plus, Edit2, Trash2 } from 'lucide-react';
import { useProfileMenu } from '../contexts/ProfileMenuContext';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import LoginPrompt from './LoginPrompt';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { ScrollArea } from './ui/scroll-area';
import { useState } from 'react';

interface Address {
  id: string;
  label: string;
  address: string;
  isDefault: boolean;
}

export default function ProfileMenu() {
  const { isProfileMenuOpen, setIsProfileMenuOpen } = useProfileMenu();
  const { isLoginSuccess, clear, identity } = useInternetIdentity();

  // Profile state
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');

  // Address book state
  const [addresses, setAddresses] = useState<Address[]>([
    { id: '1', label: 'Home', address: '123 Main St, New York, NY 10001', isDefault: true },
    { id: '2', label: 'Work', address: '456 Office Blvd, New York, NY 10002', isDefault: false },
  ]);

  const handleLogout = () => {
    clear();
    setIsProfileMenuOpen(false);
  };

  const handleDeleteAddress = (id: string) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id));
  };

  if (!isProfileMenuOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => setIsProfileMenuOpen(false)}
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-50 transform transition-transform">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">
            {isLoginSuccess ? 'My Profile' : 'Account'}
          </h2>
          <button
            onClick={() => setIsProfileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {!isLoginSuccess ? (
          <LoginPrompt />
        ) : (
          <ScrollArea className="h-[calc(100vh-73px)]">
            <div className="p-6 space-y-6">
              {/* User Info Header */}
              <div className="flex items-center gap-4 p-4 bg-accent/50 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{name}</p>
                  <p className="text-sm text-muted-foreground">
                    {identity?.getPrincipal().toString().slice(0, 12)}...
                  </p>
                </div>
              </div>

              {/* Profile Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </h3>
                
                <div className="space-y-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone"
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    Save Changes
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Address Book */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Address Book
                  </h3>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>

                <div className="space-y-3">
                  {addresses.map((addr) => (
                    <div
                      key={addr.id}
                      className="p-3 border border-border rounded-lg space-y-2"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-foreground">{addr.label}</p>
                            {addr.isDefault && (
                              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {addr.address}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <button className="p-1.5 rounded hover:bg-accent transition-colors">
                            <Edit2 className="h-4 w-4 text-muted-foreground" />
                          </button>
                          <button
                            onClick={() => handleDeleteAddress(addr.id)}
                            className="p-1.5 rounded hover:bg-destructive/10 transition-colors"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Settings
                </h3>

                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    <p className="font-medium text-foreground">Order History</p>
                    <p className="text-sm text-muted-foreground">View your past orders</p>
                  </button>
                  
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    <p className="font-medium text-foreground">Payment Methods</p>
                    <p className="text-sm text-muted-foreground">Manage your payment options</p>
                  </button>
                  
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    <p className="font-medium text-foreground">Notifications</p>
                    <p className="text-sm text-muted-foreground">Configure your preferences</p>
                  </button>
                  
                  <button className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors">
                    <p className="font-medium text-foreground">Help & Support</p>
                    <p className="text-sm text-muted-foreground">Get assistance</p>
                  </button>
                </div>
              </div>

              <Separator />

              {/* Logout */}
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="w-full"
              >
                <LogOut className="mr-2 h-5 w-5" />
                Logout
              </Button>
            </div>
          </ScrollArea>
        )}
      </div>
    </>
  );
}
