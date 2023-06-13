import CardSection from "../Component/CardSection";
import ContactUsSection from "../Component/ContactUsSection";
import address from "../assets/Address.svg";
import tell from "../assets/Tell.svg";
import mail from "../assets/mail.svg";
function ContactUs() {
  return (
    <div>
      <h1 className="pt-7 text-2xl font-extrabold"> Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-5 justify-center my-10 ">
        <CardSection content="Tehran. Pasdaran.NikBrand" subject="Address"  icon={address}/>
        <CardSection content="sahar.gandomkar@gmail.com" subject="E-Mail" icon={mail}/>
        <CardSection content="09190221709" subject="Tell" icon={tell}/>
      </div>
      <ContactUsSection/>
    </div>
  );
}

export default ContactUs;
