import Card from '../../Card/Card';
const Abplayers = ({ PlAyers, setCoin, abCoine,isSelected,selectedplayers,setSelectedPlayers }) => {

    return (
        <div className="grid grid-cols-3 gap-4">
            {PlAyers.map((player) => (
                <Card
                    key={player.playerName}
                    player={player}
                    isSelected={isSelected}
                    abCoine={abCoine}
                    setCoin={setCoin}
                    selectedplayers={selectedplayers}
                    setSelectedPlayers={setSelectedPlayers}
                />
            ))}
        </div>
    );
};

export default Abplayers;