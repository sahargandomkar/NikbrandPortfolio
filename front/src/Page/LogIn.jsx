function LogIn() {
  return (
    <div>
      <div className="bg-slate-50 w-[30%] rounded-md px-8 py-9 mx-auto mt-10">
        <h1 className="text-lg font-bold py-2 text-slate-900">LogIn</h1>
        <div>
          <form className="  flex flex-col items-center">
            <input
              type="email"
              placeholder="inter your email"
              className="bg-slate-800 text-purple-200 w-[90%] p-3 my-3 rounded-md"
            />
            <input
              type="password"
              placeholder="inter your Password"
              className="bg-slate-800 text-purple-200 w-[90%] p-3 my-3 rounded-md"
            />

            <button
              type="submit"
              className="bg-purple-600 text-purple-200 w-[90%] p-3 my-3 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
