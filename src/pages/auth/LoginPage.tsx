import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { UserRole } from "../../hooks/useRole";

const roleOptions: Array<{ value: UserRole; label: string; color: string }> = [
  { value: "super-admin", label: "Super Admin", color: "bg-purple-600" },
  { value: "school-admin", label: "School Admin", color: "bg-indigo-600" },
  { value: "teacher", label: "Teacher", color: "bg-teal-600" },
  { value: "student", label: "Student", color: "bg-blue-600" },
  { value: "parent", label: "Parent", color: "bg-emerald-600" },
];

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("school-admin");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const success = await login(email, password, selectedRole);
    
    if (success) {
      // Navigate based on role
      const roleRoutes: Record<UserRole, string> = {
        "super-admin": "/super-admin",
        "school-admin": "/school-admin",
        "teacher": "/teacher",
        "student": "/student",
        "parent": "/parent",
      };
      navigate(roleRoutes[selectedRole]);
    } else {
      setError("Invalid credentials. Please check your email, password, and role.");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-teal-50 px-4 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-teal-600 text-2xl font-bold text-white shadow-lg">
            S
          </div>
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            School Management
          </h1>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            Sign in to access your dashboard
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Select Role
              </label>
              <div className="grid grid-cols-2 gap-3">
                {roleOptions.map((role) => (
                  <button
                    key={role.value}
                    type="button"
                    onClick={() => setSelectedRole(role.value)}
                    className={`rounded-xl border-2 p-3 text-center text-sm font-semibold transition ${
                      selectedRole === role.value
                        ? `${role.color} border-transparent text-white shadow-md`
                        : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                    }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                placeholder="Enter your password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-xl bg-red-50 p-3 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-neutral-900"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 rounded-xl bg-neutral-50 p-4 dark:bg-neutral-800">
            <p className="mb-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              Demo Credentials:
            </p>
            <div className="space-y-1 text-xs text-neutral-600 dark:text-neutral-400">
              <p>Super Admin: superadmin@school.com / admin123</p>
              <p>School Admin: admin@school.com / admin123</p>
              <p>Teacher: teacher@school.com / teacher123</p>
              <p>Student: student@school.com / student123</p>
              <p>Parent: parent@school.com / parent123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
