"use client";

import { useEffect, useState } from "react";
import { Package, CheckCircle, AlertCircle, Archive, MapPin } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import Spinner from "../Componants/Spinner";

export default function AnalyticsPage() {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/items/analytics`);
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  
  // Bar chart data for totals
  const barData = [
    { name: "Total", count: stats.totalItems, color: "#2C7BE5" },
    { name: "Lost", count: stats.lostItems, color: "#0D6EFD" },
    { name: "Found", count: stats.foundItems, color: "#20C997" },
    { name: "Recovered", count: stats.recoveredItems, color: "#28A745" },
    { name: "Unrecovered", count: stats.unrecoveredItems, color: "#DC3545" },
  ];
  
  // Pie chart data for categories
  const categoryData = stats.categories
  ? Object.entries(stats.categories).map(([key, value]) => ({
    name: key,
    value,
  }))
  : [];
  
  if (loading) return <Spinner />

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-green-50 pt-25">
      <h1 className="text-4xl font-bold text-[#2C7BE5] mb-8 text-center">Item Analytics</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        <Card title="Total Items" value={stats.totalItems} color="#2C7BE5" Icon={Package} />
        <Card title="Lost Items" value={stats.lostItems} color="#0D6EFD" Icon={Archive} />
        <Card title="Found Items" value={stats.foundItems} color="#20C997" Icon={Package} />
        <Card title="Recovered" value={stats.recoveredItems} color="#28A745" Icon={CheckCircle} />
        <Card title="Unrecovered" value={stats.unrecoveredItems} color="#DC3545" Icon={AlertCircle} />
      </div>

      {/* Bar Chart */}
      <div className="w-full h-96 p-6 rounded-2xl shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 mb-10">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" label={{ position: "top" }}>
              {barData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart for Categories */}
      <div className="w-full h-[500px] p-6 rounded-2xl shadow-xl bg-white/40 backdrop-blur-lg border border-white/30">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Items by Category</h2>
        <ResponsiveContainer width="100%" height="70%">
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#2C7BE5", "#28A745", "#0D6EFD", "#DC3545", "#20C997"][index % 5]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* Category counts below the chart */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          {Object.entries(stats.categories || {}).map(([key, value], index) => (
            <div
              key={key}
              className="px-3 py-1 rounded-full text-white font-semibold"
              style={{
                backgroundColor: ["#2C7BE5", "#28A745", "#0D6EFD", "#DC3545", "#20C997"][index % 5],
              }}
            >
              {key}: {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Card component
const Card = ({ title, value, color, Icon }) => (
  <div className="p-6 rounded-2xl shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 flex items-center gap-4 hover:scale-105 transition">
    <div className="p-3 rounded-full" style={{ backgroundColor: color }}>
      <Icon className="text-white" size={32} />
    </div>
    <div>
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className="text-3xl font-bold" style={{ color }}>{value}</p>
    </div>
  </div>
);
