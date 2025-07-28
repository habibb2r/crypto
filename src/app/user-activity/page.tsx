import SectionTitle from "@/components/common/SectionTitle";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import "./shimmer.css";

export default function page() {
  const userData = [
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '-----', time: '35 min', program: '-----' , isNew: true },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
    { id: 'ID17799', profile: '+10 USD', time: '35 min', program: 'Binary' , isNew: false },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto mt-10 md:mt-0 py-10 px-4 sm:px-6 lg:px-8 md:py-6">
        {/* Shimmer effect only on border */}
        <div className="shimmer-container w-full max-w-3xl mx-auto rounded-xl shadow-xl relative overflow-hidden"> 
          <div className="p-1 sm:p-6">
            <SectionTitle title="User Activity" />
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base text-white">
                <thead>
                  <tr className="border-b border-gray-700 text-[#6A6E71]">
                    <th className="py-3 px-2 sm:px-4 font-medium">User ID</th>
                    <th className="py-3 px-2 sm:px-4 font-medium">Profile</th>
                    <th className="py-3 px-2 sm:px-4 font-medium">Time</th>
                    <th className="py-3 px-2 sm:px-4 font-medium">Program</th>
                    <th className="py-3 px-2 sm:px-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                      <td className="py-3 px-1 sm:px-4">
                        <div className="relative">
                          <span className={`inline-block ${user.isNew ? "border border-[#FF7800]" : "bg-[#FF7800] text-white"} rounded-lg px-2 py-1 text-xs sm:text-sm`}>
                          {user.id}
                        </span>
                        <span className={`${user.isNew ? "top-[-15px] md:top-[-20px] text-xs md:text-sm left-1/2 absolute " : "hidden"}`}>
                          New
                        </span>
                        </div>
                      </td>
                      <td className="py-3 px-1 sm:px-4 text-xs md:text-base">{user.profile}</td>
                      <td className="py-3 px-1 sm:px-4 text-xs md:text-base">{user.time}</td>
                      <td className="py-3 px-1 sm:px-4 text-xs md:text-base">{user.program}</td>
                      <td className="py-3 px-1 sm:px-4 text-xs md:text-base">
                        <button className="w-full sm:w-auto bg-[#483315] border border-[#FF7800] text-white px-2 md:px-5 py-3 rounded-full text-xs sm:text-sm hover:bg-[#FF7800] hover:border-[#483315] transition-colors cursor-pointer">
                          View Profile
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}