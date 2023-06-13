import picture from "../assets/26.jpg";
import ContactUsForm from "./ContactUsForm";

function ContactUsSection() {
  return (
    <div className=" bg-slate-900  max-w-6xl   mx-auto text-center mb-8 mt-0 px-10 p-10 rounded-xl border border-violet-500">
      <h3 className="my-8 text-4xl text-center  font-bold text-white font-sans capitalize">
        any question? write or call us
      </h3>
      <div className="flex flex-col md:flex-row justify-center w-full md:gap-3 my-9">
        <div className="md:w-1/2">
          <img
            src={picture}
            alt="contactUs"
            className="w-full mx-auto rounded-3xl "
          />
        </div>
        <div className="md:w-1/2">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
