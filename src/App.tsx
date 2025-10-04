import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import NotFound from "./NotFound";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Auth from "./components/middleware/Auth";

function App() {
  return (
    <>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Auth guest redirect="/" />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
