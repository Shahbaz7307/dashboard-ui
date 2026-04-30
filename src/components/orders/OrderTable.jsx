import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import Table from "../ui/Table";

const statusStyles = {
  pending: "bg-warning/10 text-warning",
  shipped: "bg-primary/10 text-primary",
  delivered: "bg-success/10 text-success",
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const OrdersTable = ({ orders, loading, onDelete }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {}, [search, filter]);

  const filtered = orders.filter((o) => {
    const matchesSearch = o.customer
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "all" || o.status === filter;

    return matchesSearch && matchesFilter;
  });

  const columns = [
    {
      key: "id",
      title: "Order ID",
    },
    {
      key: "customer",
      title: "Customer",
    },
    {
      key: "amount",
      title: "Amount",
      render: (row) => <span className="font-medium">${row.amount}</span>,
    },
    {
      key: "status",
      title: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-xs ${statusStyles[row.status]}`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "date",
      title: "Date",
      render: (row) => (
        <span className="text-text-secondary">{formatDate(row.date)}</span>
      ),
    },
    {
      key: "action",
      title: "",
      render: (row) => (
        <button
          onClick={() => onDelete(row.id)}
          className="p-2 rounded hover:bg-card"
        >
          <Trash2 className="h-4 w-4 hover:text-danger" />
        </button>
      ),
    },
  ];

  if (loading) return <p>Loading orders...</p>;

  return (
    <div className="bg-card border border-border rounded-xl p-4 space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border border-border rounded-lg bg-background text-sm w-full sm:w-64"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-3 py-2 border border-border rounded-lg bg-background text-sm"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-10 text-text-secondary">
          No orders found
        </div>
      ) : (
        <Table columns={columns} data={filtered} />
      )}
    </div>
  );
};

export default OrdersTable;
