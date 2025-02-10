import React from "react";
import { Link } from 'react-router-dom';
import profile from "../assets/images/10.png"
import back from "../assets/images/back.png"


const Profile = () => {
  return (
    <main className="profile-page">
      {/* Back Button at Top */}
      <div className="absolute top-24 left-4 z-10">
      <Link to="/investordas">
  <img src={back} alt="Back" className="w-10 h-10 cursor-pointer mt-2 ml-2" />
</Link>

</div>

      {/* Banner Section */}
      <section className="relative block h-[500px]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
          }}
        >
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
      </section>

      {/* Profile Info Section */}
      <section className="relative py-16 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div className="px-80">
              <div className="ml-96">
                <div className="lg:w-3/12 px-4 lg:order-2 ">
                  <div className="relative ml-6">
                    <img
                      alt="Profile"
                      src={profile}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                   
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal text-blueGray-700">Ashish Maharjan</h3>
                <div className="text-sm font-bold uppercase text-blueGray-400 mt-2">
                  <i className="mr-2 text-lg text-blueGray-400"></i>
                  Budhanilkantha, Kathmandu
                </div>
                <div className="mt-10 text-blueGray-600">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Technology & Innovation
                </div>
                <div className="text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  Himalaya College of Engineering
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    Mission is to democratize financial services by leveraging blockchain technology to eliminate middlemen, reduce transaction costs, and give consumers greater control over their financial lives.
                    </p>
                    <a href="#" className="font-normal text-[#0062B6]">Show more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
