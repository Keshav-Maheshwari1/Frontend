// storeServices.js

const BASE_URL = "http://13.235.234.229:7000/api/v1/store";

// Fetch one store by ID
export const fetchOneStore = async (id) => {
  const response = await fetch(`${BASE_URL}/getById?id=${id}`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch store by ID");
  }

  const data = await response.json();
  return data;
};

// Fetch all stores
export const fetchAllStores = async () => {
  const response = await fetch(`${BASE_URL}/getAll`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch all stores");
  }

  const data = await response.json();
  return data;
};

// Fetch stores by user
export const fetchStoresByUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/getByUser?userId=${userId}`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch stores by user");
  }

  const data = await response.json();
  return data;
};
