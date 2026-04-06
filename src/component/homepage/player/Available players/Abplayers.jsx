import React from 'react';
import { User, Flag } from 'lucide-react';

const Abplayers = ({ PlAyers }) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {PlAyers.map((player) => (
                <div key={player.playerName} className="card w-full bg-base-100 shadow-md border border-gray-200 p-4 rounded-2xl">
                    <figure className="w-full overflow-hidden rounded-xl" style={{ height: '240px' }}>
                        <img
                            src={player.playerImg}
                            alt={player.playerName}
                            className=" h-full object-cover "
                        />
                    </figure>

                    <div className="card-body px-2 pt-4 pb-2">
                        <div className="flex items-center gap-2">
                            <User size={18} className="text-gray-500" />
                            <h2 className="font-bold text-base">{player.playerName}</h2>
                        </div>

                        {/* Country + Type */}
                        <div className="flex justify-between items-center mt-1">
                            <div className="flex items-center gap-1 text-gray-400 text-sm">
                                <Flag size={14} />
                                <span>{player.playerCountry}</span>
                            </div>
                            <div className="badge badge-ghost bg-gray-100 border-none text-xs font-semibold px-3 py-3">
                                {player.playerType}
                            </div>
                        </div>

                        <div className="divider my-1"></div>

                        {/* Rating label */}
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-sm">Rating</span>
                        </div>

                        {/* Batting / Bowling */}
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-sm">{player.battingStyle}</span>
                            <span className="text-gray-400 text-sm">{player.bowlingStyle}</span>
                        </div>

                        {/* Price + Button */}
                        <div className="flex justify-between items-center mt-2">
                            <span className="font-bold text-sm">Price: ${player.price}</span>
                            <button className="btn btn-outline btn-sm border-gray-300 hover:bg-black hover:text-white capitalize rounded-xl px-4 text-xs">
                                Choose Player
                            </button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Abplayers;