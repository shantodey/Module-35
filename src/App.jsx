import { Suspense, useState } from 'react';
import Player from './component/homepage/player/Player';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';

const getPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}
function App() {
  const [abCoine,setCoin]=useState(5000000)
  const playerdata = getPlayer();

  return (
    <>
      <Navbar abCoine={abCoine} />
      <Hero/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Player playerdata={playerdata} setCoin={setCoin} abCoine={abCoine}/>
      </Suspense>
    </>
  )
}

export default App