import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "./index.css";
import Login from "./screens/login";
import Modules from "./screens/modules";
import Stocks from "./screens/stocks";
import StocksCreate from "./screens/stocks-create";
import { useUserStore } from "./stores/user";
import Stores from "./screens/stores";
import { useIndexBooster } from "./hooks/use-index-booster";

const ProtectedRoute = ({
  children,
  requiresStore
}: {
  children: React.ReactNode;
  requiresStore: boolean;
}) => {
  const { currentUser, selectedStoreId } = useUserStore();
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }
  if (requiresStore && !selectedStoreId) {
    return <Navigate to="/stores" replace />;
  }
  return children;
};

const LoggedOutRoute = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const { currentUser } = useUserStore();
  if (!!currentUser) {
    return <Navigate to="/stores" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoggedOutRoute>
        <Login />
      </LoggedOutRoute>
    )
  },
  {
    path: "/stores",
    element: <Stores />
  },
  {
    path: "/modules",
    element: (
      <ProtectedRoute requiresStore>
        <Modules />
      </ProtectedRoute>
    )
  },
  {
    path: "/modules/stocks",
    element: (
      <ProtectedRoute requiresStore>
        <Stocks />
      </ProtectedRoute>
    )
  },
  {
    path: "/modules/stocks/create",
    element: (
      <ProtectedRoute requiresStore>
        <StocksCreate />
      </ProtectedRoute>
    )
  }
]);

const queryClient = new QueryClient();

function App() {
  useIndexBooster();
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex w-full h-screen flex-col">
        <RouterProvider router={router} />
      </main>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
