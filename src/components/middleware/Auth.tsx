import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

const Auth = ({ guest, redirect }: { guest?: boolean, redirect: string }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/isLogin", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
          },
        });  
        if (res.ok) {
          setAuthorized(true);
        } else {
          setAuthorized(false);
        }
      } catch {
        setAuthorized(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (guest && authorized || !guest && !authorized) return <Navigate to={redirect} replace />;

  return <Outlet />;
};

export default Auth;
