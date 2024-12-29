import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <div className="border-2 border-emerald-600 p-20 rounded-xl ">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="flex flex-col items-center justify-center gap-5"
        >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="text-white border-2 border-emerald-600 rounded-full outline-none bg-transparent text-xl py-3 px-5 placeholder:text-gray-400 "
          />
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your password"
            className=" text-white border-2 border-emerald-600 rounded-full outline-none bg-transparent text-xl py-3 px-5 placeholder:text-gray-400 "
          />
          <button className=" text-white border-2 border-emerald-600 rounded-full outline-none bg-emerald-600 text-xl py-3 px-5 placeholder:text-gray-400 font-semibold ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
