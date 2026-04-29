const defaultApiUrl =
  typeof window !== "undefined" && window.location.hostname === "localhost" && window.location.port === "5173"
    ? "http://localhost:5000/api"
    : typeof window !== "undefined"
      ? `${window.location.origin}/api`
      : "http://localhost:5000/api";

const API_URL = import.meta.env.VITE_API_URL || defaultApiUrl;
const API_ORIGIN = API_URL.replace(/\/api$/, "");

const handleUnauthorizedSession = () => {
  localStorage.removeItem("ghzaiel-auth");

  if (typeof window !== "undefined" && window.location.pathname !== "/auth") {
    window.location.href = "/auth";
  }
};

export const getMediaUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${API_ORIGIN}${url}`;
};

export const apiRequest = async (path, options = {}) => {
  const authData = JSON.parse(localStorage.getItem("ghzaiel-auth") || "null");
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {})
  };

  if (authData?.token) {
    headers.Authorization = `Bearer ${authData.token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers
  });

  const isJson = response.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await response.json() : null;

  if (!response.ok) {
    if (response.status === 401) {
      handleUnauthorizedSession();
    }
    if (response.status === 401) {
      throw new Error("Votre session a expire. Merci de vous reconnecter.");
    }
    if (response.status === 403) {
      throw new Error("Acces refuse pour ce compte.");
    }
    throw new Error(data?.message || "Request failed");
  }

  return data;
};

export const apiFormRequest = async (path, formData, method = "POST") => {
  const authData = JSON.parse(localStorage.getItem("ghzaiel-auth") || "null");
  const headers = {};

  if (authData?.token) {
    headers.Authorization = `Bearer ${authData.token}`;
  }

  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: formData
  });

  const data = await response.json();

  if (!response.ok) {
    if (response.status === 401) {
      handleUnauthorizedSession();
    }
    if (response.status === 401) {
      throw new Error("Votre session a expire. Merci de vous reconnecter.");
    }
    if (response.status === 403) {
      throw new Error("Acces refuse pour ce compte.");
    }
    throw new Error(data?.message || "Request failed");
  }

  return data;
};
