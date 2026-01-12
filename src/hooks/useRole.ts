import { useState } from "react";

export type UserRole = "super-admin" | "school-admin" | "teacher" | "student" | "parent";

export const useRole = () => {
  const [role, setRole] = useState<UserRole>("super-admin");
  return { role, setRole };
};
