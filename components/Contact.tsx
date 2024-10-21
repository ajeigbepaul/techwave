// import emailjs from '@emailjs/browser';
"use client";
import { useState } from "react";

// import useAlert from '../hooks/useAlert.js';
// import Alert from '../components/Alert.jsx';

const Contact = () => {
  //   const formRef = useRef();

  //   const { alert, showAlert, hideAlert } = useAlert();
  const [loading,setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    service: "",
    budget: "",
  });

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
  };

  return (
    <section className="rounded-xl w-full border mb-10 border-[#B7CFFF] ">
      <div className="flex p-8 w-full">
        <form className="mt-0 flex flex-col space-y-4 w-full">
          <label className="space-y-3 flex flex-col w-full">
            <span className="field-label">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              // onChange={handleChange}
              required
              className="w-full p-2 bg-[#F7F7F7]"
              placeholder="ex., John Doe"
            />
          </label>

          <label className="space-y-3 flex flex-col">
            <span className="field-label">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              // onChange={handleChange}
              required
              className=" w-full p-2 bg-[#F7F7F7]"
              placeholder="ex., johndoe@gmail.com"
            />
          </label>
          <label className="space-y-3 flex flex-col">
            <span className="field-label">
              What service are you interested in?
            </span>
            <select
              name="service"
              value={form.email}
              // onChange={handleChange}
              required
              className="w-full p-2 bg-[#F7F7F7]"
            >
              <option></option>
            </select>
          </label>
          <label className="space-y-3 flex flex-col">
            <span className="field-label">Budjet</span>
            <select
              name="budget"
              value={form.email}
              // onChange={handleChange}
              required
              className="w-full p-2 bg-[#F7F7F7]"
            >
              <option></option>
            </select>
          </label>

          <label className="space-y-3 flex flex-col">
            <span className="field-label">Message</span>
            <textarea
              name="message"
              value={form.message}
              // onChange={handleChange}
              required
              rows={5}
              className="w-full p-2 bg-[#F7F7F7]"
              placeholder="Share your thoughts or inquiries..."
            />
          </label>

          <button
            className="field-btn p-3 text-white bg-brandcolor rounded-full"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
