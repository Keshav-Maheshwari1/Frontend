

import { useQuery, useMutation } from "@tanstack/react-query";
import {
  fetchOneStore,
  fetchAllStores,
  fetchStoresByUser,
} from "@/services/storeServices";

// Custom hook to fetch one store by ID
export const useFetchOneStore = (id) => {
  return useQuery({
    queryKey: ["store", id],
    queryFn: () => fetchOneStore(id),
    enabled: !!id, 
  });
};

// Custom hook to fetch all stores
export const useFetchAllStores = () => {
  return useQuery({
    queryKey: ["stores"],
    queryFn: fetchAllStores,
  });
};

// Custom hook to fetch stores by user ID
export const useFetchStoresByUser = (userId) => {
  return useQuery({
    queryKey: ["storesByUser", userId],
    queryFn: () => fetchStoresByUser(userId),
    enabled: !!userId,
  });
};
