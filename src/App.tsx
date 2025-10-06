import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import NotFound from "./NotFound";
import Auth from "./components/middleware/Auth";
import Dashboard from "./pages/auth/Dashboard";
import { useEffect, lazy, Suspense } from "react";
import refreshToken from "./utils/refreshToken";

const LazySignIn = lazy(() => import("./pages/auth/SignIn"));
const LazySignUp = lazy(() => import("./pages/auth/SignUp"));

function App() {
  useEffect(() => {
    const refresh = async () => {
      const checkToken = await refreshToken();
      console.log("Token refreshed:", checkToken);
    };
    refresh();
  });
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth routes */}
      <Route element={<Auth guest redirect="/" />}>
        <Route
          path="/signin"
          element={
            <Suspense fallback={<div>Loading Sign In...</div>}>
              <LazySignIn />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<div>Loading Sign Up...</div>}>
              <LazySignUp />
            </Suspense>
          }
        />
      </Route>

      <Route element={<Auth redirect="/signin" />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
