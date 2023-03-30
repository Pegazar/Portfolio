import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8w8u3bd', 'template_l4fdswf', form.current, '6Axc3ehmkbALF8hEG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form ref={form} onSubmit={sendEmail} action="" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4">// Submit the form below or shoot me an email - yusif.yf@gmail.com</p>
            </div>
            <input className="p-2 bg-[#ccd6f6] outline-none" type="text" placeholder="Name" name="user_name" />
            <input className="my-4 p-2 bg-[#ccd6f6] outline-none" type="email" placeholder="Email" name="user_email" />
            <textarea className="p-2 bg-[#ccd6f6] outline-none" name="message" rows="10" placeholder="Message"></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact