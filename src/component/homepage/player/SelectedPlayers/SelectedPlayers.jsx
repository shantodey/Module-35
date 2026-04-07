import React from 'react';
import { Trash2 } from 'lucide-react';

const SelectedPlayers = ({ selectedplayers }) => {
    return (
        <div className="flex flex-col gap-3">
            {selectedplayers.map((selectedplayers, index) => (
                <div key={index} className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-4">
                        <img
                            src={selectedplayers.playerImg}
                            alt={selectedplayers.playerName}
                            className="w-12 h-12 rounded-xl object-cover bg-gray-100"
                        />
                        <div>
                            <p className="font-bold text-sm">{selectedplayers.playerName}</p>
                            <p className="text-gray-400 text-xs">{selectedplayers.battingStyle}</p>
                        </div>
                    </div>
                    <button className="text-red-400 hover:text-red-600 transition-colors">
                        <Trash2 size={18} />
                    </button>

                </div>
            ))}
        </div>
    );
};

export default SelectedPlayers;