const BASE_URL = 'http://13.235.234.229:7000/api/v1/profile';

const headers = {
  'Content-Type': 'application/json',
};

export const updateUser = async (data) => {
  const res = await fetch(`${BASE_URL}/update`, {
    method: 'PUT',
    headers,
    credentials: 'include',
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error(`Update failed: ${res.status}`);
  return res.json();
};

export const getUserById = async (id) => {
  const res = await fetch(`${BASE_URL}/getById?id=${id}`, {
    method: 'GET',
    headers,
    credentials: 'include',
  });

  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${BASE_URL}/delete?id=${id}`, {
    method: 'DELETE',
    headers,
    credentials: 'include',
  });

  if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
  return res.json();
};

export const getAllUsers = async () => {
  const res = await fetch(`${BASE_URL}/getAll`, {
    method: 'GET',
    headers,
    credentials: 'include',
  });

  if (!res.ok) throw new Error(`Get all users failed: ${res.status}`);
  return res.json();
};
