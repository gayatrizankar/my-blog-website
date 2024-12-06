import React from 'react';
import { Link } from 'react-router-dom';

const blog = () => {
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

     
      <div className="flex flex-col text-2xl font-bold italic font-serif text-black p-5 items-center justify-center">
        <p>"Embark on a journey where every step is a new adventure."</p>
        <p>
          "Explore the world, embrace different cultures, and create memories
          that last a lifetime."
        </p>
      </div>

      <div className="flex flex-col w-full p-4 bg-gray-100 rounded-md">
        <div className="flex gap-4 mb-4">
          <img
            src="https://www.tomorrowsworldtoday.com/wp-content/uploads/2022/02/Nature-Enthusiast-Travel-Tips-Outdoors.jpg"
            alt="Nature Travel"
            className="w-1/2 h-auto object-cover rounded-md"
          />
          <img
            src="https://i.pinimg.com/originals/b0/28/14/b028147aad5bd17691f8b5cddbbca7d0.jpg"
            alt="Travel Adventure"
            className="w-1/2 h-[350px] object-cover rounded-md"
          />
        </div>

        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/t3bip9rzxau6hh4kz5hb"
            alt="Outdoor Journey"
            className="w-1/2 h-auto rounded-md"
          />
        </div>
      </div>

      
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl italic p-2">
          "Traveling is not just about exploring{" "}
          <span className="text-orange-400 italic text-xl">new destinations</span>;
          it's about discovering yourself in the process. Whether you're
          wandering through vibrant cities, trekking across mountain trails, or{" "}
          <span className="text-orange-400 italic text-xl">relaxing on serene
          beaches</span>, each journey brings you closer to understanding the
          world around you. Travel opens up a world of diverse cultures,
          breathtaking landscapes, and unforgettable experiences. It inspires
          growth, connects you with people from all walks of life, and leaves you
          with{" "}
          <span className="text-orange-400 italic text-xl">memories that last a
          lifetime</span>. Every trip is an opportunity to learn something new,
          embrace new adventures, and create stories{" "}
          <span className="text-orange-400 italic text-xl">worth sharing</span>. So
          pack your bags, step out of your comfort zone, and let the world be your
          playground.
        </p>
        <p className="text-xl italic p-2">
          "But traveling is more than just about{" "}
          <span className="text-orange-400 italic text-xl">discovering new
          places</span>. It’s also about discovering yourself. When you travel,
          you challenge your own boundaries, face unfamiliar situations, and grow
          in ways that are hard to do back home. It’s in the unknown where we learn
          resilience, adaptability, and the ability to appreciate the simple things
          in life. Traveling{" "}
          <span className="text-orange-400 italic text-xl">
            opens your heart and mind to new perspectives
          </span>, reshaping your worldview in ways that can be life-changing. It
          teaches you to appreciate diversity, encourages open-mindedness, and
          reminds you that the{" "}
          <span className="text-orange-400 italic text-xl">
            world is much bigger than your daily routine
          </span>.
        </p>
        <p className="text-xl italic p-2">
          "In the end, travel is all about the{" "}
          <span className="text-orange-400 italic text-xl">memories you create</span>.
          The breathtaking sunrise over a mountain peak, the delicious taste of
          authentic cuisine, the laughter shared with strangers who become friends
          – these are the moments that stay with us long after we return home.{" "}
          <span className="text-orange-400 italic text-xl">Traveling is an
          adventure</span>, not just of places, but of the heart and soul. So pack
          your bags, leave your worries behind, and embark on a journey that will
          change you forever. The world is waiting for you, and the best stories
          are often the ones that take us{" "}
          <span className="text-orange-400 italic text-xl">farthest from home.</span>
        </p>
      </div>

      {/* Footer */}
      <div className="h-[200px] w-full bg-black flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 font-serif italic">
          Copyright TRAVOO THE EXPLORER 2024
        </p>
        <div className="flex mb-2">
          <p className="text-md font-serif text-orange-400 italic pt-3 p-2">
            Affiliate Disclosures
          </p>
          <p className="text-gray-500 text-3xl font-bold">.</p>
          <p className="text-md font-serif text-orange-400 italic pt-3 p-2">
            Privacy Policy
          </p>
          <p className="text-gray-500 text-3xl font-bold">.</p>
          <p className="text-md font-serif text-orange-400 italic pt-3 p-2">
            Terms Of Use
          </p>
        </div>
        <p className="text-sm text-gray-500 font-serif italic">
          Some of the pages on my travel blog contain affiliate links. Whenever
          you buy something through one of these links, I get a small commission
          at no extra cost to you. As an affiliate, I only recommend
        </p>
        <p className="text-sm text-gray-500 font-serif italic">
          products and services that I feel are high quality and helpful to my
          readers. Thanks for your support.
        </p>
      </div>
    </div>
  )
}

export default blog
