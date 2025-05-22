import React, { useContext, useEffect, useState } from "react";
import "../pages/Home.css";
import "./UserDashboard.css";
import OrderHistory from "./OrderHistory";
import Profile from "./Profile";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="home">
      <div className="header">
        <h1>Welcome From User Dashboard</h1>
      </div>

      <div className="user-main">
        <div className="m-header">
          <a
            className={activeTab === "profile" ? "active-tab" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </a>
          <a
            className={activeTab === "history" ? "active-tab" : ""}
            onClick={() => setActiveTab("history")}
          >
            Payment History
          </a>
        </div>

        <div className="m-main">
          {activeTab === "profile" && <Profile />}

          {activeTab === "history" && <OrderHistory />}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
