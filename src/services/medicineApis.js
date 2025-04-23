const BASE_URL = 'http://13.235.234.229:7000/api/v1/medicine';
// const BASE_URL = 'http://localhost:9000/api/v1/medicine'

// Create a new medicine
export const createMedicine = async (payload) => {
  const response = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Failed to create medicine");
  return response.json();
};

// Update existing medicine
export const updateMedicine = async (payload) => {
  const response = await fetch(`${BASE_URL}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Failed to update medicine");
  return response.json();
};

// Get medicine by ID (expects ?id=xyz format)
export const getMedicineById = async (id) => {
  const response = await fetch(`${BASE_URL}/getById?id=${id}`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) throw new Error("Failed to fetch medicine by ID");
  return response.json();
};

// Delete medicine (expects ?id=xyz format)
export const deleteMedicine = async (id) => {
  const response = await fetch(`${BASE_URL}/delete?id=${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) throw new Error("Failed to delete medicine");
  return response.json();
};

// Get all medicines
export const getAllMedicines = async () => {
  const response = await fetch(`${BASE_URL}/getAll`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) throw new Error("Failed to fetch all medicines");
  return response.json();
};
