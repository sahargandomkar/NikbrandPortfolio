function ContactUsForm() {
  return (
    <div>
      <div className="  rounded-md px-8  mx-auto ">
        <div>
          <form className="  flex flex-col items-center">
            <input
              type="name"
              placeholder="inter your name"
              className="bg-slate-800 text-purple-200 w-[90%] p-3 my-3 rounded-md"
            />
            <input
              type="email"
              placeholder="inter your email"
              className="bg-slate-800 text-purple-200 w-[90%] p-3 my-3 rounded-md"
            />

            <textarea
              rows="4"
              cols="50"
              type="password"
              placeholder="confirm password"
              className="bg-slate-800 text-purple-200 w-[90%] p-3 my-3 rounded-md"
            >
              inter your message
            </textarea>

            <button
              type="submit"
              className="bg-purple-600 text-purple-200 w-[90%] p-3 my-3 rounded-md capitalize"
            >
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsForm;
