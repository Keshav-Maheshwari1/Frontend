const BASE_URL = 'http://13.235.234.229:7000/api/v1/medicine-order';

export const createOrder = async (orderData) => {
  const res = await fetch(`${BASE_URL}/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(orderData),
  });

  if (!res.ok) throw new Error('Failed to create order');
  return await res.json();
};

export const updateOrder = async (orderData) => {
  const res = await fetch(`${BASE_URL}/update`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(orderData),
  });

  if (!res.ok) throw new Error('Failed to update order');
  return await res.json();
};

export const getOrderById = async (id) => {
  const res = await fetch(`${BASE_URL}/getById?id=${id}`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to get order by ID');
  return await res.json();
};

export const deleteOrder = async (id) => {
  const res = await fetch(`${BASE_URL}/delete?id=${id}`, {
    method: 'DELETE',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to delete order');
  return await res.json();
};

export const getAllOrders = async () => {
  const res = await fetch(`${BASE_URL}/getAll`, {
    method: 'GET',
    credentials: 'include',
  });

  if (!res.ok) throw new Error('Failed to get all orders');
  return await res.json();
};
