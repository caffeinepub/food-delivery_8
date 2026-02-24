import { User } from 'lucide-react';
import { useProfileMenu } from '../contexts/ProfileMenuContext';

export default function ProfileIcon() {
  const { toggleProfileMenu } = useProfileMenu();

  return (
    <button
      onClick={toggleProfileMenu}
      className="relative p-2 rounded-lg hover:bg-accent transition-colors"
      aria-label="Open profile menu"
    >
      <User className="h-6 w-6 text-foreground" />
    </button>
  );
}
