import React, { useState } from 'react';

interface Column {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}

interface ModernTableProps {
  columns: Column[];
  data: any[];
  selectable?: boolean;
  onSelectionChange?: (selected: any[]) => void;
  striped?: boolean;
  compact?: boolean;
  hover?: boolean;
}

export const ModernTable: React.FC<ModernTableProps> = ({
  columns,
  data,
  selectable = false,
  onSelectionChange,
  striped = false,
  compact = false,
  hover = true,
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<any>>(new Set());
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(data);
      setSelectedRows(newSelected);
      onSelectionChange?.(Array.from(newSelected));
    } else {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    }
  };

  const handleSelectRow = (row: any, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(row);
    } else {
      newSelected.delete(row);
    }
    setSelectedRows(newSelected);
    onSelectionChange?.(Array.from(newSelected));
  };

  const handleSort = (columnKey: string) => {
    if (sortColumn === columnKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(columnKey);
      setSortDirection('asc');
    }
  };

  const sortedData = React.useMemo(() => {
    if (!sortColumn) return data;
    
    return [...data].sort((a, b) => {
      const aVal = a[sortColumn];
      const bVal = b[sortColumn];
      
      if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-neutral-50 dark:bg-dark-200 border-b border-neutral-200 dark:border-dark-300">
          <tr>
            {selectable && (
              <th className={`text-left ${compact ? 'px-3 py-2' : 'px-6 py-3'}`}>
                <input
                  type="checkbox"
                  checked={selectedRows.size === data.length && data.length > 0}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={`
                  text-left text-sm font-semibold text-neutral-700 dark:text-neutral-300
                  ${compact ? 'px-3 py-2' : 'px-6 py-3'}
                  ${column.sortable ? 'cursor-pointer hover:bg-neutral-100 dark:hover:bg-dark-300' : ''}
                `}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.label}
                  {column.sortable && (
                    <span className="text-neutral-400">
                      {sortColumn === column.key ? (sortDirection === 'asc' ? '↑' : '↓') : '↕'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`
                border-b border-neutral-200 dark:border-dark-300
                ${striped && rowIndex % 2 === 1 ? 'bg-neutral-50 dark:bg-dark-200' : ''}
                ${hover ? 'hover:bg-neutral-100 dark:hover:bg-dark-200' : ''}
                transition-colors
              `}
            >
              {selectable && (
                <td className={compact ? 'px-3 py-2' : 'px-6 py-4'}>
                  <input
                    type="checkbox"
                    checked={selectedRows.has(row)}
                    onChange={(e) => handleSelectRow(row, e.target.checked)}
                    className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                  />
                </td>
              )}
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`
                    text-sm text-neutral-900 dark:text-white
                    ${compact ? 'px-3 py-2' : 'px-6 py-4'}
                  `}
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface ModernBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  className?: string;
}

export const ModernBadge: React.FC<ModernBadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  className = '',
}) => {
  const variantClasses = {
    primary: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800',
    secondary: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 border-secondary-200 dark:border-secondary-800',
    success: 'bg-success-100 dark:bg-success-900/30 text-success-700 dark:text-success-300 border-success-200 dark:border-success-800',
    warning: 'bg-warning-100 dark:bg-warning-900/30 text-warning-700 dark:text-warning-300 border-warning-200 dark:border-warning-800',
    error: 'bg-error-100 dark:bg-error-900/30 text-error-700 dark:text-error-300 border-error-200 dark:border-error-800',
    neutral: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm',
    lg: 'px-3 py-1.5 text-base',
  };

  const dotColors = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    neutral: 'bg-neutral-500',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full border font-medium
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`}></span>}
      {children}
    </span>
  );
};
