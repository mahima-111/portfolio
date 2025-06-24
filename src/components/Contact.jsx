import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const form = useRef();
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;

  const notify = () =>
    toast.success("Email sent succesfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });
  const notifyError = () =>
    toast.error(`Email not sent`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        notify();
        console.log(result.text);
      },
      (error) => {
        notifyError();
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact" className="flex justify-center pt-32 pb-20">
      <div className="flex flex-col gap-4 items-center w-[80vw] md:w-[50vw]">
        <h1 className="text-4xl lg:text-5xl font-medium mb-6">Contact Me</h1>
        <h3 className="text-md text-center lg:text-lg text-gray-400">
          Feel free to reach out to me!
        </h3>
        <div className="bg-blue-950/50 border border-white/70 rounded-lg px-8 py-8 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[45vw]">
          <h4 className="text-xl lg:text-2xl font-medium mb-4">Email me</h4>
          <form
            className="flex flex-col gap-4"
            ref={form}
            onSubmit={sendEmail}
            autoComplete="off"
          >
            <input
              type="text"
              placeholder="Your name"
              required
              name="user_name"
              className="border border-white/90 px-4 py-3 rounded-lg bg-transparent outline-none focus:border-violet-600 active:bg-transparent"
            />

            <input
              type="email"
              placeholder="Your email"
              required
              name="user_email"
              className="border border-white/90 px-4 py-3 rounded-lg bg-transparent outline-none  focus:border-violet-600 active:bg-transparent"
            />

            <textarea
              placeholder="Your message"
              name="message"
              className="border border-white/90 px-4 py-3 rounded-lg bg-transparent outline-none focus:border-violet-600"
            ></textarea>

            <input
              type="submit"
              value="Send"
              className="px-4 py-3 text-center bg-violet-700 rounded-lg hover:bg-violet-900 cursor-pointer duration-200"
            />
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
