import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_3rr6uba",     
      "template_edz1rp3",    
      form.current,
      "_E12vdKmW0sn8cLsW"    
    )
    .then(() => {
      alert("Message sent!");
      form.current.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send ❌");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <section id="contact" className="px-6 py-20">
      <h2 className="text-3xl text-center mb-10">Contact Me</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-cardbg p-8 rounded-2xl shadow-xl relative"
      >

      
        {loading && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-2xl">
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full mb-4 px-4 py-3 rounded-lg bg-darkbg"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full mb-4 px-4 py-3 rounded-lg bg-darkbg"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full mb-6 px-4 py-3 rounded-lg bg-darkbg"
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary justify-center w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}