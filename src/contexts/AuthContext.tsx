import React, { createContext, useContext, useState, useEffect } from "react";
import { UserRole } from "../hooks/useRole";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

// Mock user database
const mockUsers: Record<string, { password: string; user: User }> = {
  "superadmin@school.com": {
    password: "admin123",
    user: {
      id: "1",
      name: "Super Admin",
      email: "superadmin@school.com",
      role: "super-admin",
    },
  },
  "admin@school.com": {
    password: "admin123",
    user: {
      id: "2",
      name: "School Admin",
      email: "admin@school.com",
      role: "school-admin",
    },
  },
  "teacher@school.com": {
    password: "teacher123",
    user: {
      id: "3",
      name: "John Teacher",
      email: "teacher@school.com",
      role: "teacher",
    },
  },
  "student@school.com": {
    password: "student123",
    user: {
      id: "4",
      name: "Alice Student",
      email: "student@school.com",
      role: "student",
    },
  },
  "parent@school.com": {
    password: "parent123",
    user: {
      id: "5",
      name: "Bob Parent",
      email: "parent@school.com",
      role: "parent",
    },
  },
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored session
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));

    const userRecord = mockUsers[email];
    
    if (userRecord && userRecord.password === password && userRecord.user.role === role) {
      setUser(userRecord.user);
      localStorage.setItem("user", JSON.stringify(userRecord.user));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
