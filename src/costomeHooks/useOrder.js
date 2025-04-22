// hooks/useOrder.js

import { createOrder, deleteOrder, getAllOrders, getOrderById, updateOrder } from "@/services/medicineorderApis";
import { useMutation, useQuery } from "@tanstack/react-query";


// Custom hook to create a new order
export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrder,
  });
};

// Custom hook to update an existing order
export const useUpdateOrder = () => {
  return useMutation({
    mutationFn: updateOrder,
  });
};

// Custom hook to get an order by ID
export const useGetOrderById = (id) => {
  return useQuery({
    queryKey: ['order', id],
    queryFn: () => getOrderById(id),
    enabled: !!id, // only fetch if id is provided
  });
};

// Custom hook to delete an order by ID
export const useDeleteOrder = () => {
  return useMutation({
    mutationFn: deleteOrder,
  });
};

// Custom hook to get all orders
export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: getAllOrders,
  });
};
