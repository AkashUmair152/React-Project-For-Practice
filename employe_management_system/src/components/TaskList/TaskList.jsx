const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap"
    >
      <div className=" flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="bg-red-600 px-3 p-1 rounded text-sm">High</h2>
          <h4 className="text-base">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a Practice Project</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in,
          inventore quisquam illo quis modi!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
