import { createContext, useEffect, useMemo, useState } from "react";
import { apiRequest } from "../api/client";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => JSON.parse(localStorage.getItem("ghzaiel-auth") || "null"));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth) {
      localStorage.setItem("ghzaiel-auth", JSON.stringify(auth));
    } else {
      localStorage.removeItem("ghzaiel-auth");
    }
  }, [auth]);

  const submitAuth = async (endpoint, payload) => {
    setLoading(true);
    try {
      const data = await apiRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      setAuth(data);
      return data;
    } finally {
      setLoading(false);
    }
  };

  const refreshProfile = async () => {
    if (!auth?.token) return;
    const profile = await apiRequest("/auth/me");
    setAuth((current) =>
      current
        ? {
            ...current,
            user: profile
          }
        : current
    );
  };

  const value = useMemo(
    () => ({
      auth,
      user: auth?.user || null,
      token: auth?.token || null,
      loading,
      login: (payload) => submitAuth("/auth/login", payload),
      register: (payload) => submitAuth("/auth/register", payload),
      logout: () => setAuth(null),
      refreshProfile
    }),
    [auth, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
