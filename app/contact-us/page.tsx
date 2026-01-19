"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";

export interface ContactEmailProps {
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactEmailProps>({
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactEmailProps) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //confirm email and message field are not empty
    if (!formData.email || !formData.message) {
      toast.info("Email and message are required fields");
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
        }),
      });

      // handle success
      if (response.ok) {
        toast.success("Message Sent Successfully!");
        setFormData({
          email: "",
          message: "",
        });
      } else {
        toast.error("There was a problem sending email. Pls try again!");
      }
    } catch (error) {
      console.log("Error sending email:", error);
      toast.error("There was a problem sending email. Pls try again!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="flex flex-col items-center pt-10 pb-20 md:pt-20 md:pb-20">
      <div className="w-[90%] md:w-[85%] lg:flex justify-between">
        <div className="w-full lg:w-[55%]">
          <div className="w-full lg:w-[40%] mb-10 lg:mb-0">
            <h2 className="font-playfair text-primary-color text-4xl md:text-5xl">
              Contact Us
            </h2>
            <p className=" my-5 font-mulish text-lg text-primary-dark">
              Email or complete the form to ask us anything
            </p>
            <p className="font-mulish text-lg text-primary-dark">
              hello@higherfeatsafrica.com
            </p>
          </div>
        </div>
        <section className="shadow-md border-2 border-[#e1e3ed] p-4 md:p-7 w-full lg:w-[45%] rounded-3xl">
          <form onSubmit={handleSubmit} className="">
            <div>
              <h2 className="text-3xl font-mulish font-bold text-primary-dark">
                Get in Touch
              </h2>
              <p className="text-primary-dark text-base">
                You can reach us anytime
              </p>
            </div>
            <input
              name="email"
              type="email"
              placeholder="your-email@mail.com"
              value={formData.email}
              onChange={handleChange}
              className="h-14 text-background w-full px-4 py-2 mt-10 mb-7 border-2 border-gray-300 rounded-3xl"
              required
            />
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="...type your message"
              value={formData.message}
              onChange={handleChange}
              className="text-background w-full px-4 py-2 mb-4 border border-gray-300 rounded-3xl"
              required
            />
            <button
              type="submit"
              className="w-full font-mulish cursor-pointer h-14 bg-primary-color hover:shadow-lg hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg"
            >
              {isSending ? "Loading..." : "Send Message"}
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
