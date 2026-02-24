import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import AllRestaurantsPage from './pages/AllRestaurantsPage';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import ProfileMenu from './components/ProfileMenu';
import { CartProvider } from './contexts/CartContext';
import { ProfileMenuProvider } from './contexts/ProfileMenuContext';
import { LocationProvider } from './contexts/LocationContext';

// Layout component with Header and Outlet
function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <CartSidebar />
      <ProfileMenu />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const restaurantRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/restaurant/$id',
  component: RestaurantDetailPage,
});

const allRestaurantsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/restaurants',
  component: AllRestaurantsPage,
});

const routeTree = rootRoute.addChildren([indexRoute, restaurantRoute, allRestaurantsRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <LocationProvider>
      <CartProvider>
        <ProfileMenuProvider>
          <RouterProvider router={router} />
        </ProfileMenuProvider>
      </CartProvider>
    </LocationProvider>
  );
}

export default App;
