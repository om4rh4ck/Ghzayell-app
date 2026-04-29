import { createContext, useEffect, useMemo, useState } from "react";
import { apiRequest } from "../api/client";

export const AuthContext = createContext(null);

const STORAGE_KEY = "ghzaiel-auth";

const readStoredAuth = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
};

const writeStoredAuth = (auth) => {
  if (auth) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
    return;
  }
  localStorage.removeItem(STORAGE_KEY);
};

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(() => readStoredAuth());
  const [isReady, setIsReady] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    writeStoredAuth(auth);
  }, [auth]);

  useEffect(() => {
    const syncSession = async () => {
      if (!auth?.token) {
        setIsReady(true);
        return;
      }

      try {
        const profile = await apiRequest("/auth/me");
        setAuth((current) =>
          current
            ? {
                ...current,
                user: profile
              }
            : current
        );
      } catch {
        setAuth(null);
      } finally {
        setIsReady(true);
      }
    };

    syncSession();
  }, []);

  const submitAuth = async (endpoint, payload) => {
    setLoading(true);
    try {
      const data = await apiRequest(endpoint, {
        method: "POST",
        body: JSON.stringify(payload)
      });
      // Persist token immediately to prevent post-login race on first protected requests.
      writeStoredAuth(data);
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
      isReady,
      loading,
      login: (payload) => submitAuth("/auth/login", payload),
      register: (payload) => submitAuth("/auth/register", payload),
      logout: () => {
        writeStoredAuth(null);
        setAuth(null);
      },
      refreshProfile
    }),
    [auth, isReady, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
