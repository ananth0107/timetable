import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from 'lucide-react';
import { EmptyState } from './EmptyState';

export const Table = ({
  columns = [],
  data = [],
  selectable = false,
  selectedIds = [],
  onSelectRow,
  onSelectAll,
  idField = 'id',
  pageSize = 10,
  emptyTitle = 'No records found',
  emptyDescription = 'There are no items matching your criteria.',
  className = ''
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' | 'desc'

  const handleSort = (key) => {
    if (sortColumn === key) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(key);
      setSortDirection('asc');
    }
  };

  // Sorting
  const sortedData = [...data].sort((a, b) => {
    if (!sortColumn) return 0;
    const valA = a[sortColumn];
    const valB = b[sortColumn];

    if (valA === valB) return 0;
    if (valA == null) return 1;
    if (valB == null) return -1;

    if (typeof valA === 'string') {
      const cmp = valA.localeCompare(valB);
      return sortDirection === 'asc' ? cmp : -cmp;
    }
    return sortDirection === 'asc' ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
  });

  // Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize) || 1;
  const paginatedData = sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const isAllSelected = paginatedData.length > 0 && paginatedData.every(item => selectedIds.includes(item[idField]));

  if (data.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
      <div
        style={{
          overflowX: 'auto',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-light)',
          backgroundColor: 'var(--bg-surface)'
        }}
        className={className}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: '0.88rem'
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: 'var(--bg-surface-hover)',
                borderBottom: '1px solid var(--border-light)',
                color: 'var(--text-secondary)'
              }}
            >
              {selectable && (
                <th style={{ width: '44px', padding: '0.85rem 1rem' }}>
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={(e) => onSelectAll && onSelectAll(e.target.checked, paginatedData)}
                    style={{ cursor: 'pointer' }}
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key || col.header}
                  style={{
                    padding: '0.85rem 1rem',
                    fontWeight: 600,
                    cursor: col.sortable ? 'pointer' : 'default',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    width: col.width || 'auto'
                  }}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span>{col.header}</span>
                    {col.sortable && (
                      <span style={{ color: 'var(--text-muted)' }}>
                        {sortColumn === col.key ? (
                          sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                        ) : (
                          <div style={{ width: 14, height: 14 }} />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, idx) => {
              const isSelected = selectedIds.includes(row[idField]);
              return (
                <tr
                  key={row[idField] || idx}
                  className="animate-row"
                  style={{
                    borderBottom: '1px solid var(--border-light)',
                    backgroundColor: isSelected ? 'var(--primary-50)' : 'transparent',
                    transition: 'background-color var(--transition-fast)'
                  }}
                >
                  {selectable && (
                    <td style={{ padding: '0.85rem 1rem' }}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => onSelectRow && onSelectRow(row[idField], row)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                  )}
                  {columns.map((col) => (
                    <td
                      key={col.key || col.header}
                      style={{
                        padding: '0.85rem 1rem',
                        color: 'var(--text-primary)',
                        verticalAlign: 'middle'
                      }}
                    >
                      {col.render ? col.render(row[col.key], row, idx) : row[col.key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 0.25rem',
            fontSize: '0.84rem',
            color: 'var(--text-secondary)'
          }}
        >
          <span>
            Showing {(currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              className="btn btn-outline btn-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            >
              <ChevronLeft size={14} /> Prev
            </button>
            <span style={{ padding: '0 0.5rem', fontWeight: 600 }}>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="btn btn-outline btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            >
              Next <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
