import { use, useState } from 'react';
import Abplayers from './Available players/Abplayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Player = ({ playerdata,setCoin,abCoine }) => {
    const PlAyers = use(playerdata)
    const [selectedType, setSctive] = useState("Available")
    return (
        <div className="container mx-auto">
            <div className='flex justify-between my-10'>
                <h2 className='text-3xl'>{selectedType === "Available" ? "Available Players" : "Selected Player (4/6)"}</h2>
                <div>
                    <button onClick={() => setSctive("Available")} className={`btn ${selectedType === "Available" ? "bg-[#E7FE29]" : ""} rounded-r-none`}>Available</button>
                    <button onClick={() => setSctive("Selected")} className={`btn ${selectedType === "Selected" ? "bg-[#E7FE29]" : ""} rounded-l-none  `}>Selected (0)</button>
                </div>
            </div>

            {selectedType === "Available" ?
                <Abplayers PlAyers={PlAyers} setCoin={setCoin} abCoine={abCoine}  /> :
                <SelectedPlayers/>}
        </div>

    );
};

export default Player;