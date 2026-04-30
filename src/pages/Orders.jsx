import { useState, useEffect } from "react";
import OrdersTable from "../components/orders/OrderTable";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOrders([
        {
          id: 1,
          customer: "John Doe",
          amount: 120,
          status: "pending",
          date: "2026-08-10",
        },
        {
          id: 2,
          customer: "Jane Smith",
          amount: 250,
          status: "delivered",
          date: "2026-08-12",
        },
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const handleDelete = (id) => {
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-text-primary">Orders</h1>

      <OrdersTable orders={orders} loading={loading} onDelete={handleDelete} />
    </div>
  );
};

export default Orders;
