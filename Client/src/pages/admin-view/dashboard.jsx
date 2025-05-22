import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminStats } from "@/store/admin/stats-slice";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

function StatCard({ label, value, icon }) {
  return (
    <div className="p-4 bg-white shadow rounded border-l-4 border-blue-500">
      <h3 className="text-sm text-gray-500">{label}</h3>
      <p className="text-2xl font-bold">{value}</p>
      <span>{icon}</span>
    </div>
  );
}

const Dashboard = () => {
  const dispatch = useDispatch();
  const adminStats = useSelector((state) => state.adminStats) || { data: null, loading: false, error: null };
  const { data, loading, error } = adminStats;

  useEffect(() => {
    dispatch(fetchAdminStats());
  }, [dispatch]);

  // Fallback về mảng rỗng nếu chưa có dữ liệu
  const topProductsData = data?.topProducts || [];
  const purchaseSalesData = data?.purchaseSalesData || [];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data available.</div>;

  return (
    <div className="flex">
      <div className="w-full p-8">
        <div className="grid grid-cols-4 gap-6 mb-10">
          <StatCard label="TOTAL PRODUCTS" value={data.totalProducts || 0} icon="📊" />
          <StatCard label="TOTAL ORDERS" value={data.totalOrders || 0} icon="🛒" />
          <StatCard label="TOTAL SALES" value={data.totalSales || 0} icon="💰" />
          <StatCard label="TOTAL USERS" value={data.totalUsers || 0} icon="👥" />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">Top 5 Products</h3>
            {topProductsData.length > 0 ? (
              <BarChart width={500} height={350} data={topProductsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#36A2EB" />
              </BarChart>
            ) : (
              <p>No top products data available.</p>
            )}
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-lg font-semibold mb-4">Purchase & Sales Orders</h3>
            {purchaseSalesData.length > 0 ? (
              <LineChart width={500} height={350} data={purchaseSalesData}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid stroke="#eee" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="purchase" stroke="#36A2EB" />
                <Line type="monotone" dataKey="sales" stroke="#FF6384" />
              </LineChart>
            ) : (
              <p>No purchase/sales data available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;