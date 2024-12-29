import "./App.css";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmpoyeeDashboard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider.jsx";
function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const authData = useContext(AuthContext);
  // console.log(authData.admin);
  // console.log(authData.employees);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(JSON.parse(loggedInUser).role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find(
        (admin) => admin.email === email && admin.password === password
      )
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUSER", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find(
        (employee) => employee.email === email && employee.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUser(employee);
        localStorage.setItem(
          "loggedInUSER",
          JSON.stringify({ role: "employee" })
        );
      }
    } else {
      alert("Invalid email/password");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard />
      ) : user === "employee" ? (
        <EmployeeDashboard data={loggedInUser} />
      ) : null}
    </>
  );
}

export default App;
