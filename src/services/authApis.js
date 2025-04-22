// services/authService.js

const BASE_URL = "http://13.235.234.229:7000/api/v1/profile";

export const signup = async (userData) => {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
    credentials: "include",
  });
  return await response.json();
};

export const login = async (credentials) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: "include",
  });
  return await response.json();
};

export const logout = async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  return await response.json();
};

export const getCurrentUser = async () => {
  const response = await fetch(`${BASE_URL}/current`, {
    method: "GET",
    credentials: "include",
  });
  return await response.json();
};

export const updateProfile = async (profileData) => {
  const response = await fetch(`${BASE_URL}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profileData),
    credentials: "include",
  });
  return await response.json();
};

export const verifyUser = async () => {
  const response = await fetch(`${BASE_URL}/verify`, {
    method: "GET",
    credentials: "include",
  });
  return await response.json();
};
