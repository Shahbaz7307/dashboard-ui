import { useEffect, useState } from "react";
import { Eye, Trash2, Pencil } from "lucide-react";
import Button from "../ui/Button";
import Table from "../ui/Table";
import { formatDisplayDate } from "../../utils/date";
import TableSkeleton from "../ui/TableSkeleton";

const statusStyles = {
  running: "bg-primary/10 text-primary",
  pending: "bg-warning/10 text-warning",
  completed: "bg-success/10 text-success",
};

const ITEMS_PER_PAGE = 3;

const RecentProjects = ({ projects, loading, onDelete, onEdit }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search, filter]);

  const filteredData = projects.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter = filter === "all" || item.status === filter;

    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const columns = [
    {
      key: "name",
      title: "Project",
      render: (row) => (
        <span className="font-medium text-text-primary">{row.name}</span>
      ),
    },
    {
      key: "status",
      title: "Status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded-md text-xs font-medium ${
            statusStyles[row.status]
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "due",
      title: "Due Date",
      render: (row) => (
        <span className="text-text-secondary">
          {formatDisplayDate(row.due)}
        </span>
      ),
    },
    {
      key: "action",
      title: "",
      render: (row) => (
        <div className="flex gap-2 justify-end">
          <button className="p-2 opacity-50 cursor-not-allowed">
            <Eye className="h-4 w-4" />
          </button>
          <button
            onClick={() => onEdit?.(row)}
            className="p-2 rounded-md hover:bg-card transition"
            title="Edit"
          >
            <Pencil className="h-4 w-4 text-text-secondary hover:text-primary" />
          </button>

          <button
            onClick={() => onDelete(row.id)}
            className="p-2 rounded-md hover:bg-card transition"
            title="Delete"
          >
            <Trash2 className="h-4 w-4 text-text-secondary hover:text-danger" />
          </button>
        </div>
      ),
    },
  ];

  if (loading) {
    return <TableSkeleton />;
  }

  return (
    <div className="bg-card border border-border rounded-xl p-4 shadow-[var(--shadow-card)] space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <input
          type="text"
          placeholder="Search projects..."
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
          <option value="running">Running</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center py-10 text-text-secondary">
          No projects found
        </div>
      ) : (
        <Table columns={columns} data={paginatedData} />
      )}

      <div className="flex justify-between items-center">
        <p className="text-sm text-text-secondary">
          Page {page} of {totalPages || 1}
        </p>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
          >
            Prev
          </Button>

          <Button
            size="sm"
            variant="outline"
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
