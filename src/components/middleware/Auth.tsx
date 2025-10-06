import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import Cookies from "js-cookie";

const Auth = ({ guest, redirect }: { guest?: boolean; redirect: string }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("Checking auth with token:", Cookies.get("front_token"));
        const res = await fetch("http://localhost:8000/api/isLogin", {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
            "X-Requested-With": "XMLHttpRequest",
            Authorization: `Bearer ${Cookies.get("front_token") || ""}`,
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
  if ((guest && authorized) || (!guest && !authorized))
    return <Navigate to={redirect} replace />;

  return <Outlet />;
};

export default Auth;
