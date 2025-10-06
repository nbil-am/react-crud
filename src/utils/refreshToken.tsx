import Cookies from "js-cookie";
const refreshToken = async (): Promise<boolean> => {
  try {
    if (!Cookies.get("front_token")) {
      const res = await fetch("http://localhost:8000/api/refresh_token", {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      if (res.ok) {
        return true;
      }
      return false;
    }
  } catch (error) {
    console.error("Error refreshing token:", error);
  }
  return false;
};

export default refreshToken;
