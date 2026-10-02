// Login, signup and admin are the only pages that use Supabase auth. Wrapping them here,
// instead of wrapping the whole app, keeps the Supabase client out of the bundle every
// public visitor downloads.
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import AdminPage from "./pages/Admin";
import AdminPropertiesPage from "./pages/AdminProperties";
import AdminTourRequestsPage from "./pages/AdminTourRequests";

export const Login = () => (
  <AuthProvider>
    <LoginPage />
  </AuthProvider>
);

export const Signup = () => (
  <AuthProvider>
    <SignupPage />
  </AuthProvider>
);

export const Admin = () => (
  <AuthProvider>
    <ProtectedRoute>
      <AdminPage />
    </ProtectedRoute>
  </AuthProvider>
);

export const AdminProperties = () => (
  <AuthProvider>
    <ProtectedRoute>
      <AdminPropertiesPage />
    </ProtectedRoute>
  </AuthProvider>
);

export const AdminTourRequests = () => (
  <AuthProvider>
    <ProtectedRoute>
      <AdminTourRequestsPage />
    </ProtectedRoute>
  </AuthProvider>
);
