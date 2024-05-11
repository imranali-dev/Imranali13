

import React, { useState } from 'react';
import Image from 'next/image';
import { Linkedin, X } from 'lucide-react';
import { InstagramIcon } from 'lucide-react';
import { TwitterIcon } from 'lucide-react';

const ContactMe = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <button onClick={() => setShowForm(true)}> Imran</button>
      {showForm && (
        <section style={{ fontFamily: 'Montserrat' }} className="bg-[#071e34] flex font-medium items-center justify-center h-screen">
          <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg" onClick={() => setShowForm(false)}>
          <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">2d ago</span>
              <span className="text-emerald-400">
                
                  <X className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </X>
              </span>
          </div>
          <div className="mt-6 w-fit mx-auto">
              <Image src="/images/cat.png" className="rounded-full w-28 h-28" alt="profile picture" width={120} height={120} />
          </div>

          <div className="mt-8 ">
              <h2 className="text-white font-bold text-2xl tracking-wide">Imran <br/> Ali</h2>
          </div>
          <p className="text-emerald-400 font-semibold mt-2.5" >
              Mern stack Developer
          </p>
          <div className="mt-3 text-white text-sm flex">
  <div className="ml-3">
    <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-blue-400 transition duration-500 ease-in-out">
      <TwitterIcon size={18} /> 
    </a>
  </div>
  <div className="ml-3">
    <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-pink-600 transition duration-500 ease-in-out">
      <InstagramIcon size={18} /> 
    </a>
  </div>
  <div className="ml-3">
    <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-600 transition duration-500 ease-in-out">
      <Linkedin size={18} /> 
    </a>
  </div>
</div>
          </section>
        </section>
      )}
    </>
  );
};

export default ContactMe;

