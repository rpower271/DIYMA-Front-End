import { createContext, useContext, useState } from "react";

import { useAuth } from "../Auth/AuthContext";

export const API =
  "postgresql://diyma_backend_user:hTZLaBouMMPDbi9k2CAPLxjNHRa3toTR@dpg-d4dlnah5pdvs73au4ih0-a.oregon-postgres.render.com";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const { token } = useAuth();
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const request = async (resource, options) => {
    const response = await fetch(API + resource, {
      ...options,
      headers,
    });
    const isJson = /json/.test(response.headers.get("Content-Type"));
    const result = isJson ? await response.json() : undefined;
    if (!response.ok) throw Error(result?.message ?? "Something went wrong :(");
    return result;
  };

  const [tags, setTags] = useState({});

  const provideTag = (tag, query) => {
    setTags({ ...tags, [tag]: query });
  };

  const invalidateTags = (tagsToInvalidate) => {
    tagsToInvalidate.forEach((tag) => {
      const query = tags[tag];
      if (query) query();
    });
  };

  const value = { request, provideTag, invalidateTags };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export function useApi() {
  const context = useContext(ApiContext);
  if (!context) throw Error("useApi must be used within ApiProvider");
  return context;
}
