import React, { useMemo, useState } from "react";
import clsx from "clsx";

type SortDirection = "asc" | "desc" | null;

interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
  align?: "left" | "center" | "right";
}

interface DataTableProps<T extends Record<string, unknown>> {
  data?: T[];
  columns: Column<T>[];
  caption?: string;
  rows?: any[];
}

export const DataTable = <T extends Record<string, unknown>>({ data, columns, caption, rows }: DataTableProps<T>) => {
  // Support both data and rows props for backward compatibility
  const tableData = (data || rows || []) as T[];
  const [sortKey, setSortKey] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const sortedData = useMemo(() => {
    if (!sortKey || !sortDirection) return tableData;
    return [...tableData].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (aValue === bValue) return 0;
      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1;
      }
      return aValue > bValue ? -1 : 1;
    });
  }, [tableData, sortDirection, sortKey]);

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDirection(prev => (prev === "asc" ? "desc" : prev === "desc" ? null : "asc"));
      if (sortDirection === "desc") {
        setSortKey(null);
      }
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card dark:border-neutral-800 dark:bg-neutral-900">
      <table className="min-w-full divide-y divide-neutral-200 text-sm dark:divide-neutral-800">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead className="bg-neutral-50/80 dark:bg-neutral-900/60">
          <tr>
            {columns.map(column => {
              const isSorted = sortKey === column.key;
              const direction = isSorted ? sortDirection : null;
              return (
                <th
                  key={String(column.key)}
                  scope="col"
                  className={clsx(
                    "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400",
                    column.align === "center" && "text-center",
                    column.align === "right" && "text-right"
                  )}
                >
                  {column.sortable ? (
                    <button
                      type="button"
                      onClick={() => handleSort(column.key)}
                      className="inline-flex items-center gap-1 rounded-lg px-2 py-1 transition hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                    >
                      {(column as any).header || (column as any).label || String(column.key)}
                      <span aria-hidden>
                        {direction === "asc" ? "▲" : direction === "desc" ? "▼" : ""}
                      </span>
                      <span className="sr-only">
                        {direction === "asc" ? "sorted ascending" : direction === "desc" ? "sorted descending" : "activate to sort"}
                      </span>
                    </button>
                  ) : (
                    (column as any).header || (column as any).label || String(column.key)
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 bg-white dark:divide-neutral-800 dark:bg-neutral-900">
          {sortedData.map((row, index) => (
            <tr key={index} className="transition hover:bg-primary-50/50 dark:hover:bg-neutral-800/60">
              {columns.map(column => (
                <td
                  key={String(column.key)}
                  className={clsx(
                    "px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200",
                    column.align === "center" && "text-center",
                    column.align === "right" && "text-right"
                  )}
                >
                  {column.render ? column.render(row[column.key], row) : String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
