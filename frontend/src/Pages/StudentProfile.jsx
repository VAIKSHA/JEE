import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaSearch, FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const pieData = [
  { name: "Revenue", value: 486, color: "#4CAF50" },
  { name: "Other", value: 100, color: "#FF9800" },
];

const classData = [
  { name: "March", classes: 50, revenue: 150 },
  { name: "April", classes: 80, revenue: 200 },
  { name: "May", classes: 60, revenue: 180 },
];

const styles = {
  studentProfile: {
    background: "#f8f9fa",
    minHeight: "100vh",
  },
  sidebar: {
    height: "100vh",
    padding: "20px",
    backgroundColor: "#343a40",
    color: "white",
  },
  profileCard: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  profileImg: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  card: {
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  listGroupItem: {
    fontSize: "16px",
    fontWeight: "500",
  },
  mainContent: {
    marginTop: "20px",
  },
  rightSidebar: {
    background: "#ffffff",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  inputGroup: {
    width: "25%",
  },
  input: {
    borderRadius: "20px 0 0 20px",
    border: "1px solid #ced4da",
  },
  inputGroupText: {
    borderRadius: "0 20px 20px 0",
    background: "#4CAF50",
    color: "white",
    cursor: "pointer",
  },
  badgePrimary: {
    background: "#007bff",
    fontSize: "14px",
    padding: "5px 10px",
  },
  badgeSuccess: {
    background: "#28a745",
    fontSize: "14px",
    padding: "5px 10px",
  },
};

const StudentProfile = () => {
  return (
    <div style={styles.studentProfile} className="d-flex vh-100">
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div className="d-flex align-items-center mb-4">
          <FaBars className="me-2" />
          <h5>Dashboard</h5>
        </div>
        <nav>
          <a href="/" className="d-block py-2 px-3 bg-secondary rounded">Customers</a>
          <a href="/" className="d-block py-2 px-3 text-white">Classes</a>
          <a href="/" className="d-block py-2 px-3 text-white">Payments</a>
          <a href="/" className="d-block py-2 px-3 text-white">Insights</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={styles.mainContent} className="flex-grow-1 p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Profile</h4>
          <div className="input-group" style={styles.inputGroup}>
            <input type="text" className="form-control" placeholder="Search classes..." style={styles.input} />
            <span className="input-group-text" style={styles.inputGroupText}><FaSearch /></span>
          </div>
        </div>

        {/* Profile Section */}
        <div style={styles.profileCard} className="card p-4 mb-4">
          <div className="d-flex align-items-center">
            <img
              src="https://yt3.googleusercontent.com/QlQ4UNcVy35HM9mzlBWYYk7rsZHP8FLLBACTvB0AzVQsie3kZozuLGoMGUCyElGgDCrO5gJnIA=s900-c-k-c0x00ffffff-no-rj"
              alt="Student"
              style={styles.profileImg}
              className="me-3"
            />
            <div>
              <h5>Vishal Sharma</h5>
              <p className="text-muted">📩 vs6143214@gmail.com</p>
              <p className="text-muted">📞 9905911636</p>
              <span style={styles.badgePrimary} className="badge me-2">Class 12th</span>
              <span style={styles.badgeSuccess} className="badge">Student</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="row">
          <div className="col-md-4">
            <div style={styles.card} className="card p-4">
              <h5>Active Courses</h5>
              <ul className="list-unstyled">
                <li>🔹 Bullet Point</li>
                <li>🔹 Bullet Point</li>
                <li>🔹 Bullet Point</li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 text-center">
            <div style={styles.card} className="card p-4">
              <h5>Syllabus Cover</h5>
              <PieChart width={180} height={180}>
                <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              <p className="fw-bold mt-2">80%</p>
            </div>
          </div>
        </div>

        {/* Revenue vs Classes Graph */}
        <div style={styles.card} className="card p-4 mt-4">
          <h5>Performance</h5>
          <ResponsiveContainer width="80%" height={300}>
            <BarChart data={classData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="classes" fill="#4CAF50" />
              <Bar dataKey="revenue" fill="#FF9800" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

export default StudentProfile;