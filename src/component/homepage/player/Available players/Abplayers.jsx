import React, { useState } from 'react';
import Card from '../../Card/Card';

const Abplayers = ({ PlAyers, setCoin, abCoine }) => {
    const [isSelected, onSelected] = useState(false);

    const handelChosePlayer = (player) => {
        onSelected(true);
        setCoin(abCoine - player.price);
    };

    return (
        <div className="grid grid-cols-3 gap-4">
            {PlAyers.map((player) => (
                <Card
                    key={player.playerName}
                    player={player}
                    isSelected={isSelected}
                    abCoine={abCoine}
                    handelChosePlayer={() => handelChosePlayer(player)}
                />
            ))}
        </div>
    );
};

export default Abplayers;