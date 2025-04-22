// hooks/useMedicine.js

import { useMutation, useQuery } from "@tanstack/react-query";

import { createMedicine, deleteMedicine, getAllMedicines, getMedicineById, updateMedicine } from "@/services/medicineApis";

// Custom hook to create a new medicine
export const useCreateMedicine = () => {
  return useMutation({
    mutationFn: createMedicine,
  });
};

// Custom hook to update existing medicine
export const useUpdateMedicine = () => {
  return useMutation({
    mutationFn: updateMedicine,
  });
};

// Custom hook to get a medicine by ID
export const useGetMedicineById = (id) => {
  return useQuery({
    queryKey: ["medicine", id],
    queryFn: () => getMedicineById(id),
    enabled: !!id, // only fetch if id is provided
  });
};

// Custom hook to delete a medicine by ID
export const useDeleteMedicine = () => {
  return useMutation({
    mutationFn: deleteMedicine,
  });
};

// Custom hook to get all medicines
export const useGetAllMedicines = () => {
  return useQuery({
    queryKey: ["medicines"],
    queryFn: getAllMedicines,
  });
};
