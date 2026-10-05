"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  RefreshCw,
  LogOut,
  Mail,
  Trash2,
  Eye,
  CheckCircle2,
  Clock3,
  Users,
  X,
  Download,
} from "lucide-react";

type Enquiry = {
  id: string;
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  status: string;
  created_at: string;
};

const STATUS_OPTIONS = [
  "all",
  "new",
  "contacted",
  "in_progress",
  "completed",
  "cancelled",
];

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selected, setSelected] = useState<Enquiry | null>(null);
  const [error, setError] = useState("");

  async function loadEnquiries(showLoader = true) {
    try {
      if (showLoader) {
        setLoading(true);
      } else {
        setRefreshing(true);
      }

      setError("");

      const response = await fetch("/api/admin/enquiries", {
        method: "GET",
        cache: "no-store",
      });

      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to load enquiries."
        );
      }

      setEnquiries(result.enquiries || []);
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Unable to load enquiries."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    loadEnquiries();
  }, []);

  async function updateStatus(id: string, status: string) {
    try {
      const response = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status,
        }),
      });

      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to update enquiry."
        );
      }

      setEnquiries((current) =>
        current.map((item) =>
          item.id === id
            ? {
                ...item,
                status,
              }
            : item
        )
      );

      setSelected((current) =>
        current && current.id === id
          ? {
              ...current,
              status,
            }
          : current
      );
    } catch (reason) {
      alert(
        reason instanceof Error
          ? reason.message
          : "Unable to update enquiry."
      );
    }
  }

  async function deleteEnquiry(id: string) {
    const confirmed = window.confirm(
      "Delete this enquiry permanently?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(
        `/api/admin/enquiries?id=${encodeURIComponent(id)}`,
        {
          method: "DELETE",
        }
      );

      if (response.status === 401) {
        window.location.href = "/admin/login";
        return;
      }

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to delete enquiry."
        );
      }

      setEnquiries((current) =>
        current.filter((item) => item.id !== id)
      );

      setSelected(null);
    } catch (reason) {
      alert(
        reason instanceof Error
          ? reason.message
          : "Unable to delete enquiry."
      );
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    window.location.href = "/admin/login";
  }

  function exportCsv() {
    if (!filteredEnquiries.length) {
      return;
    }

    const headers = [
      "Name",
      "Email",
      "Service",
      "Budget",
      "Message",
      "Status",
      "Created At",
    ];

    const rows = filteredEnquiries.map((item) => [
      item.name,
      item.email,
      item.service,
      item.budget,
      item.message,
      item.status,
      new Date(item.created_at).toLocaleString(),
    ]);

    const csv = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map((value) => `"${String(value).replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `team-sheriya-enquiries-${new Date()
      .toISOString()
      .slice(0, 10)}.csv`;

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  }

  const filteredEnquiries = useMemo(() => {
    const query = search.trim().toLowerCase();

    return enquiries.filter((item) => {
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.service.toLowerCase().includes(query) ||
        item.message.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === "all" ||
        item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [enquiries, search, statusFilter]);

  const stats = {
    total: enquiries.length,
    new: enquiries.filter((item) => item.status === "new").length,
    contacted: enquiries.filter(
      (item) => item.status === "contacted"
    ).length,
    completed: enquiries.filter(
      (item) => item.status === "completed"
    ).length,
  };

  function statusLabel(status: string) {
    return status
      .replaceAll("_", " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <div className="admin-brand">
            team<span>sheriya</span>•
          </div>

          <p>Enquiry Management</p>
        </div>

        <div className="admin-header-actions">
          <button
            type="button"
            onClick={() => loadEnquiries(false)}
            disabled={refreshing}
            className="admin-secondary-button"
          >
            <RefreshCw
              size={16}
              className={refreshing ? "admin-spin" : ""}
            />
            Refresh
          </button>

          <button
            type="button"
            onClick={logout}
            className="admin-logout-button"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>

      <section className="admin-content">
        {error && (
          <div className="admin-page-error">
            {error}
          </div>
        )}

        <div className="admin-stats">
          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              <Users size={20} />
            </div>

            <div>
              <span>Total enquiries</span>
              <strong>{stats.total}</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              <Clock3 size={20} />
            </div>

            <div>
              <span>New</span>
              <strong>{stats.new}</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              <Mail size={20} />
            </div>

            <div>
              <span>Contacted</span>
              <strong>{stats.contacted}</strong>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              <CheckCircle2 size={20} />
            </div>

            <div>
              <span>Completed</span>
              <strong>{stats.completed}</strong>
            </div>
          </div>
        </div>

        <section className="admin-panel">
          <div className="admin-toolbar">
            <div className="admin-search">
              <Search size={18} />

              <input
                type="search"
                placeholder="Search enquiries..."
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
              />
            </div>

            <div className="admin-toolbar-right">
              <select
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(event.target.value)
                }
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status === "all"
                      ? "All statuses"
                      : statusLabel(status)}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={exportCsv}
                className="admin-export-button"
              >
                <Download size={16} />
                Export CSV
              </button>
            </div>
          </div>

          {loading ? (
            <div className="admin-empty-state">
              <RefreshCw
                size={28}
                className="admin-spin"
              />
              <p>Loading enquiries...</p>
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="admin-empty-state">
              <Mail size={30} />
              <h3>No enquiries found</h3>
              <p>
                New enquiries submitted through the website
                will appear here.
              </p>
            </div>
          ) : (
            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Enquiry</th>
                    <th>Service</th>
                    <th>Budget</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th />
                  </tr>
                </thead>

                <tbody>
                  {filteredEnquiries.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <div className="admin-person">
                          <strong>{item.name}</strong>
                          <span>{item.email}</span>
                        </div>
                      </td>

                      <td>{item.service}</td>

                      <td>{item.budget}</td>

                      <td>
                        <select
                          className={`admin-status-select status-${item.status}`}
                          value={item.status}
                          onChange={(event) =>
                            updateStatus(
                              item.id,
                              event.target.value
                            )
                          }
                        >
                          {STATUS_OPTIONS.filter(
                            (status) => status !== "all"
                          ).map((status) => (
                            <option
                              key={status}
                              value={status}
                            >
                              {statusLabel(status)}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td>
                        {new Date(
                          item.created_at
                        ).toLocaleDateString()}
                      </td>

                      <td>
                        <div className="admin-row-actions">
                          <button
                            type="button"
                            onClick={() =>
                              setSelected(item)
                            }
                            title="View enquiry"
                          >
                            <Eye size={17} />
                          </button>

                          <a
                            href={`mailto:${item.email}`}
                            title="Reply by email"
                          >
                            <Mail size={17} />
                          </a>

                          <button
                            type="button"
                            onClick={() =>
                              deleteEnquiry(item.id)
                            }
                            title="Delete enquiry"
                            className="admin-danger-icon"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </section>

      {selected && (
        <div
          className="admin-modal-backdrop"
          onMouseDown={() => setSelected(null)}
        >
          <div
            className="admin-modal"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <div className="admin-modal-header">
              <div>
                <span>ENQUIRY DETAILS</span>
                <h2>{selected.name}</h2>
              </div>

              <button
                type="button"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="admin-modal-details">
              <div>
                <span>Email</span>
                <a href={`mailto:${selected.email}`}>
                  {selected.email}
                </a>
              </div>

              <div>
                <span>Service</span>
                <strong>{selected.service}</strong>
              </div>

              <div>
                <span>Budget</span>
                <strong>{selected.budget}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {statusLabel(selected.status)}
                </strong>
              </div>

              <div className="admin-message">
                <span>Project message</span>
                <p>{selected.message}</p>
              </div>

              <div>
                <span>Submitted</span>
                <strong>
                  {new Date(
                    selected.created_at
                  ).toLocaleString()}
                </strong>
              </div>
            </div>

            <div className="admin-modal-actions">
              <a
                href={`mailto:${selected.email}?subject=${encodeURIComponent(
                  "Re: Your enquiry to Team Sheriya"
                )}`}
                className="admin-modal-primary"
              >
                <Mail size={17} />
                Reply by email
              </a>

              <button
                type="button"
                onClick={() =>
                  updateStatus(
                    selected.id,
                    "contacted"
                  )
                }
                className="admin-modal-secondary"
              >
                Mark contacted
              </button>

              <button
                type="button"
                onClick={() =>
                  deleteEnquiry(selected.id)
                }
                className="admin-modal-danger"
              >
                <Trash2 size={17} />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}