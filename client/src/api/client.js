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
    window.location.replace("/auth");
  }
};

const buildApiError = (message, extras = {}) => Object.assign(new Error(message), extras);

const readAuthData = () => {
  try {
    return JSON.parse(localStorage.getItem("ghzaiel-auth") || "null");
  } catch {
    return null;
  }
};

export const getMediaUrl = (url) => {
  if (!url) return "";
  if (url.startsWith("http")) return url;

  const normalized = String(url)
    .trim()
    .replace(/\\/g, "/")
    .replace(/^\.?\//, "")
    .replace(/^public\//i, "");

  if (normalized.startsWith("uploads/")) {
    return `${API_ORIGIN}/${normalized}`;
  }

  if (normalized.startsWith("/")) {
    return `${API_ORIGIN}${normalized}`;
  }

  return `${API_ORIGIN}/${normalized}`;
};

export const apiRequest = async (path, options = {}) => {
  const authData = readAuthData();
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
      throw buildApiError("", { silentRedirect: true, status: 401 });
    }
    if (response.status === 403) {
      throw buildApiError("Acces refuse pour ce compte.", { status: 403 });
    }
    throw buildApiError(data?.message || "Request failed", { status: response.status });
  }

  return data;
};

export const apiFormRequest = async (path, formData, method = "POST") => {
  const authData = readAuthData();
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
      throw buildApiError("", { silentRedirect: true, status: 401 });
    }
    if (response.status === 403) {
      throw buildApiError("Acces refuse pour ce compte.", { status: 403 });
    }
    throw buildApiError(data?.message || "Request failed", { status: response.status });
  }

  return data;
};
