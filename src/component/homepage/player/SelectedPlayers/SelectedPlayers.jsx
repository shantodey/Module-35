import React from 'react';
import { Trash2 } from 'lucide-react';

const SelectedPlayers = ({ selectedplayers, setSelectedPlayers,abCoine,setCoin }) => {
    const returnCoin=(player)=>{
        setCoin(abCoine + player.price) ;
    }
    const deleteSelectedPlayer = (playerToDelete,) => { 
        const filterPlayers = selectedplayers.filter(
            (player) => player.playerName !== playerToDelete.playerName
        );
        setSelectedPlayers(filterPlayers);
    };

    return (
        <div className="flex flex-col gap-3">
            {selectedplayers.length === 0 ? (
                <div className="text-center text-gray-400 py-8">
                    No players selected yet
                </div>
            ) : (
                selectedplayers.map((player, index) => (
                    <div key={index} className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-4 py-3">
                        <div className="flex items-center gap-4">
                            <img
                                src={player.playerImg}
                                alt={player.playerName}
                                className="w-12 h-12 rounded-xl object-cover bg-gray-100"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/48?text=No+Image';
                                    e.target.onerror = null;
                                }}
                            />
                            <div>
                                <p className="font-bold text-sm">{player.playerName}</p>
                                <p className="text-gray-400 text-xs">{player.battingStyle}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => {deleteSelectedPlayer(player);returnCoin(player)}} 
                            className="text-red-400 hover:text-red-600 transition-colors"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default SelectedPlayers;