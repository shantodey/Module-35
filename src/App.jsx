import { Suspense } from 'react';
import Player from './component/homepage/player/Player';
import Hero from './component/hero/Hero';
import Navbar from './component/navbar/Navbar';

const getPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playerdata = getPlayer();

  return (
    <>
      <Navbar/>
      <Hero/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Player playerdata={playerdata} />
      </Suspense>
    </>
  )
}

export default App