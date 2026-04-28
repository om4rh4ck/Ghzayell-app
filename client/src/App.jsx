import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import PointsPage from "./pages/PointsPage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import OrdersPage from "./pages/OrdersPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import CustomerDashboardPage from "./pages/CustomerDashboardPage.jsx";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage.jsx";
import AdminMenuPage from "./pages/admin/AdminMenuPage.jsx";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage.jsx";
import AdminUsersPage from "./pages/admin/AdminUsersPage.jsx";
import AdminGalleryPage from "./pages/admin/AdminGalleryPage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <CustomerDashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/points"
          element={
            <ProtectedRoute>
              <PointsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute adminOnly>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboardPage />} />
        <Route path="menu" element={<AdminMenuPage />} />
        <Route path="orders" element={<AdminOrdersPage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="gallery" element={<AdminGalleryPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
