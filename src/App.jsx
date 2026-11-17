import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,SetUserData] = useContext(Authcontext);

  const handleTaskAction = (taskIndex, action) => {
    const updatedEmployees = userData.map((employee) => {
      if (employee.id !== loggedInUserData?.id) {
        return employee
      }

      const task = employee.tasks[taskIndex]
      const isAcceptingNewTask = action === 'active' && task?.newTask
      const isFinishingActiveTask = ['completed', 'failed'].includes(action) && task?.active
      if (!isAcceptingNewTask && !isFinishingActiveTask) {
        return employee
      }

      const updatedTasks = employee.tasks.map((employeeTask, index) => (
        index === taskIndex
          ? {
              ...employeeTask,
              newTask: false,
              active: action === 'active',
              completed: action === 'completed',
              failed: action === 'failed',
            }
          : employeeTask
      ))
      const updatedTaskCounts = { ...employee.taskCounts }
      const previousStatus = isAcceptingNewTask ? 'newTask' : 'active'
      updatedTaskCounts[previousStatus] = Math.max(0, (Number(updatedTaskCounts[previousStatus]) || 0) - 1)
      updatedTaskCounts[action] = (Number(updatedTaskCounts[action]) || 0) + 1

      return {
        ...employee,
        tasks: updatedTasks,
        taskCounts: updatedTaskCounts,
      }
    })
    const updatedEmployee = updatedEmployees.find((employee) => employee.id === loggedInUserData?.id)
    if (!updatedEmployee) {
      return
    }

    SetUserData(updatedEmployees)
    setLoggedInUserData(updatedEmployee)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: updatedEmployee }))
  }

  useEffect(() => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        const userData = JSON.parse(loggedInUser)
        // console.log(userData)
       setUser(userData.role)
        setLoggedInUserData(userData.data)
      }
  }, []);



  

  const handlelogin = (email, password) => {

    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    }

     else if (userData) {
        const employee =  userData.find((e) => email == e.email && e.password == password)
        if(employee){
      setUser("employee");
      setLoggedInUserData(employee)
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data:employee }));
      }
      else {
      alert("Invalid Credentials");
    }
    }
    
     
  };

  return (
    <>
      {!user ? <Login handlelogin={handlelogin}  /> : ""}
      {user === "admin" && <AdminDashboard changeUser = {setUser} firstName = {"vipin"} />}
      {user === "employee" && <EmployeeDashboard changeUser = {setUser} data = {loggedInUserData} onTaskAction={handleTaskAction} />}
    </>
  );
};

export default App;
