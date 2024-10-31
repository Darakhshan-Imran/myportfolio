
import Header from "@/components/Header"
import ContactForm from "@/app/hire/form"

const ContactMe = () => {
  return (
    <section className="bg-gradient-to-r from-[#11091c] to-[#270927] min-h-screen w-screen overflow-x-hidden 
                        flex flex-col items-center mx-0 px-0 sm:px-6 md:px-8">

    <Header/>
    <ContactForm/>

    </section>
  )
}

export default ContactMe
