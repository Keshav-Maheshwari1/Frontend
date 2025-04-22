// hooks/useAuth.js

import { getCurrentUser, login, logout, signup, updateProfile, verifyUser } from "@/services/authApis";
import { useMutation, useQuery } from "@tanstack/react-query";


// Custom hook for signup
export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};

// Custom hook for login
export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

// Custom hook for logout
export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};

// Custom hook for fetching current user
export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });
};

// Custom hook for updating profile
export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: updateProfile,
  });
};

// Custom hook for verifying user
export const useVerifyUser = () => {
  return useQuery({
    queryKey: ["verifyUser"],
    queryFn: verifyUser,
  });
};
