import { Suspense } from 'react';
import './App.css'
import Player from './component/homepage/player/Player';
import Navber from './component/navber/navber'
import Hero from './component/hero/Hero';

const getPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playerdata = getPlayer();

  return (
    <>
      <Navber />
      <Hero/>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Player playerdata={playerdata} />
      </Suspense>
    </>
  )
}

export default App