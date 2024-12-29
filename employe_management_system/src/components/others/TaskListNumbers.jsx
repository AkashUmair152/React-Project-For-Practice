const TaskListNumbers = ({ data }) => {
  console.log(data);
  const { active, newTask, completed, failed } = data.taskCounts;
  return (
    <div className=" flex mt-10 justify-between gap-5 w-[100%]">
      <div className="rounded-xl w-[45%] text-white py-5 px-10 bg-red-400">
        <h2 className="text-3xl font-semibold">{active}</h2>
        <h3 className="text-xl font-medium">Active Tasks</h3>
      </div>
      <div className="rounded-xl w-[45%] text-white py-5 px-10 bg-blue-400">
        <h2 className="text-3xl font-semibold">{newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="rounded-xl w-[45%] text-white py-5 px-10 bg-green-400">
        <h2 className="text-3xl font-semibold">{completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl w-[45%] text-white py-5 px-10 bg-yellow-400">
        <h2 className="text-3xl font-semibold">{failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
