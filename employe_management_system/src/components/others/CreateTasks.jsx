
const CreateTasks = () => {
  return (
    <div className="p-5 rounded bg-[#1c1c1c] mt-7">
      <form className=" w-full flex-wrap flex items-start justify-between ">
        {/* tasks input section  */}
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Make a ui design"
              className="text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              type="date"
              className="text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
            />
          </div>
          <div>
            <h3>Assign To</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder="Empolyee Name"
              className="text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
            />
          </div>
          <div>
            <h3>Category</h3>
            <input
              type="text"
              name=""
              id=""
              placeholder=" design, dev, etc"
              className="text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 "
            />
          </div>
        </div>
        {/* Description div  */}
        <div className="w-2/5 flex flex-col items-start  ">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            name=""
            id=""
            placeholder=""
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-green-400 "
          ></textarea>
          <button className="bg-emerald-400 py-3 px-5 hover:bg-emerald-600 mt-4 text-sm rounded w-full ">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTasks;
