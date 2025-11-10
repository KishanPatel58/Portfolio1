import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [message, setmessage] = useState("")
  const success = () => {
      toast.success('Message Send Successfully! Kishan Patel will give you Reply as soon as possible.✅', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
      });
  }
  const sendEmail = (e) => {
      e.preventDefault();

      emailjs
          .sendForm('service_2849nyj', 'template_8g2r6oz', form.current, {
              publicKey: 'eZ8ckA-IQI-C2yKJ6',
          })
          .then(
              () => {
                  success()
                  setname("")
                  setemail("")
                  setmessage("")
              },
              (error) => {
                  toast.error(error.message, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                      transition: Bounce,
                  });
              },
          );
  };
  const Email = (e) => {
      setemail(e.target.value)
  }
  const Name = (a) => {
      setname(a.target.value)
  }
  const Message = (k) => {
      setmessage(k.target.value)
  }
  return (
    <section className="relative w-screen h-screen flex items-center justify-center flex-col">
      <div className="bricks-back fixed top-0 left-0 -z-[10] w-screen h-screen grid grid-cols-12 gap-2">
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-4"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-4"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-3"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-4"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue col-span-2"></div>
        <div className="drop-shadow-[0px_0px_10px_blueviolet] rounded-2xl !flex-shrink-0 bg-[#421f63] border-2 border-blue"></div>
      </div>
      <form
        onSubmit={sendEmail}
        ref={form}
        className="backdrop-blur-md bg-[#421F63] border-4 border-[blueviolet] rounded-2xl p-8 !w-[90%] h-[60%] sm:!w-[70%] shadow-[0_0_15px_blueviolet] flex flex-col gap-7 !p-[20px] font-bold md:!w-[60%] lg:!w-[50%] justify-center"
      >
        <h2 className="text-3xl font-semibold text-center mb-2 text-white">
          Let's Connect
        </h2>

        <input
          type="text"
          placeholder="Your Name 👨🏻‍🦱"
          value={name}
          name='from_name'
          onChange={Name}
          required
          className="!p-3 rounded-lg bg-transparent border border-[blueviolet] focus:outline-none focus:ring-2 focus:ring-[blueviolet] placeholder-gray-300 transition-all duration-300 !text-[blueviolet]"
        />

        <input
          type="email"
          name='from_email'
          placeholder="Your Email ✉️"
          value={email}
          onChange={Email}
          required
          className="!p-3 rounded-lg bg-transparent border border-[blueviolet] focus:outline-none focus:ring-2 focus:ring-[blueviolet] placeholder-gray-300 transition-all duration-300 !text-[blueviolet]"
        />

        <textarea
          name="message"
          placeholder="Your Message 💬"
          value={message}
          onChange={Message}
          rows="4"
          required
          className="!p-3 rounded-lg bg-transparent border border-[blueviolet] focus:outline-none focus:ring-2 focus:ring-[blueviolet] placeholder-gray-300 resize-none transition-all duration-300 !text-[blueviolet]"
        ></textarea>

        <button
        type="submit"
        className="!mt-2 bg-[blueviolet] text-white !py-2 rounded-lg hover:bg-[#5c2ca4] transition-all"
        >
          Send Message
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  )
}

export default Contact