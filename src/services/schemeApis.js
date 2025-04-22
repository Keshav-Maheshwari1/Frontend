// schemeApis.js
// const BASE_URL = "http://13.235.234.229:7000/api/v1/scheme";
const BASE_URL = 'http://localhost:9000/api/v1/scheme'

export const createScheme = async (schemeData) => {
  const res = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(schemeData),
  });

  if (!res.ok) {
    throw new Error("Failed to create scheme");
  }
  const data = await res.json();
  return data;
};


export const updateScheme = async (schemeData) => {
  const res = await fetch(`${BASE_URL}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(schemeData),
  });

  if (!res.ok) {
    throw new Error("Failed to update scheme");
  }

  return await  res.json();
};

export const getSchemeById = async (id) => {
  const res = await fetch(`${BASE_URL}/getById?id=${id}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to get scheme");
  }

  return res.json();
};

export const deleteScheme = async (id) => {
  const res = await fetch(`${BASE_URL}/delete?id=${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to delete scheme");
  }

  return res.json();
};

export const getAllSchemes = async () => {
  const res = await fetch(`${BASE_URL}/getAll`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Failed to get schemes");
  }

  return res.json();
};
