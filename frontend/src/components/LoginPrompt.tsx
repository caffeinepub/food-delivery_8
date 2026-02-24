import { LogIn } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Button } from './ui/button';

export default function LoginPrompt() {
  const { login, isLoggingIn } = useInternetIdentity();

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center space-y-6">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
        <User className="h-10 w-10 text-primary" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">
          Welcome to Food Hub
        </h3>
        <p className="text-muted-foreground max-w-sm">
          Save your preferences to order faster, track your orders, and manage your favorite restaurants
        </p>
      </div>

      <Button
        onClick={login}
        disabled={isLoggingIn}
        size="lg"
        className="w-full max-w-xs"
      >
        {isLoggingIn ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
            Connecting...
          </>
        ) : (
          <>
            <LogIn className="mr-2 h-5 w-5" />
            Login to Continue
          </>
        )}
      </Button>
    </div>
  );
}

function User({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
