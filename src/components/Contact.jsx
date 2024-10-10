import React from "react";

function Contact() {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form action="" className="flex flex-col">
        <input
          type="text"
          placeholder="name"
          className="border p-2 w-[300px] mb-2 mx-auto rounded-lg "
        />
        <input
          type="text"
          placeholder="message"
          className="border p-2 w-[300px] mb-2 mx-auto rounded-lg "
        />
        <button className="p-2 my-2 border w-28 mx-auto rounded-lg hover:bg-[#818080] bg-[#b8b1b1]">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
