import React from 'react';

const Contact = () => {
  return (
    <div>
      
      <div className="bg-black flex gap-[500px] items-center">
          <div>
            <p className="text-white text-xl p-4 pl-9 font-bold">TRAVOOO THE EXPLORER</p>
          </div>
          <div className="flex gap-10 p-4">
            <a className="text-md text-white  font-bold cursor-pointer hover:text-orange-400 hover:underline underline-offset-8 hover:font-bold" href="/">HOME</a>
            <a className="text-md text-white font-bold  cursor-pointer hover:text-orange-400 hover:underline underline-offset-8 hover:font-bold" href="/blog">BLOG</a>
            <a className="text-md text-white font-bold  cursor-pointer hover:text-orange-400 hover:underline underline-offset-8 hover:font-bold" href="/contact">CONTACT</a>
            <a className="text-md text-white font-bold  cursor-pointer hover:text-orange-400 hover:underline underline-offset-8 hover:font-bold" href="/search">SEARCH</a>
          </div>
        </div>

      
      <div className="relative h-screen w-full">
        <img className="absolute h-full w-full object-cover overflow-hidden opacity-60" src="https://content.skyscnr.com/m/343ee3410ffec214/original/GettyImages-481575457_doc.jpg?resize=1800px:1800px&quality=100" alt="" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-2">CONTACT</h1>
          <p className="text-xl">Send Me Questions, Comments, or Suggestions</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <p className="text-3xl p-3 font-bold font-serif text-orange-400">GET IN TOUCH</p>
        </div>
        <div className="flex items-center m-5 mb-5">
          <div className="flex-grow border-t border-gray-500"></div>
          <span className="p-2 text-2xl font-bold italic">CONTACT ME</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="text-xl italic">Send me your questions, comments, or suggestions!</p>
          <p className="text-xl italic">If you'd like to work with me or you have a question or comment, you can contact</p>
          <p className="text-xl italic">me using the form below. You can also find <span className="text-xl italic text-orange-400">more info about me here.</span></p>
          <p className="text-xl italic text-orange-400">me here.</p>
          <p className="text-xl italic">Sometimes I'm busy traveling, but I try to respond to any messages!</p>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[650px] w-[650px] m-8 shadow-xl shadow-black flex flex-col items-center justify-center">
            <p className="text-lg font-bold text-gray-400">Your name</p>
            <input className="h-[40px] w-[600px] border-2 border-gray-300 p-3 mb-5" type="text" placeholder="Enter Your Name" />
            <p className="text-lg font-bold text-gray-400">Your email</p>
            <input className="h-[40px] w-[600px] border-2 border-gray-300 p-3 mb-5" type="text" placeholder="Enter Your Email" />
            <p className="text-lg font-bold text-gray-400">Subject</p>
            <input className="h-[40px] w-[600px] border-2 border-gray-300 p-3 mb-5" type="text" />
            <p className="text-lg font-bold text-gray-400">Your Message</p>
            <input className="h-[200px] w-[600px] border-2 border-gray-300 p-3" type="text" />
            <button className="h-[50px] w-[150px] p-3 border-2 bg-gray-200 text-xl font-bold m-8">SUBMIT</button>
          </div>
        </div>
      </div>

      
      <div className="flex items-center justify-center">
        <p className="text-md italic text-gray-400">This site is protected by reCAPTCHA, and the <span className="text-orange-400">Google Privacy Policy</span> and <span className="text-orange-400">Terms of Service apply.</span></p>
      </div>

      <div className="flex flex-col items-center justify-center mt-10">
        <p className="text-xl font-bold text-gray-500 p-2">NEWSLETTER</p>
        <p className="text-md text-gray-700 font-serif pb-2">Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let's stay updated!</p>
        <div className="flex gap-10 m-3">
          <input className="border-2 border-gray-500 h-[45px] w-[350px] p-2" type="email" placeholder="EMAIL" />
          <button className="bg-black text-white h-[45px] w-[150px]">SUBSCRIBE</button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-10">
        <div className="h-[200px] w-full bg-black flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500 font-serif italic">Copyright TRAVOO THE EXPLORER 2024</p>
          <div className="flex mb-2">
            <p className="text-md font-serif text-orange-400 italic pt-3 p-2">Affiliate Disclosures</p>
            <p className="text-gray-500 text-3xl font-bold">.</p>
            <p className="text-md font-serif text-orange-400 italic pt-3 p-2">Privacy Policy</p>
            <p className="text-gray-500 text-3xl font-bold">.</p>
            <p className="text-md font-serif text-orange-400 italic pt-3 p-2">Terms Of Use</p>
          </div>
          <p className="text-sm text-gray-500 font-serif italic">Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission at no extra cost to you. As an affiliate, I only recommend</p>
          <p className="text-sm text-gray-500 font-serif italic">products and services that I feel are high quality and helpful to my readers. Thanks for your support.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
