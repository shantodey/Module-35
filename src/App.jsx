import { Suspense, useState } from 'react';
import Player from './component/homepage/player/Player';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';

const getPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}
function App() {
  const [abCoine,coIn]=useState(50000)
  const playerdata = getPlayer();

  return (
    <>
      <Navbar abCoine={abCoine}/>
      <Hero/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Player playerdata={playerdata} />
      </Suspense>
    </>
  )
}

export default App