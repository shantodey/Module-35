import React from 'react';
import { use } from 'react';

import Abplayers from './Available players/Abplayers';
const Player = ({ playerdata }) => {
    const PlAyers = use(playerdata)


    return (
        <div className="container mx-auto">


                <Abplayers PlAyers={PlAyers} />

        </div>

    );
};

export default Player;