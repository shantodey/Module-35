import React from 'react';
// import { FaUser, FaFlag } from "react-icons/fa";
import { use } from 'react';
import { User } from 'lucide-react';
const Player = ({ playerdata }) => {
    const pldt = use(playerdata) 
    console.log(pldt);

    return (
        <div className="container ms-auto">
             <div className="card w-96 bg-base-100 shadow-xl border border-gray-200 p-4 rounded-3xl">
            {/* Player Image */}
            <figure className="px-2 pt-2">
                <img
                    src="https://p.imgci.com/db/PICTURES/CMS/316600/316605.png"
                    alt="Virat Kohli"
                    className="rounded-2xl h-64 w-full object-cover"
                />
            </figure>

            <div className="card-body px-2 pt-6">
                {/* Name and Icon */}
                <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                       <User />
                    </div>
                    <h2 className="card-title text-2xl font-bold">Virat Kohli</h2>
                </div>

                {/* Country and Role */}
                <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2 text-gray-400 font-medium">
                        {/* <FaFlag /> */}
                        <span>India</span>
                    </div>
                    <div className="badge badge-ghost p-4 py-5 bg-gray-100 border-none font-semibold">
                        All-Rounder
                    </div>
                </div>

                <div className="divider my-1"></div>

                {/* Player Stats */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">Rating</span>
                        <span className="text-gray-500"></span> {/* Empty like your image */}
                    </div>

                    <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">Left-Hand-Bat</span>
                        <span className="text-gray-500 font-medium">Left-Hand-Bat</span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <span className="font-bold text-xl">Price: $1500000</span>
                        <button className="btn btn-outline border-gray-300 hover:bg-black hover:text-white capitalize rounded-xl px-6">
                            Choose Player
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default Player;