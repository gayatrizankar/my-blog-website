import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
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
        <div className="relative h-screen">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
  <source src="/videos/Recording 2024-11-22 105616.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
            <p className="text-white text-5xl font-bold">SEARCH.GO.EXPLORE</p>
            <p className="text-white text-2xl font-bold mt-5">"The world is a book, and those who do not travel read only one page." - St. Augustine</p>
            <a className="mt-10 px-8 py-4 rounded-lg border-4 border-white text-2xl text-white font-bold hover:bg-orange-300 hover:text-black transition duration-300" href="file:///C:/Users/admin/OneDrive/Desktop/BLOG%20WEBITE/blog.html">Start Now</a>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="flex flex-col items-center py-20 bg-gray-100">
          <p className="text-2xl font-bold border-b-4 border-black">FEATURED</p>
          <div className="flex flex-wrap gap-14 mt-10 justify-center">
            <div className="text-center">
              <img className="h-72 w-72 rounded-xl object-cover shadow-md" src="https://www.travelanddestinations.com/wp-content/uploads/2019/07/Travel-Blog-about.jpg" alt="Travel Blogs" />
              <p className="text-xl font-bold mt-3">TRAVEL BLOGS</p>
            </div>
            <div className="text-center">
              <img className="h-72 w-72 rounded-xl object-cover shadow-md" src="https://th.bing.com/th/id/R.d87a6cd8e57a37052010f4b283b625b4?rik=OryjzHG4a2joLA&riu=http%3a%2f%2fimg.huffingtonpost.com%2fasset%2f1910_1000%2f58580f9d1200008310ef0157.jpeg%3fcache%3dvp66ola6z9&ehk=jwd5o%2fRd5oamWDad2mqVqfzsRojgLXagBhfQOwZl6VU%3d&risl=&pid=ImgRaw&r=0" alt="Destinations" />
              <p className="text-xl font-bold mt-3">DESTINATIONS</p>
            </div>
            <div className="text-center">
              <img className="h-72 w-72 rounded-xl object-cover shadow-md" src="https://academy-cdn.wedio.com/2022/06/jpeg-format.jpg" alt="About Me" />
              <p className="text-xl font-bold mt-3">ABOUT ME</p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full">
          <div className="m-[130px] mt-[100px] mr-[80px] mb-0">
            <img className="rounded-2xl h-[500px] w-[950px] object-cover shadow-lg" src="\images\gayy.jpg" alt="My imageimage" />
          </div>
          <div className="m-[150px] mt-[100px] mr-[80px] ml-0 mb-0">
            <p className="text-2xl font-bold p-3">THANKS FOR LOOKING!!!</p>
            <p className="text-xl p-2 text-gray-500">I'm <span className="text-xl font-serif text-orange-400">GAYATRI ZANKAR</span>, the girl behind this website. I'm an Indian who's been traveling the world full time for <span className="text-xl font-serif text-orange-400">8 years</span> now.</p>
            <p className="text-xl p-2 text-gray-500">I started this travel blog in 2019 to document my own international trips, share my photos, and help others learn how to travel the world and find some really good spots off the beaten path.</p>
            <p className="text-xl p-2 text-gray-500">All of the writing and pictures on this site come from my own personal experience.</p>
            <p className="text-xl p-2 text-gray-500">Together, we've done some bucket list hikes, climbed active volcanoes, seen exotic wildlife, and visited some spectacular castles, temples, and monuments around the world.</p>
            <p className="text-xl p-2 text-gray-500">I haven’t been everywhere, but it’s on my list. I hope this world travel blog can help and inspire you in your own journeys as well!</p>
            <button className="flex items-center justify-center relative h-[60px] w-[150px] rounded-xl border-4 border-black text-2xl text-black m-2 font-bold">EXPLORE</button>
          </div>
        </div>
        <div>
          <div className="flex items-center m-10 mb-5">
            <div className="flex-grow border-t border-gray-500"></div>
            <span className="mx-4 text-3xl font-bold text-gray-500">Travel Guides</span>
            <div className="flex-grow border-t border-gray-500"></div>
          </div>
          <div className="flex justify-center">
            <p className="text-2xl font-bold text-gray-700">MORE INTERESTING BLOGS!!!</p>
          </div>
          <div className="flex flex-col items-center justify-center">
      <div className="flex gap-10 m-5">
        <div>
          <img
            className="h-[300px] w-[300px] object-cover rounded-xl"
            src="https://omkarkadam.com/wp-content/uploads/2022/04/Trimbakeshwar-Temple-in-Nashik-Travel-Guide-1.jpg"
            alt="Trimbakeshwar Temple in Nashik"
          />
          <p className="text-xl font-bold p-2 pb-0">
            HOW TO VISIT TRYMBAKESHWAR
            <p className="text-xl font-bold p-2 pt-0">IN NASHIK</p>
          </p>
        </div>
        <div>
          <img
            className="h-[300px] w-[300px] object-cover rounded-xl"
            src="https://vl-prod-static.b-cdn.net/system/images/000/209/574/f0518a73999ce412ef15199fe601dd01/x1000gt/Anjaneri-8.jpg?1548196701"
            alt="Anjaneri Hills"
          />
          <p className="text-xl font-bold p-2">HANUMAN'S FOOT MAP</p>
        </div>
        <div>
          <img
            className="h-[300px] w-[300px] object-cover rounded-xl"
            src="https://static2.tripoto.com/media/filter/nl/img/269307/TripDocument/1535626254_38412026_10211522756335247_6376961557548498944_o.jpg"
            alt="Guide for Harihar Fort"
          />
          <p className="text-xl font-bold p-2">GUIDE FOR HARIHAR FORT</p>
        </div>
      </div>
      <div className="flex gap-10 m-5">
        <div>
          <img
            className="h-[300px] w-[300px] object-cover rounded-xl"
            src="https://i.pinimg.com/originals/34/eb/27/34eb27c9d8ad1e13170286976ae64cdd.jpg"
            alt="Best Places to Visit in Nashik"
          />
          <p className="text-xl font-bold p-2 pb-0">
            22 BEST PLACES TO VISIT
            <p className="text-xl font-bold p-2 pt-0">IN NASHIK</p>
          </p>
        </div>
        <div>
          <img
            className="h-[300px] w-[300px] object-cover rounded-xl"
            src="https://i.ytimg.com/vi/gKozQkoPIj4/maxresdefault.jpg"
            alt="Best Waterfalls in Nashik"
          />
          <p className="text-xl font-bold p-2">BEST WATERFALLS</p>
        </div>
        <div>
          <img
            className="h-[300px] w-[300px] object-cover rounded-xl"
            src="https://www.baps.org/Data/Sites/1/Media/GalleryImages/25396/WebImages/Nashik_Mandir_Pratishtha_Mahapuja_28_Sep_17.jpg"
            alt="Nashik Mandir"
          />
          <p className="text-xl font-bold p-2">MANDIR</p>
        </div>
      </div>
    </div>
    <div>
      {/* Newsletter Section */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-gray-500 p-2">NEWSLETTER</p>
        <p className="text-md text-gray-700 font-serif pb-2">
          Subscribe to my newsletter for the latest blog posts, tips, & travel guides. Let's stay updated!
        </p>
        <div className="flex gap-10 m-3">
          <input
            className="border-2 border-gray-500 h-[45px] w-[350px] p-2"
            type="email"
            placeholder="EMAIL"
          />
          <button className="bg-black text-white h-[45px] w-[150px]">SUBSCRIBE</button>
        </div>
      </div>

      {/* Socials Section */}
      <div className="flex items-center m-10 mb-5">
        <div className="flex-grow border-t border-gray-500"></div>
        <span className="mx-4 text-3xl font-bold text-gray-500">Socials</span>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>

      <div className="flex items-center justify-center gap-14">
        <div className="flex flex-col gap-10">
          {/* Social Media Links */}
          <div className="flex flex-col h-[200px] w-[500px] border-2 border-gray-400">
            <div className="flex gap-10">
              <div className="flex p-3">
                <img
                  className="h-[35px] w-[35px]"
                  src="https://th.bing.com/th/id/OIP.8CSUEsi6IxwkdGuYPI0TfAHaHk?rs=1&pid=ImgDetMain"
                  alt="Facebook"
                />
                <p className="text-xl font-bold font-serif">FACEBOOK</p>
              </div>
              <div className="flex p-3">
                <img
                  className="h-[35px] w-[35px]"
                  src="https://static.vecteezy.com/system/resources/previews/014/414/683/original/instagram-black-logo-on-transparent-background-free-vector.jpg"
                  alt="Instagram"
                />
                <p className="text-xl font-bold font-serif">INSTAGRAM</p>
              </div>
            </div>
            <div className="flex gap-10">
              <div className="flex p-3">
                <img
                  className="h-[35px] w-[35px]"
                  src="https://travelhoney.com/wp-content/uploads/2017/07/pinterest-logo-icon-63868.png"
                  alt="Pinterest"
                />
                <p className="text-xl font-bold font-serif">PINTEREST</p>
              </div>
              <div className="flex p-3">
                <img
                  className="h-[35px] w-[35px]"
                  src="https://static.vecteezy.com/system/resources/previews/018/930/569/original/youtube-logo-youtube-icon-transparent-free-png.png"
                  alt="YouTube"
                />
                <p className="text-xl font-bold font-serif">YOUTUBE</p>
              </div>
            </div>
            <div className="flex p-3">
              <img
                className="h-[35px] w-[35px]"
                src="https://th.bing.com/th/id/OIP.4SsPTWCyhJTl1XEWSidAlQHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain"
                alt="Email"
              />
              <p className="text-xl font-bold font-serif">EMAIL</p>
            </div>
          </div>

          {/* Posts Section */}
          <div className="flex flex-wrap h-[250px] w-[500px] border-2 border-gray-400">
            <div className="flex">
              <img
                className="h-[100px] w-[150px]"
                src="https://th.bing.com/th/id/R.724b8c075bc09079eaa002f6aeb44648?rik=kYtfyzD0qz5LdA&riu=http%3a%2f%2fwww.stjohnsmag.com%2fuploads%2f7%2f8%2f2%2f2%2f7822260%2ftravel-dreams-april-2020-adobestock-208717161_orig.jpg&ehk=eAxrjwUrGD%2btfYlRlaDUR3suhSH6QGHKDC7DPQHn6Ww%3d&risl=&pid=ImgRaw&r=0"
                alt="Travel Post 1"
              />
              <img
                className="h-[100px] w-[150px]"
                src="https://iso.500px.com/wp-content/uploads/2015/08/travel_cover-1500x1000.jpeg"
                alt="Travel Post 2"
              />
              <img
                className="h-[100px] w-[150px]"
                src="https://th.bing.com/th/id/OIP.Ykvl60s3mF5HetSw5bsZ8QHaFG?w=700&h=482&rs=1&pid=ImgDetMain"
                alt="Travel Post 3"
              />
              <img
                className="h-[100px] w-[50px] object-cover"
                src="https://th.bing.com/th/id/OIP.RNCQyNWNTaFBeT0yK7wH_gAAAA?rs=1&pid=ImgDetMain"
                alt="Travel Post 4"
              />
            </div>
            <p className="text-2xl font-bold font-serif p-2 pl-[200px]">POSTS</p>
            <div className="flex">
              <img
                className="h-[100px] w-[150px]"
                src="https://th.bing.com/th/id/OIP.x38DX9Xto8nMyxiF6bAswAHaE7?rs=1&pid=ImgDetMain"
                alt="Travel Post 5"
              />
              <img
                className="h-[100px] w-[150px]"
                src="https://lp-cms-production.imgix.net/features/2019/05/Solo-Travel-in-Nature-acbfea52bfaf.jpg?w=1200&sharp=10&vib=20"
                alt="Travel Post 6"
              />
              <img
                className="h-[100px] w-[150px]"
                src="https://th.bing.com/th/id/OIP.ZI5rdN2Vy5rJUfbTRtyy-gHaE6?w=1024&h=680&rs=1&pid=ImgDetMain"
                alt="Travel Post 7"
              />
              <img
                className="h-[100px] w-[50px]"
                src="https://th.bing.com/th/id/OIP.PFWplW0dCfk5tx5earQ0MAHaEK?rs=1&pid=ImgDetMain"
                alt="Travel Post 8"
              />
            </div>
          </div>
        </div>

        {/* Author Section */}
        <div className="h-[500px] w-[300px] border-2 border-gray-400 flex flex-col">
          <div>
            <img
              className="h-[250px] w-[250px] rounded-full object-cover m-5"
              src="\images\WhatsApp Image 2024-11-20 at 11.05.37_fef600ed.jpg" 
              alt="Author"
            />
          </div>
          <div>
            <p className="text-md font-serif p-2">
              Hi, I am <span className="text-md font-serif text-orange-400">GAYATRI ZANKAR</span> from India.
            </p>
            <p className="text-md font-serif p-2">
              So I Basically Travel Throughout India To find the grace!!
            </p>
            <p className="text-md font-serif p-2">
              India is full of culture and rituals, and in India, there are many temples here, called <span className="text-md font-serif text-orange-400">"MANDIR"</span> or <span className="text-md font-serif text-orange-400">"DEVSTANS"</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
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
        <p className="text-sm text-gray-500 font-serif italic">
          Some of the pages on my travel blog contain affiliate links. Whenever you buy something through one of these links, I get a small commission at no extra cost to you. As an affiliate, I only recommend
        </p>
        <p className="text-sm text-gray-500 font-serif italic">
          products and services that I feel are high quality and helpful to my readers. Thanks for your support.
        </p>
      </div>
    </div>
    </>
  );
};

export default Index;
