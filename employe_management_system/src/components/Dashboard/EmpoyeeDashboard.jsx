import Header from "../others/Header";
import TaskListNumbers from "../others/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmpoyeeDashboard = ({ data }) => {
  console.log(data);
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmpoyeeDashboard;
