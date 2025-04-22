// hooks/useSchemes.js

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  updateScheme,
  getSchemeById,
  deleteScheme,
  getAllSchemes,
  createScheme,
} from "@/services/schemeApis"; // Adjust the import path according to your directory structure

// Custom hook to create a scheme
export const useCreateScheme = () => {
  return useMutation({
    mutationFn: createScheme,

  });
};

// Custom hook to update a scheme
export const useUpdateScheme = () => {
  return useMutation({
    mutationFn: updateScheme,
  });
};

// Custom hook to get scheme by ID
export const useGetSchemeById = (id) => {
  return useQuery({
    queryKey: ["scheme", id],
    queryFn: () => getSchemeById(id),
    enabled: !!id, // Only fetch if ID is provided
  });
};

// Custom hook to delete a scheme
export const useDeleteScheme = () => {
  return useMutation({
    mutationFn: deleteScheme,
  });
};

// Custom hook to get all schemes
export const useGetAllSchemes = () => {
  return useQuery({
    queryKey: ["schemes"],
    queryFn: getAllSchemes,
  });
};
