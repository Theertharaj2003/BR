import React, { useState } from "react";
import { StatusChip } from "../../components/ui/StatusChip";
import { ModalDrawer } from "../../components/ui/ModalDrawer";

interface FeeItem {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  status: "Paid" | "Pending" | "Overdue";
  paidDate?: string;
}

const mockFeeItems: FeeItem[] = [
  {
    id: "1",
    description: "Tuition Fee - Q1 2026",
    amount: 15000,
    dueDate: "2026-01-31",
    status: "Overdue",
  },
  {
    id: "2",
    description: "Library Fee - Annual",
    amount: 2000,
    dueDate: "2026-02-15",
    status: "Pending",
  },
  {
    id: "3",
    description: "Sports Fee - Annual",
    amount: 3000,
    dueDate: "2026-02-28",
    status: "Pending",
  },
  {
    id: "4",
    description: "Lab Fee - Semester 1",
    amount: 4000,
    dueDate: "2026-03-15",
    status: "Pending",
  },
  {
    id: "5",
    description: "Tuition Fee - Q4 2025",
    amount: 15000,
    dueDate: "2025-12-31",
    status: "Paid",
    paidDate: "2025-12-20",
  },
];

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: "💳" },
  { id: "upi", name: "UPI", icon: "📱" },
  { id: "netbanking", name: "Net Banking", icon: "🏦" },
  { id: "wallet", name: "Digital Wallet", icon: "👛" },
];

export const ParentPaymentPage: React.FC = () => {
  const [feeItems] = useState<FeeItem[]>(mockFeeItems);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleItemSelection = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const selectAllPending = () => {
    const pendingIds = feeItems.filter((item) => item.status !== "Paid").map((item) => item.id);
    setSelectedItems(pendingIds);
  };

  const totalAmount = feeItems
    .filter((item) => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.amount, 0);

  const handlePayment = () => {
    if (selectedItems.length === 0) return;
    setIsPaymentModalOpen(true);
  };

  const processPayment = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsPaymentModalOpen(false);
      setSelectedItems([]);
      alert("Payment successful! Receipt has been sent to your email.");
    }, 2000);
  };

  const stats = {
    totalDue: feeItems.filter((f) => f.status !== "Paid").reduce((sum, f) => sum + f.amount, 0),
    overdue: feeItems.filter((f) => f.status === "Overdue").reduce((sum, f) => sum + f.amount, 0),
    paid: feeItems.filter((f) => f.status === "Paid").reduce((sum, f) => sum + f.amount, 0),
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Fee Payment</h1>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
            View and pay your child's school fees
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Due</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            ₹{stats.totalDue.toLocaleString()}
          </p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Overdue</p>
          <p className="mt-2 text-3xl font-bold text-red-600">₹{stats.overdue.toLocaleString()}</p>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Paid This Year</p>
          <p className="mt-2 text-3xl font-bold text-emerald-600">₹{stats.paid.toLocaleString()}</p>
        </div>
      </div>

      {/* Overdue Alert */}
      {stats.overdue > 0 && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 dark:border-red-800 dark:bg-red-900/20">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-semibold text-red-900 dark:text-red-100">Overdue Payment Alert</h3>
              <p className="mt-1 text-sm text-red-700 dark:text-red-300">
                You have ₹{stats.overdue.toLocaleString()} in overdue fees. Please pay immediately to avoid late
                charges.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Fee Items */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Fee Details</h2>
          <button
            onClick={selectAllPending}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
          >
            Select All Pending
          </button>
        </div>

        <div className="space-y-3">
          {feeItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl border p-4 transition ${
                selectedItems.includes(item.id)
                  ? "border-indigo-500 bg-indigo-50 dark:border-indigo-600 dark:bg-indigo-900/20"
                  : "border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800"
              }`}
            >
              <div className="flex items-start gap-4">
                {item.status !== "Paid" && (
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleItemSelection(item.id)}
                    className="mt-1 h-5 w-5 rounded border-neutral-300 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{item.description}</h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        Due Date: {new Date(item.dueDate).toLocaleDateString()}
                        {item.paidDate && ` • Paid on: ${new Date(item.paidDate).toLocaleDateString()}`}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        ₹{item.amount.toLocaleString()}
                      </p>
                      <div className="mt-1">
                        <StatusChip
                          status={item.status === "Paid" ? "success" : item.status === "Overdue" ? "error" : "warning"}
                          label={item.status}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Summary */}
      {selectedItems.length > 0 && (
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-800 dark:bg-indigo-900/20">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-indigo-900 dark:text-indigo-100">
                {selectedItems.length} item(s) selected
              </p>
              <p className="mt-1 text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                Total: ₹{totalAmount.toLocaleString()}
              </p>
            </div>
            <button
              onClick={handlePayment}
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-teal-700"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      )}

      {/* Payment History */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-card dark:border-neutral-800 dark:bg-neutral-900">
        <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">Payment History</h2>
        <div className="space-y-3">
          {feeItems
            .filter((item) => item.status === "Paid")
            .map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800"
              >
                <div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">{item.description}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Paid on: {item.paidDate && new Date(item.paidDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-neutral-900 dark:text-neutral-100">₹{item.amount.toLocaleString()}</p>
                  <button className="mt-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700">
                    Download Receipt
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Payment Modal */}
      <ModalDrawer open={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} title="Complete Payment">
        <div className="space-y-6">
          {/* Amount Summary */}
          <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-800">
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Amount</p>
            <p className="mt-1 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
              ₹{totalAmount.toLocaleString()}
            </p>
          </div>

          {/* Payment Method Selection */}
          <div>
            <label className="mb-3 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Select Payment Method
            </label>
            <div className="grid gap-3 sm:grid-cols-2">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setSelectedPaymentMethod(method.id)}
                  className={`rounded-xl border-2 p-4 text-left transition ${
                    selectedPaymentMethod === method.id
                      ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20"
                      : "border-neutral-200 bg-white hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{method.icon}</span>
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">{method.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Details Form */}
          {selectedPaymentMethod === "card" && (
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedPaymentMethod === "upi" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300">UPI ID</label>
              <input
                type="text"
                placeholder="yourname@upi"
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
              />
            </div>
          )}

          {/* Pay Button */}
          <button
            onClick={processPayment}
            disabled={!selectedPaymentMethod || isProcessing}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-indigo-700 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? "Processing..." : `Pay ₹${totalAmount.toLocaleString()}`}
          </button>

          <p className="text-center text-xs text-neutral-600 dark:text-neutral-400">
            🔒 Your payment is secure and encrypted
          </p>
        </div>
      </ModalDrawer>
    </div>
  );
};
