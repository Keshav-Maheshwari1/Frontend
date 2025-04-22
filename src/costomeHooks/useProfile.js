import { useMutation, useQuery } from "@tanstack/react-query";
import {
  updateUser,
  getUserById,
  deleteUser,
  getAllUsers,
} from "@/services/profileApis";

// ⬆️ Update user
export const useUpdateUser = () =>
  useMutation({
    mutationFn: updateUser,
  });

// ⬇️ Get user by ID
export const useGetUserById = (id) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
    enabled: !!id,
  });

// ❌ Delete user
export const useDeleteUser = () =>
  useMutation({
    mutationFn: deleteUser,
  });

// 📋 Get all users
export const useGetAllUsers = () =>
  useQuery({
    queryKey: ["allUsers"],
    queryFn: getAllUsers,
  });