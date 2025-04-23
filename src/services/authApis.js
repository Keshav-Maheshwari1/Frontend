// services/authService.js


// const BASE_URL = "http://13.235.234.229:7000/api/v1/auth";
const BASE_URL = 'http://localhost:9000/api/v1/auth'


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
  const data = await response.json();
  if (!response.ok) {
    console.log(data)
    throw new Error(data?.message || "Something went wrong in signin ")
  }
  return data;
};

export const logout = async () => {
  const response = await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: true,
  });
  return await response.json();
};

export const getCurrentUser = async () => {
  const response = await fetch(`${BASE_URL}/current`, {
    method: "GET",
    credentials: true,
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
