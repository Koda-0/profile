
import React, { useState } from "react";
import "./dash.css"; // make sure to create this CSS file

export default function AdminDashboard() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Projects", key: "projects" },
    { name: "About", key: "about" },
    { name: "Contact", key: "contact" },
  ];

  const stats = [
    { title: "Projects", value: 12 },
    { title: "Visitors", value: 1500 },
    { title: "Messages", value: 45 },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">Admin</div>
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`menu-item ${active === item.key ? "active" : ""}`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <h1 className="page-title">{active.charAt(0).toUpperCase() + active.slice(1)}</h1>

        {active === "dashboard" && (
          <div className="stats-cards">
            {stats.map((stat) => (
              <div key={stat.title} className="card">
                <h2>{stat.title}</h2>
                <p>{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {active !== "dashboard" && (
          <div className="placeholder">
            <p>Manage your {active} content here.</p>
          </div>
        )}
      </main>
    </div>
  );
}
