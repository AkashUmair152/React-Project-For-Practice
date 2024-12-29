import AllTasks from "../others/AllTasks";
import CreateTasks from "../others/CreateTasks";
import Header from "../others/Header";
const AdminDashboard = () => {
  return (
    <div className="p-10 w-full h-screen">
      <Header />
      <CreateTasks />
      <AllTasks />
    </div>
  );
};

export default AdminDashboard;
