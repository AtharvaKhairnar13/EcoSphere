import React, { useState, useEffect } from 'react';
import img_one  from '../assets/tree.jpg';
import img_two from '../assets/forest.jpg';
import img_three from '../assets/zadi.jpg';
import draught_green from '../assets/draught-green.jpg'
import ecostatimg from '../assets/ecostat.jpeg'
import ecotrackerimg from '../assets/ecotracker.jpeg'
import ecolearnimg from '../assets/ecolearn.jpeg'
import ecoengageimg from '../assets/ecoengage.jpeg'
import ecobotimg from '../assets/ecobot.jpeg'
import ecopolicyimg from '../assets/ecopolicy.jpeg'
import ecoguideimg from '../assets/ecoguide.jpeg'
import ecogameimg from '../assets/ecogames.jpeg'
import ecopulseimg from '../assets/ecopulse.jpeg'
import '../css/app.css'

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselImages = [img_one, img_two, img_three];
    const Features = [
      {
          title: "EcoStat",
          description: "Visualize key global sustainability metrics and trends.",
          image: ecostatimg
      },
      {
          title: "EcoTracker",
          description: "Track personal sustainability goals and progress over time.",
          image:ecotrackerimg
      },
      {
          title: "EcoLearn",
          description: "Learn actionable insights about sustainability practices.",
          image:ecolearnimg
      },
      {
          title: "EcoEngage",
          description: "Participate in campaigns and connect with eco-conscious communities.",
          image: ecoengageimg
      },
      {
          title: "EcoBot",
          description: "Your AI assistant for personalized eco-tips and advice.",
          image:ecobotimg
      },
      {
          title: "EcoPolicy",
          description: "Explore and compare global environmental policies.",
          image: ecopolicyimg
      },
      {
          title: "EcoGuide",
          description: "Your personalized roadmap to sustainable living.",
          image:ecoguideimg
      },
      {
          title: "EcoGames",
          description: "Engage in interactive games to learn sustainability.",
          image: ecogameimg
      },
      {
          title: "EcoPulse",
          description: "Analyze public sentiment and trends on climate action.",
          image: ecopulseimg
      }
  ]
  ;

  useEffect(() => {
    const interval = setInterval(() => {
        nextSlide();
    }, 5000); // 5 seconds auto-slide
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);



    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <div className="bg-white font-sans">
            {/* Navbar */}
            <nav className={`absolute top-0 left-0 right-0  transition-all duration-300 z-50`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                            <svg className="fill-green-600" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
                            <path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z" />                            </svg>
                            <span className="text-2xl font-bold text-gray-800 ml-2"> EcoSphere </span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-10">
                        <a href="/dashboard" className="text-[#57534e] font-bold text-xl hover:text-green-700 font-sans"> Dashboard </a>
                        <a href="#section2" className="text-[#57534e] font-bold text-xl hover:text-green-700 font-sans"> Mission </a>
                        <a href="#section3" className="text-[#57534e] font-bold text-xl hover:text-green-700 font-sans"> Stories </a>
                        <a href="#section4" className="text-[#57534e]] font-bold text-xl hover:text-green-700 font-sans"> Features </a>

                        <button className="bg-[#16a34a] text-[white] font-semibold text-lg px-6 py-3 rounded-md hover:bg-black transition" onClick={()=>{
                          window.location.href = '/signup'; // Redirect to the signup page
                        }}> Get Involved </button>
                    </div>
                </div>
            </nav>

          {/* Carousel Hero Section */}
        <div class="relative"  id="section1">
          <div
            className="absolute  left-[calc(10%-10px)] top-[calc(40%+10px)]  z-10 text-white font-bold transition-opacity duration-1000 ease-in-out"
            style={{
              fontSize: '5rem',
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
              fontFamily: "'YourImageFont', sans-serif", // Replace 'YourImageFont' with the specific font name
            }}
          >
            {currentSlide === 0 && (
               <>
               <p className=" font-bold leading-tight">
                 Driving Climate <br /> Action Together
               </p>
               <div className="space-y-2 mt-4">
                 <p className="text-3xl font-medium">
                   Accelerating global change with AI-driven climate solutions.
                 </p>
                 <p className="text-3xl font-medium">
                   Empowering actions that create sustainable impacts faster.
                 </p>
               </div>
             </>
              
            )}
            {currentSlide === 1 && (
              <>
              <p className=" font-bold leading-tight">
                Educate. <br /> Engage. Evolve.
              </p>
              <div className="space-y-2 mt-4">
              <p className="text-3xl font-medium">Interactive lessons to inspire climate-conscious communities globally.</p>
              </div>
              </>
            )}
            {currentSlide === 2 && (
              <>
                <p>Together <br /> for Tomorrow</p>
                <div className="space-y-2 mt-4">
                <p className="text-3xl font-medium">Building a network of changemakers for a sustainable future.</p>
                </div>
              </>
            )}
          </div>


          {/* original carousel section */}
            <div className="relative h-[700px] mt-20 overflow-hidden group">
            <div className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {carouselImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <img 
                    src={image} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-[700px] object-cover"/>
                  </div>
              ))}
            </div>

          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 opacity-0 group-hover:opacity-100 transition hover:scale-125 active:text-white"
          >
            <i className="fa-solid fa-arrow-left" style={{ fontSize: '2rem' }}></i>
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 opacity-0 group-hover:opacity-100 transition hover:scale-125 active:text-white"
          >
            <i className="fa-solid fa-arrow-right"  style={{ fontSize: '2rem' }}></i>
          </button>
          </div>

        </div>

        


      {/* Two-Column Section */}
      <div id="section2" className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight">
            Our Mission to Protect the Planet
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are dedicated to raising global awareness about climate change, 
            promoting sustainable practices, and inspiring collective action 
            to preserve our planet for future generations.
          </p>
          <button  className="bg-green-600 text-white px-7 py-3.5 rounded-full hover:bg-green-700 transition font-semibold"
          onClick={()=>{
            window.location.href = '/signup'; }
          }>
            Learn More About Our Mission
          </button>
        </div>  
        <div className="relative">
              <img  src={draught_green}
                    alt="Climate Mission"
                    className="w-full rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              />
        </div>
      </div>

      {/* Video Section */}

      <div id="section3" className="bg-gray-50 py-16">

        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">
            Climate Insights
          </h2>
          <div className="flex justify-between items-center bg-gray-50 pt-5 px-6">
                    {/* Video Section */}
                    <div className="w-2/3">
                      <iframe
                        className="rounded-2xl shadow-2xl border border-gray-200"
                        width="100%" // Make it responsive
                        height="500"
                        src="https://www.youtube.com/embed/Q5IjdVs9yDs"
                        title="The Global To-Do List. One year, seven actions."
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Text Section */}
                    <div className="w-1/3 pl-8"> {/* Add padding for spacing */}
                      
                      <p className="text-gray-700 text-xl leading-relaxed ">
                          Unleashing the power of renewable energy is a critical step toward a sustainable future, complemented by efforts to reduce coal usage and methane emissions. Emphasizing energy efficiency, rather than ignoring its potential, plays a key role in minimizing environmental impact. Supporting clean energy solutions and prioritizing eco-friendly practices in our choices can drive meaningful change. By adopting these measures, we can collectively work towards a cleaner, greener planet.
                      </p>
                    </div>
            </div>
        </div>
      </div>

      {/* features */}

      <div id="section4"className="max-w-7xl mx-auto px-6 py-10 pb-32">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
        Features
        </h2>
        <div className="grid grid-cols-3 gap-10">
          {Features.map((story, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden  hover:shadow-xl transition transform hover:scale-105 transition">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-24 pb-50"> {/* Increased padding for larger footer */}
            <div className="max-w-7xl mx-auto px-6 flex md:grid-cols-3 gap-12 justify-around"> {/* Adjusted grid to 3 columns */}
              <div>
                <div className="flex items-center space-x-3 mb-5">
                            <svg className="fill-green-600" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512">
                            <path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z" />                            </svg>
                            <span className="text-2xl font-bold text-white-800 ml-2"> EcoSphere </span>
                  {/* <span className="text-3xl font-bold text-green-500">EcoSphere</span> Increased font size */}
                </div>
                <p className="text-gray-300 text-xl leading-relaxed pl-2">
                    Transforming Awareness into Action 
                </p> {/* Increased font size */}
              </div>
              <div>
                <h5 className="font-bold mb-6  pt-3 text-green-500 text-xl">Connect</h5> {/* Increased font size */}
                <div className="space-x-6"> {/* Space between links */}
                  <a href="#" className="text-gray-300 hover:text-white text-lg">Facebook</a>
                  <a href="#" className="text-gray-300 hover:text-white text-lg">Twitter</a>
                  <a href="#" className="text-gray-300 hover:text-white text-lg">Instagram</a>
                </div>
              </div>
              <div>
                <h5 className="font-bold mb-6 pt-3 text-green-500 text-xl">Follow Us</h5> {/* Section title */}
                <div className="space-x-6 flex">
                  <a href="https://www.instagram.com" className="text-gray-300 hover:text-white">
                    <i className="fab fa-instagram text-2xl"></i> {/* Instagram logo */}
                  </a>
                  <a href="https://www.twitter.com" className="text-gray-300 hover:text-white">
                    <i className="fab fa-twitter text-2xl"></i> {/* Twitter logo */}
                  </a>
                  <a href="https://github.com/dnyanalj" className="text-gray-300 hover:text-white">
                    <i className="fab fa-github text-2xl"></i> {/* GitHub logo */}
                  </a>
                  <a href="https://www.linkedin.com/in/dnyanal-jathar-331537237/" className="text-gray-300 hover:text-white">
                    <i className="fab fa-linkedin text-2xl"></i> {/* LinkedIn logo */}
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-400 text-sm mt-12">

            <p className="pt-16">&copy; {new Date().getFullYear()} EcoSphere. All rights reserved.</p>
</div>

</footer>


    </div>



  );
};

export default Home;